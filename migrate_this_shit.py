import os
import sys
import paramiko
from scp import SCPClient
import getpass
import zipfile

# Configuración
RASPBERRY_IP = "192.168.4.200"  # Cambia esto por la IP de tu Raspberry
USERNAME = "krote"  # Tu usuario en la Raspberry
REMOTE_DIR = "/var/www/lefrog"

def create_ssh_client(server, port, user, password=None, key_filename=None):
    """Crea y retorna un cliente SSH"""
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(server, port, user, password, key_filename=key_filename)
        return client
    except Exception as e:
        print(f"Error al conectar a {server}: {str(e)}")
        sys.exit(1)

def create_zip(source, destination, excludes):
    """Crea un archivo ZIP usando Python puro"""
    with zipfile.ZipFile(destination, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, _, files in os.walk(source):
            # Verificar si el directorio actual está en la lista de exclusión
            if any(excl in root for excl in excludes):
                continue
                
            for file in files:
                file_path = os.path.join(root, file)
                # Verificar si el archivo debe ser excluido
                if not any(file.endswith(tuple(excludes)) or excl in file_path for excl in excludes):
                    # Calcular la ruta relativa para el archivo en el ZIP
                    arcname = os.path.relpath(file_path, source)
                    print(f"   Añadiendo: {arcname}")
                    zipf.write(file_path, arcname)

def deploy():
    print("🚀 Iniciando despliegue a Raspberry Pi...")
    
    # Obtener contraseña de forma segura
    password = getpass.getpass(f"🔑 Ingresa la contraseña para {USERNAME}@{RASPBERRY_IP}: ")
    
    # Directorio local
    local_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Archivos y carpetas a excluir
    excludes = [
        'node_modules', 
        '.next', 
        '.git',
        '__pycache__',
        '.pyc',
        '.env',
        '.log',
        '*.log',
        '.vscode',
        '.idea',
        '*.zip'
    ]
    
    # Crear archivo ZIP
    tmp_zip = "lefrog-deploy.zip"
    print("📦 Creando archivo ZIP...")
    create_zip(local_dir, tmp_zip, excludes)
    
    try:
        # Conectar por SSH
        print(f"🔗 Conectando a {USERNAME}@{RASPBERRY_IP}...")
        ssh = create_ssh_client(RASPBERRY_IP, 22, USERNAME, password)
        
        # Crear SCP client
        scp = SCPClient(ssh.get_transport())
        
        # Subir archivo
        print("⬆️  Subiendo archivos...")
        scp.put(tmp_zip, f"/tmp/{tmp_zip}")
        
        # Comandos a ejecutar en el servidor
        commands = [
            f"echo '📂 Creando directorio de respaldo...'",
            f"mkdir -p {REMOTE_DIR}_backup",
            f"cp -r {REMOTE_DIR}/* {REMOTE_DIR}_backup/ 2>/dev/null || true",
            
            f"echo '📦 Extrayendo archivos...'",
            f"sudo rm -rf {REMOTE_DIR}/*",
            f"sudo unzip -o /tmp/{tmp_zip} -d {REMOTE_DIR}/",
            
            f"echo '🔧 Configurando permisos...'",
            f"sudo chown -R {USERNAME}:{USERNAME} {REMOTE_DIR}",
            f"sudo chmod -R 755 {REMOTE_DIR}",
            
            f"echo '📦 Instalando dependencias...'",
            f"cd {REMOTE_DIR} && npm install --omit=dev",
            f"cd {REMOTE_DIR} && npm install -D @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9",
            
            f"echo '🏗️  Construyendo la aplicación...'",
            f"cd {REMOTE_DIR} && npm run build",
            
            f"echo '🔄 Reiniciando servicios...'",
            f"sudo systemctl restart nginx",
            f"pm2 restart lefrog || echo '⚠️  No se pudo reiniciar PM2, continuando...'",
            
            f"echo '🧹 Limpiando...'",
            f"rm /tmp/{tmp_zip}"
        ]
        
        # Ejecutar comandos
        for cmd in commands:
            print(f"   → {cmd}")
            stdin, stdout, stderr = ssh.exec_command(cmd, get_pty=True)
            for line in stdout:
                print(f"   {line.strip()}")
            for line in stderr:
                print(f"   [ERROR] {line.strip()}")
        
        print("✅ ¡Despliegue completado con éxito!")
        
    except Exception as e:
        print(f"❌ Error durante el despliegue: {str(e)}")
    finally:
        # Limpiar
        if 'scp' in locals():
            scp.close()
        if 'ssh' in locals():
            ssh.close()
        if os.path.exists(tmp_zip):
            os.remove(tmp_zip)
        print("✨ Proceso finalizado")

if __name__ == "__main__":
    deploy()