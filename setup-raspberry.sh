#!/bin/bash

# Actualizar el sistema
echo "Actualizando el sistema..."
sudo apt update && sudo apt upgrade -y

# Instalar Node.js
echo "Instalando Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PM2 globalmente
echo "Instalando PM2..."
sudo npm install -g pm2

# Instalar pnpm
echo "Instalando pnpm..."
sudo npm install -g pnpm

# Instalar Nginx
echo "Instalando Nginx..."
sudo apt install -y nginx

# Crear archivo de configuración de Nginx
echo "Configurando Nginx..."
cat > /tmp/lefrog << 'EOL'
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
EOL

# Mover configuración de Nginx
sudo mv /tmp/lefrog /etc/nginx/sites-available/lefrog
sudo ln -sf /etc/nginx/sites-available/lefrog /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Reiniciar Nginx
echo "Reiniciando Nginx..."
sudo systemctl restart nginx

# Configurar el firewall
echo "Configurando el firewall..."
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw --force enable

echo "¡Instalación completada!"
echo "1. Copia los archivos a /var/www/lefrog/"
echo "2. Ejecuta: cd /var/www/lefrog && pnpm install --production"
echo "3. Inicia la aplicación: pm2 start ecosystem.config.js"
echo "4. Configura PM2 para iniciar al arrancar: pm2 startup && pm2 save"
