import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("pillars");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute inset-0 radial-glow" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-success/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-400" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0">
            <span className="text-foreground">The Nexus of</span>
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent">
                AI, Infrastructure & Tech Education
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-success rounded-full shadow-[0_0_20px_hsla(211,100%,50%,0.5)]" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
            LS NET HUB is your ecosystem for navigating the future of technology. 
            From intelligent automation to robust cloud solutions and cutting-edge learning.
          </p>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToContent}
            className="animate-fade-in-up opacity-0 animation-delay-400 group cursor-pointer"
            aria-label="Scroll to content"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-secondary transition-colors duration-300">
              <span className="text-sm font-medium tracking-wide uppercase">Explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
