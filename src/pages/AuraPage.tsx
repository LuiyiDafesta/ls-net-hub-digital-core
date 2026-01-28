import { ArrowRight, Bot, FileText, Globe, MessageSquare, CreditCard, Shield, Clock, TrendingUp, Users, Zap, Languages, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DEMO_URL = "https://lsnetinformatica.com.ar/agentes/login";
const REGISTER_URL = "https://lsnetinformatica.com.ar/agentes/register";

const AuraPage = () => {
  const stats = [
    { value: "10K+", label: "Agentes Activos" },
    { value: "50M+", label: "Mensajes" },
    { value: "99.9%", label: "Uptime" },
    { value: "2,500+", label: "Clientes Felices" },
  ];

  const features = [
    {
      icon: Bot,
      title: "Agentes con IA",
      description: "Crea agentes conversacionales inteligentes entrenados con tus propios datos.",
      color: "text-secondary",
      glow: "shadow-[0_0_30px_hsla(211,100%,50%,0.3)]",
    },
    {
      icon: FileText,
      title: "Entrenamiento con Docs",
      description: "Sube PDFs, documentos y URLs para construir tu base de conocimientos.",
      color: "text-primary",
      glow: "shadow-[0_0_30px_hsla(0,100%,60%,0.3)]",
    },
    {
      icon: Globe,
      title: "Widget Web",
      description: "Inserta un chat personalizable en cualquier sitio web.",
      color: "text-success",
      glow: "shadow-[0_0_30px_hsla(134,61%,41%,0.3)]",
    },
    {
      icon: MessageSquare,
      title: "Integración WhatsApp",
      description: "Conecta tus agentes a WhatsApp para soporte móvil directo.",
      color: "text-warning",
      glow: "shadow-[0_0_30px_hsla(45,100%,51%,0.3)]",
    },
    {
      icon: CreditCard,
      title: "Uso por Créditos",
      description: "Paga solo por lo que usas con precios transparentes y sin sorpresas.",
      color: "text-secondary",
      glow: "shadow-[0_0_30px_hsla(211,100%,50%,0.3)]",
    },
    {
      icon: Shield,
      title: "Seguridad Empresarial",
      description: "Cumplimiento SOC 2 con encriptación de extremo a extremo.",
      color: "text-primary",
      glow: "shadow-[0_0_30px_hsla(0,100%,60%,0.3)]",
    },
  ];

  const benefits = [
    { icon: Clock, text: "Soporte al cliente automatizado 24/7" },
    { icon: TrendingUp, text: "Reduce tiempos de respuesta en un 80%" },
    { icon: Users, text: "Escala sin contratar más personal" },
    { icon: Zap, text: "Captura y califica leads automáticamente" },
    { icon: Languages, text: "Soporte multilingüe inmediato" },
    { icon: BarChart3, text: "Análisis detallados y métricas" },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      period: "/mes",
      description: "Perfecto para probar y proyectos personales.",
      features: ["1 Agente IA", "50 Créditos/mes", "RAG Limitado"],
      cta: "Comenzar",
      popular: false,
    },
    {
      name: "Professional",
      price: "$25",
      period: "/mes",
      description: "Para creadores serios y crecimiento.",
      features: ["3 Agentes IA", "500 Créditos/mes", "RAG Completo", "Soporte por Email"],
      cta: "Prueba Gratuita",
      popular: true,
    },
    {
      name: "Business",
      price: "$75",
      period: "/mes",
      description: "Para agencias y empresas medianas.",
      features: ["5 Agentes IA", "2,000 Créditos/mes", "Soporte Prioritario", "Acceso a API"],
      cta: "Comenzar Ahora",
      popular: false,
    },
  ];

  const creditPacks = [
    { credits: "500", name: "Paquete Básico", price: "$25" },
    { credits: "2,000", name: "Paquete Pro", price: "$60", popular: true },
    { credits: "5,000", name: "Paquete Enterprise", price: "$130" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 radial-glow" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-success/5 rounded-full blur-[150px] animate-pulse-glow animation-delay-400" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm mb-8 animate-fade-in-up opacity-0">
              <Sparkles className="w-4 h-4 text-warning" />
              <span className="text-sm text-muted-foreground">🚀 Nuevo soporte para GPT-4 y Claude</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">Construye Agentes IA Que</span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent">
                  Realmente Entiendan Tu Negocio
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              Crea agentes conversacionales entrenados con tus documentos. Despliega en web, WhatsApp y más en minutos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-up opacity-0 animation-delay-600">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="xl" className="group">
                  <span className="flex items-center gap-2">
                    Prueba Gratuita
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="xl">
                  Ver Demo
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground animate-fade-in-up opacity-0 animation-delay-600">
              Sin tarjeta de crédito • 50 créditos gratis
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up opacity-0 animation-delay-600">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Todo lo que necesitas para crear Agentes IA
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Una plataforma completa para crear, entrenar y desplegar IA conversacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-card/50 border-border/50 backdrop-blur-sm hover:${feature.glow} transition-all duration-500 hover:-translate-y-2`}
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-6 ${feature.glow}`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative bg-card/30">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Precios Simples y Transparentes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comienza gratis, paga a medida que creces.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-card/50 border-border/50 backdrop-blur-sm ${
                  plan.popular ? "border-secondary shadow-[0_0_40px_hsla(211,100%,50%,0.2)]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      variant={plan.popular ? "hero" : "outline"} 
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Credit Packs */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
              Paquetes de Créditos Adicionales
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {creditPacks.map((pack, index) => (
                <div 
                  key={index}
                  className={`relative p-6 rounded-xl bg-card/50 border border-border/50 text-center ${
                    pack.popular ? "border-warning/50" : ""
                  }`}
                >
                  {pack.popular && (
                    <span className="absolute -top-2 right-4 bg-warning text-warning-foreground text-xs font-semibold px-2 py-0.5 rounded">
                      Más vendido
                    </span>
                  )}
                  <div className="text-2xl font-bold text-foreground mb-1">{pack.credits} Créditos</div>
                  <div className="text-sm text-muted-foreground mb-3">{pack.name}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    {pack.price}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              * Los paquetes de créditos requieren una suscripción Professional o Business activa.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Transforma la Experiencia de tus Clientes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Únete a miles de negocios que usan agentes IA para brindar soporte instantáneo y personalizado a escala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-card/30 border border-border/30 hover:border-secondary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute inset-0 radial-glow opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[200px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              ¿Listo para crear tu primer Agente IA?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              Comienza gratis y despliega tu primer agente conversacional en menos de 5 minutos.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="xl" className="group">
                  <span className="flex items-center gap-2">
                    Comenzar Gratis
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
              
              <p className="text-sm text-muted-foreground">
                Sin tarjeta de crédito • 50 créditos gratis
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuraPage;
