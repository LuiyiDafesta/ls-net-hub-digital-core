import { useState } from "react";
import { Server, Shield, Zap, Globe, Clock, HardDrive, Activity, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HostingConsultForm from "@/components/HostingConsultForm";

const hostingPlans = [
  {
    name: "Hosting Básico",
    description: "Ideal para emprendedores y pequeños negocios",
    priceARS: 70000,
    popular: false,
    features: [
      "Casillas de email ilimitadas",
      "Webmail, POP, IMAP",
      "Panel de control intuitivo",
      "Soporte técnico 24/7",
      "Backup automático",
    ],
  },
  {
    name: "Hosting + WordPress",
    description: "Nuestro producto estrella, listo para usar",
    priceARS: 90000,
    popular: true,
    features: [
      "WordPress preinstalado",
      "Certificado SSL incluido",
      "Casillas de email ilimitadas",
      "Dominio personalizado incluido",
      "Panel de control intuitivo",
      "Soporte técnico 24/7",
    ],
  },
  {
    name: "Premium Full",
    description: "Todo incluido para desarrolladores profesionales",
    priceARS: 200000,
    popular: false,
    features: [
      "WordPress + Bricks Builder",
      "Licencias premium ilimitadas",
      "Core Framework + Crocoblock",
      "Certificado SSL incluido",
      "Casillas de email ilimitadas",
      "Soporte prioritario 24/7",
    ],
  },
];

const additionalServices = [
  {
    icon: Lock,
    title: "Certificados SSL",
    description: "Distintos niveles de certificados según tus necesidades de seguridad.",
    priceARS: 20000,
  },
  {
    icon: Globe,
    title: "Dominios",
    description: "Amplia gama de extensiones disponibles. Registro y renovación anual.",
    priceARS: 25000,
  },
  {
    icon: Server,
    title: "VPS",
    description: "Servidores privados virtuales con configuración personalizada según tu proyecto.",
    priceARS: 100000,
  },
];

const formatPrice = (ars: number) => {
  const usd = Math.round(ars / 1500);
  return {
    ars: ars.toLocaleString("es-AR"),
    usd: usd,
  };
};

const guarantees = [
  {
    icon: Activity,
    stat: "99.9%",
    label: "Uptime SLA",
    description: "Guaranteed availability",
  },
  {
    icon: HardDrive,
    stat: "NVMe",
    label: "SSD Storage",
    description: "Ultra-fast disk I/O",
  },
  {
    icon: Clock,
    stat: "24/7",
    label: "Monitoring",
    description: "Proactive infrastructure monitoring",
  },
  {
    icon: Shield,
    stat: "DDoS",
    label: "Protection",
    description: "Enterprise-grade security",
  },
];

const CloudPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();

  const handleConsultClick = (planName?: string) => {
    setSelectedPlan(planName);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up opacity-0">
              Cloud Infrastructure
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">Hosting &amp; Cloud</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
                para tu negocio.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              Soluciones de alojamiento seguras, rápidas y escalables con <span className="text-primary font-semibold">SLA 99.9%</span> y soporte 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Guarantees Bar */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {guarantees.map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{item.stat}</div>
                <div className="text-sm font-medium text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Planes de Hosting
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Elegí tu plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Todos los planes incluyen panel de control, soporte 24/7, backup automático y migración sin downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hostingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] ${
                  plan.popular 
                    ? "bg-card border-primary/50 shadow-[0_0_40px_hsla(0,100%,60%,0.15)]" 
                    : "bg-card/80 border-border hover:border-muted"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Más Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  {/* USD Price - Primary */}
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      ${formatPrice(plan.priceARS).usd}
                    </span>
                    <span className="text-muted-foreground">USD/año</span>
                  </div>
                  
                  {/* ARS Price - Secondary */}
                  <div className="text-sm text-muted-foreground">
                    ARS {formatPrice(plan.priceARS).ars}/año
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  onClick={() => handleConsultClick(plan.name)}
                >
                  Consultar
                </Button>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground text-sm mt-8">
            ¿Necesitás una configuración especial?{" "}
            <button 
              onClick={() => handleConsultClick()} 
              className="text-secondary hover:underline"
            >
              Contactá a nuestro equipo
            </button>
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Servicios Adicionales
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Completá tu stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-muted transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-lg font-semibold text-secondary">
                  Desde ${formatPrice(service.priceARS).usd} USD
                  <span className="block text-sm font-normal text-muted-foreground">
                    ARS {formatPrice(service.priceARS).ars}
                  </span>
                </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Desplegá tu infraestructura en minutos con nuestro aprovisionamiento automático. 
              Migración sin downtime desde otros proveedores.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleConsultClick()}
              >
                Solicitar Asesoramiento
                <Zap className="w-5 h-5" />
              </Button>
              <a href="/contact">
                <Button variant="outline" size="xl">
                  Contactar Ventas
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consult Form Modal */}
      <HostingConsultForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        selectedPlan={selectedPlan}
      />

      <Footer />
    </div>
  );
};

export default CloudPage;
