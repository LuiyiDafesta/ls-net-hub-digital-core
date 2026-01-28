import { Brain, Cloud, GraduationCap, Server, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI models, automation, and intelligent systems that transform your business operations.",
    color: "secondary",
    glowColor: "hsla(211, 100%, 50%, 0.3)",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud architecture designed for performance and reliability.",
    color: "primary",
    glowColor: "hsla(0, 100%, 60%, 0.3)",
  },
  {
    icon: GraduationCap,
    title: "Tech Education",
    description: "Comprehensive training programs to upskill your team in modern technologies.",
    color: "success",
    glowColor: "hsla(134, 61%, 41%, 0.3)",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets.",
    color: "warning",
    glowColor: "hsla(45, 100%, 51%, 0.3)",
  },
  {
    icon: Server,
    title: "IT Consulting",
    description: "Strategic technology consulting to align IT with your business goals.",
    color: "secondary",
    glowColor: "hsla(211, 100%, 50%, 0.3)",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services for the modern enterprise.",
    color: "primary",
    glowColor: "hsla(0, 100%, 60%, 0.3)",
  },
];

const colorClasses: Record<string, string> = {
  secondary: "text-secondary",
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Services & Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive technology solutions that drive innovation and growth
            for businesses worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-muted transition-all duration-500 hover-glow"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-[0_0_20px_var(--glow)]`}
                style={{ "--glow": service.glowColor } as React.CSSProperties}
              >
                <service.icon className={`w-7 h-7 ${colorClasses[service.color]}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-secondary via-primary to-success opacity-50" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
