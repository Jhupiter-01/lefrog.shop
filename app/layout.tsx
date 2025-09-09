import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Script from 'next/script'
import { ThemeProvider } from "@/components/theme-provider"

import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#00a651',
  maximumScale: 1.0,
  userScalable: false
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "LeFrog - Impresión 3D Profesional",
  "description": "Servicio profesional de impresión 3D con cobertura en todo Chile. Especialistas en prototipos, piezas funcionales y diseños personalizados.",
  "url": "https://lefrog.shop",
  "telephone": "+56979186871",
  "email": "contacto@lefrog.shop",
  "priceRange": "$$",
  "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
  }],
  "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ancud",
      "addressRegion": "Los Lagos",
      "postalCode": "5710000",
      "addressCountry": "CL",
      "streetAddress": "Servicio con cobertura nacional"
  },
  "geo": {
      "@type": "GeoCoordinates",
      "latitude": -41.8697,
      "longitude": -73.8203
  },
  "sameAs": [
      "https://t.me/lefrogshop",
      "https://instagram.com/lefrogshop"
  ],
  "serviceType": ["Impresión 3D", "Prototipado Rápido", "Diseño 3D"],
  "areaServed": [{
      "@type": "Country",
      "name": "Chile"
  }, {
      "@type": "AdministrativeArea",
      "name": "Región de Los Lagos"
  }],
  "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Impresión 3D",
      "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
              "@type": "Service",
              "name": "Impresión 3D FDM",
              "description": "Impresión 3D profesional con tecnología FDM en diversos materiales"
          }
      }]
  }
}

export const metadata: Metadata = {
  title: {
    default: "Impresión 3D Profesional en Chile 🐸 | LeFrog - Prototipos y Piezas Personalizadas",
    template: "%s | LeFrog"
  },
  description: "Servicio profesional de impresión 3D en Chile con envíos a todo el país. Especialistas en prototipos, piezas funcionales y diseños personalizados en PLA y PETG. Calidad industrial con atención personalizada. Cotiza hoy mismo.",
  keywords: [
    "impresión 3D Chile", 
    "prototipos impresión 3D", 
    "impresión PLA PETG", 
    "diseño 3D profesional", 
    "LeFrog impresiones 3D", 
    "servicio impresión 3D online", 
    "cotización impresión 3D", 
    "piezas personalizadas 3D", 
    "impresiones 3D Santiago", 
    "envíos a regiones Chile"
  ],
  authors: [{ 
    name: "LeFrog",
    url: "https://lefrog.shop"
  }],
  metadataBase: new URL('https://lefrog.shop'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LeFrog - Impresión 3D Profesional en Todo Chile',
    description: 'Servicio de impresión 3D profesional con envíos a todo Chile. Especialistas en prototipos, piezas funcionales y diseños personalizados. ✓ Presupuesto inmediato ✓ Calidad garantizada ✓ Atención personalizada',
    url: 'https://lefrog.shop',
    siteName: 'LeFrog - Impresión 3D Profesional',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'LeFrog - Impresión 3D Profesional en Todo Chile'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impresión 3D Profesional en Todo Chile - LeFrog 🐸',
    description: 'Servicio de impresión 3D profesional con envíos a todo Chile. Especialistas en prototipos, piezas funcionales y diseños personalizados. ✓ Presupuesto inmediato ✓ Calidad garantizada',
    images: ['/logo.png'],
    creator: '@LeFrogShop',
    site: '@LeFrogShop'
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  applicationName: 'LeFrog Shop',
  appleWebApp: {
    title: 'LeFrog Shop',
    statusBarStyle: 'default',
  },
  creator: "LeFrog",
  publisher: "LeFrog",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Manufacturing & Industrial",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  other: {
    'geo.region': 'CL-LL',
    'geo.placename': 'Ancud, Chiloé',
    'geo.position': '-41.8697;-73.8203',
    'ICBM': '-41.8697, -73.8203',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZHLRRSBXCE');
          `}
        </Script>
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-ZHLRRSBXCE" 
          strategy="afterInteractive"
        />
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
