import { Users, Target, Globe, Zap, MessageSquare, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: "20+", labelKey: "yearsExperience" },
    { value: "200+", labelKey: "activeClients" },
    { value: "99.9%", labelKey: "uptimeGuaranteed" },
    { value: "24/7", labelKey: "techSupport" },
  ];

  const values = [
    {
      icon: Target,
      titleKey: "integratedEcosystem",
      descKey: "integratedDesc",
    },
    {
      icon: Zap,
      titleKey: "advancedAutomation",
      descKey: "automationDesc",
    },
    {
      icon: Users,
      titleKey: "ownAcademy",
      descKey: "academyDesc",
    },
    {
      icon: Shield,
      titleKey: "specializedSupport",
      descKey: "supportDesc",
    },
  ];

  const testimonials = [
    {
      quoteKey: "testimonial1",
      authorKey: "testimonial1Author",
      roleKey: "testimonial1Role",
    },
    {
      quoteKey: "testimonial2",
      authorKey: "testimonial2Author",
      roleKey: "testimonial2Role",
    },
    {
      quoteKey: "testimonial3",
      authorKey: "testimonial3Author",
      roleKey: "testimonial3Role",
    },
  ];

  const countries = [
    { name: "Argentina", flag: "🇦🇷" },
    { name: "México", flag: "🇲🇽" },
    { name: "Chile", flag: "🇨🇱" },
    { name: language === "es" ? "España" : "Spain", flag: "🇪🇸" },
    { name: language === "es" ? "Estados Unidos" : "United States", flag: "🇺🇸" },
  ];

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
              {t("about", "heroTag")}
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">{t("about", "heroTitle1")}</span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent">
                {t("about", "heroTitle2")}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              {t("about", "heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{t("about", stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                {t("about", "ourMission")}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                {t("about", "democratize")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("about", "missionDesc1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about", "missionDesc2")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {values.slice(0, 2).map((value) => (
                <div key={value.titleKey} className="p-6 rounded-2xl bg-card border border-border hover:border-muted transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{t("about", value.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t("about", value.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              {t("about", "valueProposition")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("about", "whyChooseUs")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.titleKey} className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t("about", value.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("about", value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              {t("about", "testimonials")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("about", "whatClientsSay")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-card border border-border relative"
              >
                <MessageSquare className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{t("about", testimonial.quoteKey)}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t("about", testimonial.authorKey)}</div>
                  <div className="text-sm text-muted-foreground">{t("about", testimonial.roleKey)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("about", "internationalPresence")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("about", "presenceDesc")}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {countries.map((country) => (
              <div 
                key={country.name}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border"
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="font-medium text-foreground">{country.name}</span>
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
            <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t("about", "transformBusiness")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("about", "ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  {t("common", "contactUs")}
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/aura">
                <Button variant="outline" size="xl">
                  {t("about", "tryAura")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
