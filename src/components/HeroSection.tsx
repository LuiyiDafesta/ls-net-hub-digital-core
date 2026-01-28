import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute inset-0 radial-glow" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in-up opacity-0">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">
              Transforming businesses with cutting-edge technology
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 animation-delay-200">
            <span className="text-foreground">Empowering your</span>
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent">
                digital future
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-success rounded-full shadow-[0_0_20px_hsla(211,100%,50%,0.5)]" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
            From local expertise to global impact. We are your strategic partner in 
            <span className="text-secondary"> AI</span>,
            <span className="text-primary"> Cloud Infrastructure</span>, and
            <span className="text-success"> Tech Education</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-600">
            <Button variant="hero" size="xl">
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-in-up opacity-0 animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">Global</div>
              <div className="text-sm text-muted-foreground">Reach & Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
