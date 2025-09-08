# Despliegue en Raspberry Pi

## Pasos para conservar archivos existentes:

1. **Antes del despliegue**, asegúrate de que estos archivos estén en `/var/www/lefrog`:
   - favicon*.png/ico/svg
   - apple-touch-icon.png
   - logo.png
   - robots.txt
   - sitemap.xml
   - site.webmanifest
   - web-app-manifest-*.png

2. **Ejecutar despliegue**:
   \`\`\`bash
   chmod +x deploy.sh
   ./deploy.sh
   \`\`\`

3. **Configurar nginx** (opcional):
   \`\`\`nginx
   server {
       listen 80;
       server_name lefrog.shop;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   \`\`\`

## Comandos útiles:
- Ver logs: `docker-compose logs -f`
- Reiniciar: `docker-compose restart`
- Detener: `docker-compose down`
