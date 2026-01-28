import { Brain, Cloud, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Brain,
    title: "Intelligent Automation",
    description: "Custom AI agents, n8n workflows, and business process automation to scale your operations.",
    color: "secondary",
    glowColor: "hsla(211, 100%, 50%, 0.4)",
    bgGlow: "from-secondary/20 to-transparent",
    link: "/ia",
    buttonText: "Explore AI Solutions",
  },
  {
    icon: Cloud,
    title: "Global Cloud & Hosting",
    description: "High-performance VPS, secure domains, and scalable infrastructure for mission-critical apps.",
    color: "primary",
    glowColor: "hsla(0, 100%, 60%, 0.4)",
    bgGlow: "from-primary/20 to-transparent",
    link: "/cloud",
    buttonText: "View Infrastructure",
  },
  {
    icon: GraduationCap,
    title: "The Tech Academy",
    description: "Master the tools of tomorrow. Courses on n8n, CRM, AI tools, and content creation.",
    color: "success",
    glowColor: "hsla(134, 61%, 41%, 0.4)",
    bgGlow: "from-success/20 to-transparent",
    link: "/academy",
    buttonText: "Start Learning",
  },
];

const colorClasses: Record<string, string> = {
  secondary: "text-secondary",
  primary: "text-primary",
  success: "text-success",
};

const borderColorClasses: Record<string, string> = {
  secondary: "hover:border-secondary/50",
  primary: "hover:border-primary/50",
  success: "hover:border-success/50",
};

const ThreePillars = () => {
  return (
    <section id="pillars" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Our Divisions
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Three Pillars of Innovation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our specialized divisions, each designed to propel your business into the future.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative p-10 rounded-2xl bg-card/80 backdrop-blur-sm border border-border ${borderColorClasses[pillar.color]} transition-all duration-500 hover:translate-y-[-8px]`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Top Glow */}
              <div 
                className={`absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-radial ${pillar.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon Container */}
              <div
                className={`w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center mb-8 transition-all duration-500 group-hover:shadow-[0_0_40px_var(--glow)] group-hover:bg-muted`}
                style={{ "--glow": pillar.glowColor } as React.CSSProperties}
              >
                <pillar.icon className={`w-10 h-10 ${colorClasses[pillar.color]} transition-transform duration-300 group-hover:scale-110`} />
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold text-foreground mb-4 ${colorClasses[pillar.color]} group-hover:text-current transition-colors`}>
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                {pillar.description}
              </p>

              {/* CTA Button */}
              <Link to={pillar.link}>
                <Button 
                  variant="ghost" 
                  className={`${colorClasses[pillar.color]} hover:bg-muted/50 group/btn p-0 h-auto font-semibold text-base`}
                >
                  {pillar.buttonText}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>

              {/* Bottom border gradient on hover */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: pillar.color === 'secondary' 
                    ? 'linear-gradient(90deg, transparent, hsl(211, 100%, 50%), transparent)'
                    : pillar.color === 'primary'
                    ? 'linear-gradient(90deg, transparent, hsl(0, 100%, 60%), transparent)'
                    : 'linear-gradient(90deg, transparent, hsl(134, 61%, 41%), transparent)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
