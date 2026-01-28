import { ArrowRight, Clock, Zap, Database, MessageSquare, UserCheck, Link2, Brain, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DEMO_URL = "https://aura-demo.lsnethub.com"; // Replace with actual subdomain

const AuraPage = () => {
  const valueProps = [
    {
      icon: Clock,
      title: "Always-On Availability",
      description: "Zero downtime. AURA agents handle inquiries at 3 AM with the same precision as 3 PM.",
      color: "text-secondary",
      glow: "shadow-[0_0_30px_hsla(211,100%,50%,0.3)]",
    },
    {
      icon: Zap,
      title: "Instant Scalability",
      description: "Handle spikes in demand without hiring. From 10 to 10,000 concurrent conversations instantly.",
      color: "text-primary",
      glow: "shadow-[0_0_30px_hsla(0,100%,60%,0.3)]",
    },
    {
      icon: Database,
      title: "Custom Knowledge Base",
      description: "Trained securely on your documents, website, and CRM data. They speak your business language.",
      color: "text-success",
      glow: "shadow-[0_0_30px_hsla(134,61%,41%,0.3)]",
    },
  ];

  const useCases = [
    {
      name: "Marcos",
      role: "IT Support Level 1",
      description: "Resolves password resets and common technical issues automatically. Escalates complex problems to human agents with full context.",
      icon: "🛠️",
      gradient: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/30",
    },
    {
      name: "Sofia",
      role: "Sales Development",
      description: "Qualifies incoming leads 24/7 and schedules meetings for your human team. Never misses a potential customer.",
      icon: "💼",
      gradient: "from-success/20 to-success/5",
      borderColor: "border-success/30",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Connect",
      description: "We integrate AURA with your data sources (Notion, PDFs, Websites, databases).",
      icon: Link2,
      color: "text-secondary",
    },
    {
      step: 2,
      title: "Train",
      description: "Our engineers fine-tune the models for accuracy and tone matching your brand.",
      icon: Brain,
      color: "text-primary",
    },
    {
      step: 3,
      title: "Deploy",
      description: "Embed your AURA agents on your site, WhatsApp, or Slack instantly.",
      icon: Rocket,
      color: "text-success",
    },
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
              <span className="text-sm text-muted-foreground">Introducing AURA by LS NET HUB</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">Deploy Your</span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent">
                  24/7 Digital Workforce
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              AURA is the suite of intelligent AI agents trained on your business data to automate support, sales, and internal operations instantly.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up opacity-0 animation-delay-600">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="gradient" 
                  size="xl" 
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Launch Interactive Demo
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Visual - AURA Interface Mockup */}
          <div className="mt-20 max-w-4xl mx-auto animate-fade-in-up opacity-0 animation-delay-600">
            <div className="relative">
              {/* Glow Effect Behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-success/20 blur-3xl opacity-50" />
              
              {/* Glass Panel */}
              <div className="relative bg-card/30 backdrop-blur-xl border border-border/30 rounded-2xl p-8 shadow-2xl">
                {/* Top Bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                  <span className="ml-4 text-sm text-muted-foreground font-mono">aura.lsnethub.com</span>
                </div>

                {/* Agent Cards */}
                <div className="grid md:grid-cols-3 gap-4">
                  {["Ana", "Marcos", "Sofia"].map((name, i) => (
                    <div 
                      key={name}
                      className={`relative p-6 rounded-xl bg-gradient-to-br ${
                        i === 0 ? "from-secondary/10 to-secondary/5 border-secondary/20" :
                        i === 1 ? "from-primary/10 to-primary/5 border-primary/20" :
                        "from-success/10 to-success/5 border-success/20"
                      } border backdrop-blur-sm`}
                    >
                      {/* Status Indicator */}
                      <div className="absolute top-4 right-4">
                        <div className={`w-2 h-2 rounded-full ${
                          i === 0 ? "bg-secondary" : i === 1 ? "bg-primary" : "bg-success"
                        } animate-pulse`} />
                      </div>
                      
                      <div className="text-3xl mb-3">
                        {i === 0 ? "👩‍💼" : i === 1 ? "🛠️" : "💼"}
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {i === 0 ? "Customer Success" : i === 1 ? "IT Support" : "Sales Dev"}
                      </p>
                      <div className="mt-3 text-xs text-success flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-success" />
                        Online
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Why </span>
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">AURA</span>
              <span className="text-foreground">?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The invisible intelligence powering your business around the clock.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valueProps.map((prop, index) => (
              <Card 
                key={index}
                className={`bg-card/50 border-border/50 backdrop-blur-sm hover:${prop.glow} transition-all duration-500 hover:-translate-y-2`}
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-6 ${prop.glow}`}>
                    <prop.icon className={`w-7 h-7 ${prop.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 relative bg-card/30">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              How businesses use AURA
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the agents that never sleep, never forget, and always deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${useCase.gradient} border ${useCase.borderColor} backdrop-blur-sm`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">{useCase.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Meet {useCase.name}</h3>
                    <p className={`text-sm ${index === 0 ? "text-secondary" : "text-success"} font-medium`}>
                      {useCase.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {useCase.description}
                </p>
                
                {/* Decorative Element */}
                <div className={`absolute bottom-4 right-4 w-20 h-20 rounded-full ${
                  index === 0 ? "bg-secondary/10" : "bg-success/10"
                } blur-2xl`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              How it Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From zero to AI-powered in three simple steps.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop: Horizontal Layout */}
            <div className="hidden md:flex items-start justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-secondary via-primary to-success" />
              
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center w-1/3 relative z-10">
                  <div className={`w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 shadow-lg ${
                    index === 0 ? "shadow-secondary/20" : index === 1 ? "shadow-primary/20" : "shadow-success/20"
                  }`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  <div className={`text-sm font-bold ${step.color} mb-2`}>Step {step.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-[250px]">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Mobile: Vertical Layout */}
            <div className="md:hidden space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className={`w-16 h-16 rounded-xl bg-card border border-border flex-shrink-0 flex items-center justify-center shadow-lg ${
                    index === 0 ? "shadow-secondary/20" : index === 1 ? "shadow-primary/20" : "shadow-success/20"
                  }`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${step.color} mb-1`}>Step {step.step}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-foreground">Ready to upgrade your team with </span>
              <span className="bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent">AI</span>
              <span className="text-foreground">?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              See the difference intelligent automation makes. Try the live environment now.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="xl" className="group">
                  <span className="flex items-center gap-2">
                    Launch AURA Live Demo
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
              
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-colors text-sm underline underline-offset-4"
              >
                Or contact sales for custom pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuraPage;
