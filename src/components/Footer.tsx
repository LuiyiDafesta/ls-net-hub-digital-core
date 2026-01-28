import Logo from "./Logo";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border bg-card/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Logo showSlogan />

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              {t("footer", "privacyPolicy")}
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              {t("footer", "termsOfService")}
            </a>
            <a
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              {t("footer", "contact")}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} LS NET HUB. {t("footer", "allRightsReserved")}.
          </p>
          
          {/* Local IT Support Note */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/50">
            <span className="text-muted-foreground">
              {t("footer", "localSupport")}
            </span>
            <a
              href="https://lsnetinformatica.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors font-medium inline-flex items-center gap-1"
            >
              lsnetinformatica.com.ar
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
