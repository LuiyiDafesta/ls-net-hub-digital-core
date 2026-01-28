import { useState } from "react";
import { X, Send, MessageSquare, Mail } from "lucide-react";
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

interface HostingConsultFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const projectTypes = [
  { id: "website", label: "Sitio web / Landing page" },
  { id: "ecommerce", label: "Tienda online / E-commerce" },
  { id: "blog", label: "Blog / Portal de noticias" },
  { id: "webapp", label: "Aplicación web" },
  { id: "other", label: "Otro" },
];

const features = [
  { id: "wordpress", label: "WordPress" },
  { id: "ssl", label: "Certificado SSL" },
  { id: "email", label: "Emails corporativos" },
  { id: "domain", label: "Dominio personalizado" },
  { id: "backups", label: "Backups automáticos" },
  { id: "support", label: "Soporte prioritario" },
];

const HostingConsultForm = ({ isOpen, onClose, selectedPlan }: HostingConsultFormProps) => {
  const { toast } = useToast();
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

    // Build WhatsApp message
    const featuresText = formData.selectedFeatures
      .map((f) => features.find((feat) => feat.id === f)?.label)
      .join(", ");
    
    const projectTypeText = projectTypes.find((p) => p.id === formData.projectType)?.label || formData.projectType;

    const message = `
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
    `.trim();

    if (formData.contactMethod === "whatsapp") {
      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/5491160449717?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "¡Redirigiendo a WhatsApp!",
        description: "Se abrirá una conversación con nuestro equipo.",
      });
    } else {
      // For email, show instructions (since we don't have backend yet)
      const emailSubject = `Consulta Hosting${selectedPlan ? ` - ${selectedPlan}` : ""}`;
      const mailtoUrl = `mailto:info@lsnethub.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(message)}`;
      window.open(mailtoUrl, "_blank");
      
      toast({
        title: "¡Abriendo cliente de email!",
        description: "Se abrirá tu aplicación de correo con los datos precargados.",
      });
    }

    setIsSubmitting(false);
    onClose();
    
    // Reset form
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
            {selectedPlan ? `Consulta: ${selectedPlan}` : "Solicitar Asesoramiento"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Completá el formulario y un asesor se comunicará con vos para ofrecerte la mejor opción.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Datos de contacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="mt-1 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="mt-1 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
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
                <Label htmlFor="company">Empresa (opcional)</Label>
                <Input
                  id="company"
                  maxLength={100}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Nombre de tu empresa"
                  className="mt-1 bg-background"
                />
              </div>
            </div>
          </div>

          {/* Project Type */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Tipo de proyecto
            </h3>
            <RadioGroup
              value={formData.projectType}
              onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              {projectTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={type.id} id={type.id} />
                  <Label htmlFor={type.id} className="cursor-pointer">{type.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Website Count */}
          <div className="space-y-2">
            <Label htmlFor="websiteCount">¿Cuántos sitios web necesitás alojar?</Label>
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
            <Label htmlFor="currentHosting">¿Tenés hosting actualmente? (opcional)</Label>
            <Input
              id="currentHosting"
              maxLength={100}
              value={formData.currentHosting}
              onChange={(e) => setFormData({ ...formData, currentHosting: e.target.value })}
              placeholder="Ej: GoDaddy, HostGator, otro proveedor..."
              className="bg-background"
            />
            <p className="text-xs text-muted-foreground">
              Si ya tenés hosting, podemos ayudarte con la migración sin costo adicional.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              ¿Qué funcionalidades necesitás?
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
                    {feature.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">¿Algo más que debamos saber? (opcional)</Label>
            <Textarea
              id="additionalInfo"
              maxLength={1000}
              rows={3}
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              placeholder="Contanos sobre tu proyecto, requerimientos especiales, fechas límite..."
              className="bg-background resize-none"
            />
          </div>

          {/* Contact Method */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              ¿Cómo preferís que te contactemos?
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
                  WhatsApp (respuesta rápida)
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
                "Enviando..."
              ) : (
                <>
                  {formData.contactMethod === "whatsapp" ? (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      Enviar por WhatsApp
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Enviar por Email
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
              Cancelar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HostingConsultForm;
