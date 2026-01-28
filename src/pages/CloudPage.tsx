import { useState } from "react";
import { Server, Shield, Zap, Globe, Clock, HardDrive, Activity, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HostingConsultForm from "@/components/HostingConsultForm";
import { useLanguage } from "@/contexts/LanguageContext";

const formatPrice = (ars: number) => {
  const usd = Math.round(ars / 1500);
  return {
    ars: ars.toLocaleString("es-AR"),
    usd: usd,
  };
};

const CloudPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();
  const { t, language } = useLanguage();

  const handleConsultClick = (planName?: string) => {
    setSelectedPlan(planName);
    setIsFormOpen(true);
  };

  const hostingPlans = [
    {
      nameKey: "planBasic",
      descKey: "planBasicDesc",
      priceARS: 70000,
      popular: false,
      featureKeys: ["unlimitedEmail", "webmailPOPIMAP", "controlPanel", "support247", "autoBackup"],
    },
    {
      nameKey: "planWordPress",
      descKey: "planWordPressDesc",
      priceARS: 90000,
      popular: true,
      featureKeys: ["wpPreinstalled", "sslIncluded", "unlimitedEmail", "domainIncluded", "controlPanel", "support247"],
    },
    {
      nameKey: "planPremium",
      descKey: "planPremiumDesc",
      priceARS: 200000,
      popular: false,
      featureKeys: ["wpBricks", "premiumLicenses", "coreFramework", "sslIncluded", "unlimitedEmail", "prioritySupport"],
    },
  ];

  const additionalServices = [
    {
      icon: Lock,
      titleKey: "sslCertificates",
      descKey: "sslDesc",
      priceARS: 20000,
    },
    {
      icon: Globe,
      titleKey: "domains",
      descKey: "domainsDesc",
      priceARS: 25000,
    },
    {
      icon: Server,
      titleKey: "vps",
      descKey: "vpsDesc",
      priceARS: 100000,
    },
  ];

  const guarantees = [
    {
      icon: Activity,
      stat: "99.9%",
      labelKey: "uptimeSLA",
      descKey: "guaranteedAvailability",
    },
    {
      icon: HardDrive,
      stat: "NVMe",
      labelKey: "ssdStorage",
      descKey: "ultraFastIO",
    },
    {
      icon: Clock,
      stat: "24/7",
      labelKey: "monitoring",
      descKey: "proactiveMonitoring",
    },
    {
      icon: Shield,
      stat: "DDoS",
      labelKey: "protection",
      descKey: "enterpriseSecurity",
    },
  ];

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
              {t("cloud", "heroTag")}
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">{t("cloud", "heroTitle1")}</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
                {t("cloud", "heroTitle2")}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              {t("cloud", "heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Guarantees Bar */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {guarantees.map((item) => (
              <div key={item.labelKey} className="text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{item.stat}</div>
                <div className="text-sm font-medium text-foreground">{t("cloud", item.labelKey)}</div>
                <div className="text-xs text-muted-foreground">{t("cloud", item.descKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              {language === "es" ? "Planes de Hosting" : "Hosting Plans"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("cloud", "plansTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("cloud", "plansSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hostingPlans.map((plan) => (
              <div
                key={plan.nameKey}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:translate-y-[-4px] ${
                  plan.popular 
                    ? "bg-card border-primary/50 shadow-[0_0_40px_hsla(0,100%,60%,0.15)]" 
                    : "bg-card/80 border-border hover:border-muted"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {t("common", "mostPopular")}
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t("cloud", plan.nameKey)}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t("cloud", plan.descKey)}</p>
                  
                  {/* USD Price - Primary */}
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      ${formatPrice(plan.priceARS).usd}
                    </span>
                    <span className="text-muted-foreground">USD/{t("common", "year")}</span>
                  </div>
                  
                  {/* ARS Price - Secondary */}
                  <div className="text-sm text-muted-foreground">
                    ARS {formatPrice(plan.priceARS).ars}/{t("common", "year")}
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.featureKeys.map((featureKey) => (
                    <li key={featureKey} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{t("cloud", featureKey)}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  onClick={() => handleConsultClick(t("cloud", plan.nameKey))}
                >
                  {t("cloud", "consult")}
                </Button>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground text-sm mt-8">
            {t("cloud", "customConfig")}{" "}
            <button 
              onClick={() => handleConsultClick()} 
              className="text-secondary hover:underline"
            >
              {t("cloud", "contactTeam")}
            </button>
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              {t("cloud", "additionalServices")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              {t("cloud", "completeStack")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service) => (
              <div
                key={service.titleKey}
                className="p-8 rounded-2xl bg-card border border-border hover:border-muted transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t("cloud", service.titleKey)}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {t("cloud", service.descKey)}
                </p>
                <div className="text-lg font-semibold text-secondary">
                  {t("common", "from")} ${formatPrice(service.priceARS).usd} USD
                  <span className="block text-sm font-normal text-muted-foreground">
                    ARS {formatPrice(service.priceARS).ars}
                  </span>
                </div>
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
              {t("cloud", "readyToStart")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("cloud", "ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleConsultClick()}
              >
                {t("cloud", "requestAdvice")}
                <Zap className="w-5 h-5" />
              </Button>
              <a href="/contact">
                <Button variant="outline" size="xl">
                  {t("common", "contactSales")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consult Form Modal */}
      <HostingConsultForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        selectedPlan={selectedPlan}
      />

      <Footer />
    </div>
  );
};

export default CloudPage;
