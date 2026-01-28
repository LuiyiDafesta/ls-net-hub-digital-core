import { Server, Shield, Zap, Globe, Clock, HardDrive, Cpu, Activity, CheckCircle, ExternalLink, Lock, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vpsPlans = [
  {
    name: "Starter",
    description: "Perfect for small projects and development",
    price: 19,
    popular: false,
    specs: {
      cpu: "2 vCPU Cores",
      ram: "4 GB RAM",
      storage: "80 GB NVMe SSD",
      bandwidth: "2 TB Transfer",
      ipv4: "1 Dedicated IPv4",
    },
    features: ["Basic DDoS Protection", "Weekly Backups", "24/7 Monitoring"],
  },
  {
    name: "Growth",
    description: "Ideal for growing applications and businesses",
    price: 49,
    popular: true,
    specs: {
      cpu: "4 vCPU Cores",
      ram: "8 GB RAM",
      storage: "160 GB NVMe SSD",
      bandwidth: "4 TB Transfer",
      ipv4: "1 Dedicated IPv4",
    },
    features: ["Advanced DDoS Protection", "Daily Backups", "24/7 Priority Support", "Free SSL Certificate"],
  },
  {
    name: "Pro",
    description: "For mission-critical production workloads",
    price: 99,
    popular: false,
    specs: {
      cpu: "8 vCPU Cores",
      ram: "16 GB RAM",
      storage: "320 GB NVMe SSD",
      bandwidth: "8 TB Transfer",
      ipv4: "2 Dedicated IPv4",
    },
    features: ["Enterprise DDoS Protection", "Hourly Backups", "24/7 Priority Support", "Free SSL Certificate", "Load Balancer Ready"],
  },
];

const additionalServices = [
  {
    icon: Lock,
    title: "SSL Certificates",
    description: "Secure your websites with industry-standard encryption. Free with Growth plans and above.",
    price: "From $9/year",
  },
  {
    icon: Globe,
    title: "Domain Registration",
    description: "Register and manage your domains with competitive pricing and free WHOIS privacy.",
    price: "From $12/year",
  },
  {
    icon: Gauge,
    title: "Managed WordPress",
    description: "Optimized WordPress hosting with automatic updates, caching, and security hardening.",
    price: "From $29/month",
  },
];

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
              <span className="text-foreground">Rock-Solid Infrastructure</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
                for Your Applications.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              Premium VPS, secure hosting, and domain management designed for 
              <span className="text-primary font-semibold"> performance</span>.
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

      {/* VPS Pricing */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              VPS Hosting
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              High-performance virtual private servers with dedicated resources and full root access.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {vpsPlans.map((plan) => (
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
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                
                {/* Specs */}
                <div className="space-y-3 mb-8 pb-8 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{plan.specs.cpu}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{plan.specs.ram}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{plan.specs.storage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{plan.specs.bandwidth}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{plan.specs.ipv4}</span>
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
                
                <a 
                  href="https://portal.lsnethub.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full"
                  >
                    Order Now
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground text-sm mt-8">
            Need a custom configuration? <a href="#contact" className="text-secondary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Complete Your Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Additional Services
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
                <div className="text-lg font-semibold text-secondary">{service.price}</div>
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
              Ready to Scale?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Deploy your applications on infrastructure that grows with you. 
              Get started in minutes with our automated provisioning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://portal.lsnethub.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl">
                  Get Started
                  <Zap className="w-5 h-5" />
                </Button>
              </a>
              <Button variant="outline" size="xl">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudPage;
