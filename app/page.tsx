"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Star, 
  HeadphonesIcon, 
  ArrowRight, 
  Check, 
  CheckCircle, 
  Printer, 
  Layers, 
  Zap, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Upload, 
  Search, 
  Package, 
  Truck, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Award, 
  Clock, 
  Shield, 
  Mail, 
  Instagram, 
  Facebook 
} from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3" aria-label="Lefrog.shop - Inicio">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm" aria-hidden="true">
                <span className="text-primary-foreground font-bold text-xl">L</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Lefrog.shop</h1>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-8">
              {["Servicios", "Proceso", "Galería", "FAQ", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>
            <ThemeToggle />
            <Button
              variant="default"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Cotizar Proyecto
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Value Proposition */}
      <section className="relative py-24 md:py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-3d-printer-workspace-with-orange-lighting-a.jpg"
            alt="Impresión 3D de precisión industrial en Lefrog - Chiloé, Chile"
            className="w-full h-full object-cover opacity-40 dark:opacity-30"
            width="1920"
            height="1080"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <div role="status" aria-label="Proyectos realizados" className="mb-6">
              <Badge variant="secondary" className="px-5 py-2.5 text-sm font-medium bg-accent text-white border-0 shadow-md">
                <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
                🌟 Más de 200 proyectos exitosos en todo Chile
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
              Impresión 3D de <span className="text-primary">Alta Precisión</span>
              <br className="hidden md:block" />
              <span className="text-accent">desde Chiloé para todo Chile</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
              Soluciones personalizadas, acabados profesionales y soporte directo contigo en cada etapa del proyecto.
              <br />
              <span className="text-lg">Resolución de hasta <strong className="font-semibold">0.05mm</strong> y tolerancias de <strong className="font-semibold">±0.1mm</strong> garantizadas.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10">Cotizar Ahora</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5 hover:border-primary/80 transition-all duration-300 group"
                onClick={() => document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10">Ver Proyectos</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
              {[
                { icon: Award, text: "Calidad Certificada", subtext: "+200 proyectos" },
                { icon: Clock, text: "Entrega Rápida", subtext: "24-48h" },
                { icon: Shield, text: "Garantía Incluida", subtext: "Soporte post-venta" },
                { icon: CheckCircle, text: "Pagos Seguros", subtext: "Webpay & Transferencia" }
              ].map((item, index) => (
                <div key={index} className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.text}</p>
                      <p className="text-sm text-muted-foreground">{item.subtext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Why Choose Us */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4 border-accent/20 text-accent bg-accent/5">
                  Nuestra Historia
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Nacimos en <span className="text-accent">Chiloé</span> para <span className="text-primary">simplificar</span> la fabricación digital
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  En el corazón de Ancud, en la hermosa isla de Chiloé, nació Lefrog con una misión clara: hacer accesible la tecnología de impresión 3D industrial a emprendedores, diseñadores y empresas de todo Chile.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Lo que comenzó como un taller local hoy se ha convertido en un referente nacional, habiendo completado más de 200 proyectos exitosos. Nuestro secreto: combinar la artesanía local con tecnología de punta.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-lg border">
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Proyectos<br/>completados</div>
                  </div>
                  <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-lg border">
                    <div className="text-2xl font-bold text-primary">99%</div>
                    <div className="text-sm text-muted-foreground">Clientes<br/>satisfechos</div>
                  </div>
                  <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-lg border">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Soporte<br/>técnico</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <Badge variant="outline" className="mb-4 border-accent/20 text-accent bg-accent/5">
                  Nuestro Enfoque
                </Badge>
                <h3 className="text-3xl font-bold mb-6">¿Por qué nuestros clientes nos eligen?</h3>
              </div>
              
              {[
                {
                  icon: Layers,
                  title: "Tecnología de punta",
                  description: "Impresoras industriales con resolución de hasta 0.05mm y tolerancias de ±0.1mm garantizadas.",
                  color: "bg-blue-100 dark:bg-blue-900/30"
                },
                {
                  icon: Zap,
                  title: "Entregas rápidas",
                  description: "Plazos de entrega desde 24-48 horas para prototipos y proyectos urgentes.",
                  color: "bg-amber-100 dark:bg-amber-900/30"
                },
                {
                  icon: HeadphonesIcon,
                  title: "Asesoría experta",
                  description: "Equipo técnico especializado que te guía desde el diseño hasta la pieza final.",
                  color: "bg-emerald-100 dark:bg-emerald-900/30"
                },
                {
                  icon: Shield,
                  title: "Garantía de calidad",
                  description: "Cada pieza pasa por estrictos controles antes de ser enviada a tu puerta.",
                  color: "bg-purple-100 dark:bg-purple-900/30"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-background/50 transition-colors">
                  <div className={`p-3 rounded-lg ${item.color} mt-1`}>
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full md:w-auto"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Habla con un experto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-4 bg-background/50" aria-labelledby="services-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent/20 text-accent bg-accent/5">
              Nuestras Soluciones
            </Badge>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Soluciones en Impresión 3D <span className="text-primary">a tu Medida</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto text-pretty leading-relaxed">
              Te acompañamos desde la idea hasta la pieza final. Ofrecemos prototipos rápidos, piezas funcionales y modelos detallados. Nos adaptamos a tu proyecto, no al revés.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Prototipos Rápidos",
                description: "Convierte tus ideas en objetos tangibles rápidamente",
                price: "Desde $15.000",
                bestFor: "Diseñadores y emprendedores que necesitan materializar ideas",
                features: [
                  "Asesoría en diseño 3D sin costo adicional",
                  "Material estándar incluido",
                  "Revisión de archivos con recomendaciones",
                  "Soporte durante todo el proceso"
                ],
                cta: "Comenzar proyecto",
                popular: true
              },
              {
                title: "Piezas Funcionales",
                description: "Componentes listos para uso en tus proyectos",
                price: "Cotización personalizada",
                bestFor: "Reemplazo de piezas o componentes específicos",
                features: [
                  "Materiales seleccionados según necesidad",
                  "Acabados personalizables",
                  "Ajustes según requerimientos",
                  "Asesoría en selección de materiales"
                ],
                cta: "Consultar disponibilidad",
                popular: false
              },
              {
                title: "Asesoría Personalizada",
                description: "¿Tienes un proyecto en mente? Te ayudamos a hacerlo realidad",
                price: "Primera consulta sin costo",
                bestFor: "Proyectos que necesitan orientación técnica",
                features: [
                  "Análisis de factibilidad",
                  "Recomendaciones de materiales",
                  "Optimización de diseños",
                  "Presupuesto detallado"
                ],
                cta: "Agendar asesoría",
                popular: false
              },
              {
                title: "Talleres Básicos",
                description: "Aprende los fundamentos del modelado e impresión 3D",
                price: "Próximamente",
                bestFor: "Interesados en aprender sobre impresión 3D",
                features: [
                  "Introducción al modelado 3D",
                  "Configuración de impresoras",
                  "Selección de materiales",
                  "Solución de problemas comunes"
                ],
                cta: "Quiero más información",
                popular: false
              },
            ].map((service, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden bg-card rounded-xl shadow-sm">
                {service.popular && (
                  <div className="bg-gradient-to-r from-accent to-accent/80 text-white text-sm font-medium text-center py-1.5" aria-label="Servicio más solicitado">
                    ¡Más solicitado!
                  </div>
                )}
                <CardHeader className="pb-4 pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl" aria-hidden="true">
                      <Printer className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">Precio referencial</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mt-1">{service.description}</p>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-foreground">Ideal para:</span>{' '}
                    <span className="text-sm text-muted-foreground">{service.bestFor}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Incluye:</h4>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-start">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <Check className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className="w-full mt-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
                      size="lg"
                      onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    
                    <div className="text-center">
                      <button 
                        onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                        className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                      >
                        <MessageCircle className="h-4 w-4 mr-1.5" />
                        ¿Tienes dudas? Habla con un experto
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-background border rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿No encuentras lo que necesitas?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Cada proyecto es único. Cuéntanos sobre tu idea y te ayudaremos a encontrar la mejor solución de impresión 3D para ti.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consulta personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Galería de Proyectos</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Galería de proyectos - Próximamente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Prototipo de Drone Racing",
                category: "Aeronáutica",
                material: "PLA Negro",
                description: "Chasis completo para drone de carreras, peso optimizado",
                image: "/drone-racing-frame-3d-printed-black-pla-lightweigh.jpg",
              },
              {
                title: "Repuesto Automotriz BMW",
                category: "Automotriz",
                material: "ABS Gris",
                description: "Soporte de espejo retrovisor, resistente a temperatura",
                image: "/bmw-car-mirror-bracket-3d-printed-grey-abs-automot.jpg",
              },
              {
                title: "Miniatura Arquitectónica",
                category: "Arquitectura",
                material: "Resina Blanca",
                description: "Maqueta de edificio residencial, detalles ultra finos",
                image: "/architectural-building-model-white-resin-3d-printe.jpg",
              },
              {
                title: "Prótesis de Mano",
                category: "Médico",
                material: "PLA+ Skin",
                description: "Prótesis funcional personalizada, articulaciones móviles",
                image: "/prosthetic-hand-3d-printed-pla-skin-color-function.jpg",
              },
              {
                title: "Herramienta Industrial",
                category: "Industrial",
                material: "PETG Transparente",
                description: "Guía de corte personalizada para producción en serie",
                image: "/industrial-cutting-guide-transparent-petg-3d-print.jpg",
              },
              {
                title: "Joyería Artesanal",
                category: "Arte",
                material: "Resina Casteable",
                description: "Anillo con diseño orgánico para fundición en plata",
                image: "/organic-ring-design-castable-resin-3d-printed-jewe.jpg",
              },
            ].map((project, i) => (
              <Card key={i} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Package className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <p className="text-muted-foreground">Galería de proyectos próximamente</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">{project.material}</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-balance">{project.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">
              Cómo Trabajamos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mi <span className="text-primary">Compromiso</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto text-pretty leading-relaxed">
              Como emprendedor en una etapa inicial, estoy comprometido con cada proyecto de manera personal. Me aseguro de revisar cada pieza para garantizar la mejor calidad posible. Mi objetivo es construir una relación de confianza contigo y brindarte un servicio excepcional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consulta Inicial",
                description: "Cuéntanos sobre tu proyecto o envíanos tu archivo 3D (STL, OBJ)",
                icon: Upload,
                time: "Sin compromiso",
              },
              {
                step: "02",
                title: "Análisis y Presupuesto",
                description: "Estudiamos tu solicitud y te enviamos un presupuesto detallado",
                icon: Search,
                time: "Máximo 24 horas hábiles",
              },
              {
                step: "03",
                title: "Aprobación y Producción",
                description: "Con tu aprobación, programamos la impresión con el material adecuado",
                icon: Package,
                time: "Tiempo según complejidad",
              },
              {
                step: "04",
                title: "Revisión y Entrega",
                description: "Verificamos la calidad y coordinamos la entrega o envío",
                icon: Truck,
                time: "Acordado previamente",
              },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full z-20">
                  {step.step}
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-y-1/2 z-0" />
                )}
                <h3 className="font-bold text-lg mb-2 text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 text-pretty">{step.description}</p>
                <Badge variant="secondary" className="text-xs bg-accent/10 text-accent">
                  {step.time}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendoza",
                company: "Startup Tech",
                rating: 5,
                comment: "Excelente calidad en los prototipos. Nos ayudaron a validar nuestro producto rápidamente.",
              },
              {
                name: "María Silva",
                company: "Arquitecta",
                rating: 5,
                comment: "Perfectos para maquetas arquitectónicas. Precisión increíble y buenos precios.",
              },
              {
                name: "Roberto García",
                company: "Maker",
                rating: 5,
                comment: "El mejor servicio de impresión 3D en Chile. Siempre cumplen con los tiempos.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Preguntas Comunes</h2>
            <p className="text-muted-foreground text-lg">Aquí respondo las dudas más frecuentes que me hacen mis clientes</p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "¿Qué formatos de archivo aceptan?",
                answer:
                  "Principalmente trabajo con archivos STL y OBJ. Si tienes tu diseño en otro formato (como archivos CAD), podemos conversar sobre cómo convertirlo al formato adecuado. También puedo asesorarte en el diseño si lo necesitas.",
              },
              {
                question: "¿Cuánto tiempo toma imprimir mi proyecto?",
                answer:
                  "Al ser un emprendimiento pequeño, manejo tiempos realistas. Dependiendo de la complejidad y tamaño de la pieza, los tiempos pueden variar entre 2 a 5 días hábiles. Siempre te daré una estimación clara desde el principio y te mantendré informado del avance.",
              },
              {
                question: "¿Qué materiales utilizan?",
                answer:
                  "Actualmente trabajo principalmente con PLA y PETG por su excelente relación calidad-precio y por ser más amigables con el medio ambiente. Según tus necesidades específicas, podemos evaluar si estos materiales son adecuados para tu proyecto o si necesitas otras opciones.",
              },
              {
                question: "¿Hacen envíos?",
                answer:
                  "Sí, realizo envíos a todo Chile a través de Starken. Los costos varían según el tamaño, peso y destino del paquete. También ofrezco retiro en persona en Ancud, Chiloé, con todas las medidas de seguridad.",
              },
              {
                question: "¿Qué pasa si la pieza no cumple mis expectativas?",
                answer:
                  "Mi prioridad es tu satisfacción. Si la pieza impresa no cumple con lo acordado, trabajaremos juntos para hacer los ajustes necesarios. Como emprendimiento en crecimiento, valoro enormemente tu feedback para mejorar continuamente.",
              },
              {
                question: "¿Cuál es el tamaño máximo que pueden imprimir?",
                answer:
                  "Actualmente puedo imprimir piezas de hasta 220x220x250mm. Si tu proyecto es más grande, podemos evaluar la posibilidad de dividirlo en partes para su posterior ensamblaje. Estoy en proceso de ampliar mi capacidad, así que no dudes en consultar por proyectos más grandes.",
              },
              {
                question: "¿Cómo calculan los precios?",
                answer:
                  "El precio se calcula considerando principalmente el material utilizado y el tiempo de impresión. Como emprendimiento pequeño, busco mantener precios justos y accesibles. Te daré un desglose claro de los costos antes de comenzar cualquier trabajo.",
              },
            ].map((faq, i) => (
              <Card
                key={i}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-left">{faq.question}</h3>
                    {openFaq === i ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === i && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-pretty">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-card relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Hablemos de tu proyecto
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto text-pretty leading-relaxed">
              ¿Tienes una idea en mente? Cuéntame sobre tu proyecto y juntos lo haremos realidad. Estoy aquí para ayudarte en cada paso del proceso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="font-semibold mb-3">¿Prefieres el contacto directo?</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WhatsApp (respuesta rápida)</p>
                    <a href="https://wa.me/56979186871" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-primary font-medium">
                      <MessageCircle className="h-5 w-5 mr-2" /> +56 9 7918 6871
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Correo electrónico</p>
                    <a href="mailto:contacto@lefrog.shop" className="flex items-center text-foreground hover:text-primary font-medium">
                      <Mail className="h-5 w-5 mr-2" /> contacto@lefrog.shop
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-muted-foreground" />
                      <span className="text-foreground">Ancud, Chiloé - Chile<br />
                      <span className="text-sm text-muted-foreground">Atención con cita previa</span></span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">
                      Horario de atención:<br />
                      Lunes a Viernes: 9:00 - 18:00 hrs<br />
                      Sábados: 10:00 - 14:00 hrs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="p-8 shadow-lg border-0">
                <h3 className="font-bold text-xl mb-6 text-primary">Cotiza tu proyecto</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Nombre" required className="h-12" />
                    <Input placeholder="Email" type="email" required className="h-12" />
                  </div>
                  <Input placeholder="Teléfono" className="h-12" />
                  <Textarea
                    placeholder="Describe tu proyecto: tipo de pieza, dimensiones, material preferido, cantidad, fecha de entrega..."
                    rows={4}
                    required
                    className="resize-none"
                  />
                  <Button
                    className="w-full h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-semibold"
                    size="lg"
                    type="submit"
                  >
                    Solicitar Cotización Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button
        className="fixed bottom-8 right-8 rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
        onClick={() =>
          window.open(
            "https://wa.me/56979186871?text=Hola, me interesa cotizar un proyecto de impresión 3D",
            "_blank"
          )
        }
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </button>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-4 mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">L</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lefrog.shop</h3>
                  <p className="text-sm text-muted-foreground">Impresión 3D en Chiloé</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Un emprendimiento local de impresión 3D enfocado en calidad, atención personalizada y soluciones a medida para cada proyecto.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/lefrog.shop/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram de Lefrog">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/lefrog.shop/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook de Lefrog">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</a></li>
                <li><a href="#proyectos" className="text-muted-foreground hover:text-primary transition-colors">Proyectos</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">Preguntas Comunes</a></li>
                <li><a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mt-1 mr-2 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Ancud, Chiloé - Chile<br />
                    <span className="text-xs">Atención con cita previa</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground flex-shrink-0" />
                  <a href="tel:+56979186871" className="text-muted-foreground hover:text-primary transition-colors">+56 9 7918 6871</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground flex-shrink-0" />
                  <a href="mailto:contacto@lefrog.shop" className="text-muted-foreground hover:text-primary transition-colors">contacto@lefrog.shop</a>
                </li>
                <li className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    Horario:<br />
                    Lunes a Viernes: 9:00 - 18:00 hrs<br />
                    Sábados: 10:00 - 14:00 hrs
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Lefrog.shop - Un emprendimiento de impresión 3D en Chiloé
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/terminos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Términos</a>
              <a href="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
