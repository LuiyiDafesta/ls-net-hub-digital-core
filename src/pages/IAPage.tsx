import { useState } from "react";
import { Bot, Workflow, Code, Zap, Clock, TrendingUp, CheckCircle, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Intelligent chatbots trained on your business data for support or sales. 24/7 customer service that actually understands your products and processes.",
    color: "secondary",
    features: ["Trained on your data", "Multi-language support", "CRM integration", "Analytics dashboard"],
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    description: "Connecting your CRM, email, and tools to run on autopilot. Eliminate repetitive tasks and let your team focus on what matters.",
    color: "primary",
    features: ["500+ app integrations", "Custom triggers", "Error handling", "Real-time monitoring"],
  },
  {
    icon: Code,
    title: "SaaS Product Development",
    description: "We turn your ideas into functional software products. From MVP to full-scale deployment, we build products that users love.",
    color: "success",
    features: ["Full-stack development", "Cloud deployment", "Scalable architecture", "Ongoing support"],
  },
];

const benefits = [
  {
    icon: Clock,
    stat: "200+",
    label: "Hours saved monthly",
    description: "Average time saved by our automation clients",
  },
  {
    icon: TrendingUp,
    stat: "40%",
    label: "Cost reduction",
    description: "Typical reduction in operational costs",
  },
  {
    icon: Zap,
    stat: "24/7",
    label: "Always on",
    description: "Your AI agents never sleep",
  },
];

const colorClasses: Record<string, string> = {
  secondary: "text-secondary",
  primary: "text-primary",
  success: "text-success",
};

const bgColorClasses: Record<string, string> = {
  secondary: "bg-secondary/10",
  primary: "bg-primary/10",
  success: "bg-success/10",
};

const IAPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    bottleneck: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request received!",
      description: "We'll get back to you within 24 hours to schedule your automation audit.",
    });
    
    setFormData({ name: "", email: "", company: "", bottleneck: "" });
    setIsSubmitting(false);
  };

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
              AI & Automation Solutions
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">Stop doing busywork.</span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent">
                Start automating.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              We build custom AI agents and n8n workflows that save your team 
              <span className="text-secondary font-semibold"> hundreds of hours </span> 
              per month.
            </p>
            
            <Button 
              variant="hero" 
              size="xl" 
              className="animate-fade-in-up opacity-0 animation-delay-600"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book an Automation Audit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <benefit.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{benefit.stat}</div>
                <div className="text-lg font-medium text-foreground mb-1">{benefit.label}</div>
                <div className="text-sm text-muted-foreground">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              What We Build
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Automation Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From intelligent chatbots to complete workflow automation, we build systems that work while you sleep.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-muted transition-all duration-500 hover:translate-y-[-4px]"
              >
                <div className={`w-16 h-16 rounded-xl ${bgColorClasses[service.color]} flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 ${colorClasses[service.color]}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className={`w-4 h-4 ${colorClasses[service.color]}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Practical Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We don't just talk about AI; we build functional tools that improve ROI. 
                Every solution we create is designed with one goal: 
                <span className="text-foreground font-medium"> measurable business impact</span>.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Battle-tested solutions used by real businesses",
                  "Clear ROI metrics before we start building",
                  "Ongoing support and optimization included",
                  "No vendor lock-in — you own your automations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-success/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">AI Agent deployed</div>
                      <div className="text-sm text-muted-foreground">Customer support automated</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Workflow running</div>
                      <div className="text-sm text-muted-foreground">47 tasks automated today</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">ROI achieved</div>
                      <div className="text-sm text-muted-foreground">312% return in 6 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                Get Started
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Book Your Automation Audit
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell us about your manual process bottlenecks. We'll show you what's possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="bg-background"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  type="text"
                  maxLength={100}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your Company Inc."
                  className="bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="bottleneck" className="block text-sm font-medium text-foreground mb-2">
                  What manual processes are slowing you down?
                </label>
                <Textarea
                  id="bottleneck"
                  required
                  maxLength={1000}
                  rows={4}
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  placeholder="Tell us about your biggest bottlenecks... (e.g., customer support response time, data entry, lead follow-ups)"
                  className="bg-background resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Request Automation Audit
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAPage;
