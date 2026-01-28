import { useState } from "react";
import { MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface HostingConsultFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const HostingConsultForm = ({ isOpen, onClose, selectedPlan }: HostingConsultFormProps) => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    websiteCount: "1",
    currentHosting: "",
    selectedFeatures: [] as string[],
    additionalInfo: "",
    contactMethod: "whatsapp",
  });

  const projectTypes = [
    { id: "website", labelKey: "websiteLanding" },
    { id: "ecommerce", labelKey: "ecommerce" },
    { id: "blog", labelKey: "blogNews" },
    { id: "webapp", labelKey: "webapp" },
    { id: "other", labelKey: "other" },
  ];

  const features = [
    { id: "wordpress", labelKey: "wordpress" },
    { id: "ssl", labelKey: "sslCertificate" },
    { id: "email", labelKey: "corporateEmails" },
    { id: "domain", labelKey: "customDomain" },
    { id: "backups", labelKey: "autoBackups" },
    { id: "support", labelKey: "prioritySupport" },
  ];

  const handleFeatureToggle = (featureId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedFeatures: prev.selectedFeatures.includes(featureId)
        ? prev.selectedFeatures.filter((f) => f !== featureId)
        : [...prev.selectedFeatures, featureId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const featuresText = formData.selectedFeatures
      .map((f) => t("consultForm", features.find((feat) => feat.id === f)?.labelKey || f))
      .join(", ");
    
    const projectTypeText = t("consultForm", projectTypes.find((p) => p.id === formData.projectType)?.labelKey || formData.projectType);

    const message = language === "es" 
      ? `
*Nueva consulta de Hosting*
${selectedPlan ? `Plan de interés: ${selectedPlan}` : ""}

*Datos de contacto:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
${formData.company ? `• Empresa: ${formData.company}` : ""}

*Detalles del proyecto:*
• Tipo: ${projectTypeText}
• Cantidad de sitios: ${formData.websiteCount}
${formData.currentHosting ? `• Hosting actual: ${formData.currentHosting}` : "• Nuevo proyecto (sin hosting previo)"}

*Funcionalidades requeridas:*
${featuresText || "No especificadas"}

${formData.additionalInfo ? `*Información adicional:*\n${formData.additionalInfo}` : ""}
      `.trim()
      : `
*New Hosting Inquiry*
${selectedPlan ? `Plan of interest: ${selectedPlan}` : ""}

*Contact Information:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
${formData.company ? `• Company: ${formData.company}` : ""}

*Project Details:*
• Type: ${projectTypeText}
• Number of sites: ${formData.websiteCount}
${formData.currentHosting ? `• Current hosting: ${formData.currentHosting}` : "• New project (no previous hosting)"}

*Required Features:*
${featuresText || "Not specified"}

${formData.additionalInfo ? `*Additional Information:*\n${formData.additionalInfo}` : ""}
      `.trim();

    if (formData.contactMethod === "whatsapp") {
      const whatsappUrl = `https://wa.me/5491160449717?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: t("consultForm", "redirectingWhatsApp"),
        description: t("consultForm", "whatsappConversation"),
      });
    } else {
      const emailSubject = language === "es" 
        ? `Consulta Hosting${selectedPlan ? ` - ${selectedPlan}` : ""}`
        : `Hosting Inquiry${selectedPlan ? ` - ${selectedPlan}` : ""}`;
      const mailtoUrl = `mailto:info@lsnethub.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(message)}`;
      window.open(mailtoUrl, "_blank");
      
      toast({
        title: t("consultForm", "openingEmail"),
        description: t("consultForm", "emailPreloaded"),
      });
    }

    setIsSubmitting(false);
    onClose();
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      websiteCount: "1",
      currentHosting: "",
      selectedFeatures: [],
      additionalInfo: "",
      contactMethod: "whatsapp",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {selectedPlan ? `${t("consultForm", "consultFor")} ${selectedPlan}` : t("consultForm", "title")}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t("consultForm", "description")}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("consultForm", "contactData")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">{t("consultForm", "fullName")} *</Label>
                <Input
                  id="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={language === "es" ? "Tu nombre" : "Your name"}
                  className="mt-1 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="email">{t("common", "email")} *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                  className="mt-1 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="phone">{t("consultForm", "phoneWhatsApp")} *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  maxLength={30}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+54 9 11 1234-5678"
                  className="mt-1 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="company">{t("common", "company")} ({t("common", "optional")})</Label>
                <Input
                  id="company"
                  maxLength={100}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={language === "es" ? "Nombre de tu empresa" : "Your company name"}
                  className="mt-1 bg-background"
                />
              </div>
            </div>
          </div>

          {/* Project Type */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("consultForm", "projectType")}
            </h3>
            <RadioGroup
              value={formData.projectType}
              onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              {projectTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={type.id} id={type.id} />
                  <Label htmlFor={type.id} className="cursor-pointer">{t("consultForm", type.labelKey)}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Website Count */}
          <div className="space-y-2">
            <Label htmlFor="websiteCount">{t("consultForm", "howManySites")}</Label>
            <Input
              id="websiteCount"
              type="number"
              min="1"
              max="100"
              value={formData.websiteCount}
              onChange={(e) => setFormData({ ...formData, websiteCount: e.target.value })}
              className="w-32 bg-background"
            />
          </div>

          {/* Current Hosting */}
          <div className="space-y-2">
            <Label htmlFor="currentHosting">{t("consultForm", "currentHosting")} ({t("common", "optional")})</Label>
            <Input
              id="currentHosting"
              maxLength={100}
              value={formData.currentHosting}
              onChange={(e) => setFormData({ ...formData, currentHosting: e.target.value })}
              placeholder={t("consultForm", "currentHostingPlaceholder")}
              className="bg-background"
            />
            <p className="text-xs text-muted-foreground">
              {t("consultForm", "migrationNote")}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("consultForm", "featuresNeeded")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={feature.id}
                    checked={formData.selectedFeatures.includes(feature.id)}
                    onCheckedChange={() => handleFeatureToggle(feature.id)}
                  />
                  <Label htmlFor={feature.id} className="cursor-pointer text-sm">
                    {t("consultForm", feature.labelKey)}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">{t("consultForm", "anythingElse")} ({t("common", "optional")})</Label>
            <Textarea
              id="additionalInfo"
              maxLength={1000}
              rows={3}
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              placeholder={t("consultForm", "additionalPlaceholder")}
              className="bg-background resize-none"
            />
          </div>

          {/* Contact Method */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("consultForm", "preferredContact")}
            </h3>
            <RadioGroup
              value={formData.contactMethod}
              onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center space-x-2 p-4 rounded-xl border border-border bg-background hover:border-secondary/50 transition-colors cursor-pointer">
                <RadioGroupItem value="whatsapp" id="whatsapp" />
                <Label htmlFor="whatsapp" className="cursor-pointer flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-success" />
                  {t("consultForm", "whatsappFast")}
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 rounded-xl border border-border bg-background hover:border-secondary/50 transition-colors cursor-pointer">
                <RadioGroupItem value="email" id="email-option" />
                <Label htmlFor="email-option" className="cursor-pointer flex items-center gap-2">
                  <Mail className="w-5 h-5 text-secondary" />
                  Email
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                t("common", "sending")
              ) : (
                <>
                  {formData.contactMethod === "whatsapp" ? (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      {t("consultForm", "sendViaWhatsApp")}
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      {t("consultForm", "sendViaEmail")}
                    </>
                  )}
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={onClose}
            >
              {t("common", "cancel")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HostingConsultForm;
