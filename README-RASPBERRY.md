# Instalación en Raspberry Pi

## Requisitos previos
- Raspberry Pi con Raspberry Pi OS (preferiblemente la versión Lite)
- Acceso SSH a la Raspberry Pi
- Node.js 18 o superior
- pnpm
- Nginx (opcional, pero recomendado)

## Instrucciones de instalación

1. **Preparar los archivos en Windows**
   - Comprime la carpeta del proyecto (excluyendo `node_modules`)
   - Transfiere el archivo ZIP a tu Raspberry Pi usando SCP o una memoria USB

2. **En la Raspberry Pi**
   ```bash
   # 1. Instalar dependencias del sistema
   sudo apt update && sudo apt upgrade -y
   
   # 2. Instalar Node.js 18
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # 3. Instalar pnpm globalmente
   sudo npm install -g pnpm
   
   # 4. Instalar PM2 globalmente
   sudo npm install -g pm2
   
   # 5. Crear directorio y descomprimir archivos
   sudo mkdir -p /var/www/lefrog
   sudo chown -R $USER:$USER /var/www/lefrog
   
   # 6. Copiar archivos a /var/www/lefrog/
   # (Asegúrate de estar en el directorio donde descomprimiste los archivos)
   cp -r . /var/www/lefrog/
   cd /var/www/lefrog
   
   # 7. Instalar dependencias
   pnpm install --production
   
   # 8. Iniciar la aplicación con PM2
   pm2 start ecosystem.config.js
   
   # 9. Configurar PM2 para iniciar al arrancar
   pm2 startup
   pm2 save
   ```

## Configuración de Nginx (recomendado)

1. Instalar Nginx:
   ```bash
   sudo apt install -y nginx
   ```

2. Crear configuración para la aplicación:
   ```bash
   sudo nano /etc/nginx/sites-available/lefrog
   ```

3. Pegar la siguiente configuración:
   ```nginx
   server {
       listen 80;
       server_name _;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. Habilitar el sitio y reiniciar Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/lefrog /etc/nginx/sites-enabled/
   sudo rm /etc/nginx/sites-enabled/default
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. Configurar el firewall:
   ```bash
   sudo ufw allow 'Nginx Full'
   sudo ufw allow ssh
   sudo ufw --force enable
   ```

## Acceso a la aplicación
- La aplicación estará disponible en `http://<IP_DE_TU_RASPBERRY_PI>`
- Para ver los logs: `pm2 logs lefrog-landing`
- Para reiniciar la aplicación: `pm2 restart lefrog-landing`

## Actualizaciones futuras
Para actualizar la aplicación:
1. Detener la aplicación: `pm2 stop lefrog-landing`
2. Hacer backup de la carpeta actual
3. Copiar los nuevos archivos
4. Instalar nuevas dependencias: `pnpm install --production`
5. Reconstruir la aplicación: `pnpm run build`
6. Iniciar la aplicación: `pm2 start lefrog-landing`
