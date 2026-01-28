import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactPage = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      titleKey: "emailTitle",
      value: "info@lsnethub.com",
      descKey: "emailDesc",
      href: "mailto:info@lsnethub.com",
    },
    {
      icon: Phone,
      titleKey: "whatsappTitle",
      value: "+54 9 11 6044-9717",
      descKey: "whatsappDesc",
      href: "https://wa.me/5491160449717",
    },
    {
      icon: MapPin,
      titleKey: "locationTitle",
      valueKey: "locationValue",
      descKey: "locationDesc",
      href: null,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t("contact", "messageSent"),
      description: t("contact", "messageSentDesc"),
    });
    
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 animate-fade-in-up opacity-0">
              {t("contact", "heroTag")}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">{t("contact", "heroTitle1")}</span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent">
                {t("contact", "heroTitle2")}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              {t("contact", "heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => {
              const content = (
                <>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact", method.titleKey)}</h3>
                    <p className="text-foreground font-medium">
                      {method.valueKey ? t("contact", method.valueKey) : method.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{t("contact", method.descKey)}</p>
                  </div>
                </>
              );
              
              return method.href ? (
                <a
                  key={method.titleKey}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-secondary/50 transition-colors duration-300"
                >
                  {content}
                </a>
              ) : (
                <div key={method.titleKey} className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border/50">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Info */}
            <div>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                {t("contact", "whyChooseUs")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                {t("contact", "techPartner")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("contact", "partnerDesc")}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t("contact", "fastResponse")}</h4>
                    <p className="text-sm text-muted-foreground">{t("contact", "fastResponseDesc")}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t("contact", "freeConsult")}</h4>
                    <p className="text-sm text-muted-foreground">{t("contact", "freeConsultDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact", "yourName")} *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Juan Pérez"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact", "yourEmail")} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="juan@empresa.com"
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact", "yourCompany")}
                    </label>
                    <Input
                      id="company"
                      type="text"
                      maxLength={100}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Tu Empresa S.A."
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      {t("common", "subject")} *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      maxLength={150}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t("contact", "subjectPlaceholder")}
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t("common", "message")} *
                  </label>
                  <Textarea
                    id="message"
                    required
                    maxLength={2000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contact", "messagePlaceholder")}
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
                    t("common", "sending")
                  ) : (
                    <>
                      {t("common", "sendMessage")}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  {t("contact", "privacyNotice")}{" "}
                  <a href="/privacy" className="text-secondary hover:underline">{t("footer", "privacyPolicy")}</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
