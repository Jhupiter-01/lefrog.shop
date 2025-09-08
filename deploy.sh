#!/bin/bash

# Script para desplegar en Raspberry Pi
echo "🚀 Desplegando Lefrog.shop en Raspberry Pi..."

echo "📁 Preparando archivos estáticos..."
mkdir -p static-files
cp -f *.png *.ico *.svg robots.txt sitemap.xml site.webmanifest *.css static-files/ 2>/dev/null || echo "Algunos archivos no encontrados, continuando..."

# Construir la imagen Docker
echo "📦 Construyendo imagen Docker..."
docker build -t lefrog-shop .

# Detener contenedor anterior si existe
echo "🛑 Deteniendo contenedor anterior..."
docker stop lefrog-app 2>/dev/null || true
docker rm lefrog-app 2>/dev/null || true

echo "▶️ Iniciando nuevo contenedor..."
docker-compose up -d

echo "✅ Despliegue completado!"
echo "🌐 Tu sitio está disponible en: http://localhost:3000"
echo "📊 Para ver logs: docker-compose logs -f"
echo "📁 Archivos estáticos conservados en: ./static-files/"
