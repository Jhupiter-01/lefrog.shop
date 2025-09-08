#!/bin/bash

echo "🐸 Instalando LeFrog Landing Page..."

# Crear backup del index.html existente si existe
if [ -f "/var/www/lefrog/index.html" ]; then
    echo "📦 Creando backup del index.html existente..."
    sudo cp /var/www/lefrog/index.html /var/www/lefrog/index.html.backup.$(date +%Y%m%d_%H%M%S)
fi

# Copiar el nuevo index.html
echo "📄 Copiando nueva landing page..."
sudo cp index.html /var/www/lefrog/

# Copiar imágenes si existen
if [ -f "modern-3d-printer-workspace-with-orange-lighting-a.jpg" ]; then
    echo "🖼️  Copiando imágenes..."
    sudo cp *.jpg /var/www/lefrog/ 2>/dev/null || true
fi

# Establecer permisos correctos
echo "🔐 Estableciendo permisos..."
sudo chown -R www-data:www-data /var/www/lefrog/
sudo chmod -R 755 /var/www/lefrog/

# Verificar que nginx esté corriendo
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx está corriendo"
else
    echo "⚠️  Nginx no está corriendo. Iniciando..."
    sudo systemctl start nginx
fi

echo "🎉 ¡Instalación completada!"
echo "🌐 Tu sitio debería estar disponible en: http://lefrog.shop"
echo ""
echo "📋 Archivos conservados:"
echo "   - Todos tus favicons y archivos estáticos"
echo "   - robots.txt, sitemap.xml, etc."
echo ""
echo "🔄 Si algo no funciona:"
echo "   - Verifica nginx: sudo systemctl status nginx"
echo "   - Revisa logs: sudo tail -f /var/log/nginx/error.log"
