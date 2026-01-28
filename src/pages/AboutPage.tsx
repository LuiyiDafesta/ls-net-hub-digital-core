import { Users, Target, Globe, Clock, Award, Zap, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "200+", label: "Clientes activos" },
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "24/7", label: "Soporte técnico" },
];

const values = [
  {
    icon: Target,
    title: "Ecosistema Integrado",
    description: "Combinamos hosting, automatización, formación y soporte bajo una arquitectura única. Accedés a múltiples servicios desde una sola relación comercial.",
  },
  {
    icon: Zap,
    title: "Automatización Avanzada",
    description: "Implementamos flujos de trabajo con n8n e inteligencia artificial. Reducimos tareas repetitivas entre 40-80% del tiempo operativo.",
  },
  {
    icon: Users,
    title: "Academia Propia",
    description: "Cursos especializados en automatización, hosting, marketing digital y desarrollo web. Certificaciones que generan valor para tu equipo.",
  },
  {
    icon: Shield,
    title: "Soporte Especializado",
    description: "Equipo técnico enfocado, no tercerizado. Disponibilidad 24/7 para infraestructura crítica. Respuesta en máximo 4 horas para incidentes.",
  },
];

const testimonials = [
  {
    quote: "Trabajo con LsNet informática desde hace más de 13 años. Se ocupan de todo: solo llamo y comento las necesidades y en unas horas ya estamos trabajando con la infraestructura que necesitamos.",
    author: "Cliente Corporativo",
    role: "13+ años de relación",
  },
  {
    quote: "Conocí LsNet informática por un conocido que tiene una Pyme. Trabajan muy responsablemente y solucionan problemas de software, hardware e infraestructura. Los recomiendo sin ninguna duda.",
    author: "Dueño de Pyme",
    role: "Recomendación directa",
  },
  {
    quote: "Me salió un negocio de importación y necesitaba resolver rápidamente el tema con mi página de ventas. En menos de dos horas ya estaba enviando emails con mi propio dominio.",
    author: "Importador",
    role: "Solución express",
  },
];

const countries = [
  { name: "Argentina", flag: "🇦🇷" },
  { name: "México", flag: "🇲🇽" },
  { name: "Chile", flag: "🇨🇱" },
  { name: "España", flag: "🇪🇸" },
  { name: "Estados Unidos", flag: "🇺🇸" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 animate-fade-in-up opacity-0">
              Quiénes Somos
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">Tecnología aplicada</span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent">
                para hacer crecer tu negocio.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              Somos un ecosistema integrado de educación, automatización, infraestructura cloud y consultoría digital con más de <span className="text-foreground font-semibold">20 años de experiencia</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Nuestra Misión
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Democratizar el acceso a la tecnología
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Democratizar el acceso a herramientas tecnológicas profesionales y conocimiento especializado, 
                permitiendo que empresas de cualquier tamaño automaticen, crezcan y compitan a nivel internacional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No vendemos "espacio en disco" ni servicios aislados. Ofrecemos <span className="text-foreground font-medium">soluciones llave en mano</span> pensadas 
                para optimizar operaciones, reducir costos y acelerar crecimiento.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {values.slice(0, 2).map((value) => (
                <div key={value.title} className="p-6 rounded-2xl bg-card border border-border hover:border-muted transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Propuesta de Valor
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              ¿Por qué elegirnos?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-card border border-border relative"
              >
                <MessageSquare className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Presencia Internacional
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Operamos de forma remota atendiendo clientes en toda América y Europa.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {countries.map((country) => (
              <div 
                key={country.name}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border"
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="font-medium text-foreground">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactanos hoy y descubrí cómo podemos ayudarte a automatizar, 
              crecer y competir a nivel internacional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Contactanos
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/aura">
                <Button variant="outline" size="xl">
                  Probá AURA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
