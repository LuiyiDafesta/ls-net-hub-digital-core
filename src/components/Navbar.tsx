import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import LanguageThemeSelector from "./LanguageThemeSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { labelKey: "ia", href: "/ia" },
    { labelKey: "cloud", href: "/cloud" },
    { labelKey: "academy", href: "/academy" },
    { labelKey: "media", href: "/media" },
    { labelKey: "about", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.labelKey}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {t("nav", link.labelKey)}
              </Link>
            ))}
            
            {/* AURA Button - Highlighted */}
            <Link to="/aura">
              <Button variant="outline" size="sm" className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                {t("nav", "tryAura")}
              </Button>
            </Link>
            
            {/* Get Started - External Link */}
            <a href="https://lsnetinformatica.com.ar" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">
                {t("nav", "getStarted")}
              </Button>
            </a>

            {/* Language & Theme Selectors */}
            <div className="ml-2 border-l border-border/50 pl-4">
              <LanguageThemeSelector />
            </div>
          </div>

          {/* Mobile: Theme/Lang + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageThemeSelector />
            <button
              className="text-foreground p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.labelKey}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav", link.labelKey)}
                </Link>
              ))}
              
              <div className="flex flex-col gap-3 mt-2">
                <Link to="/aura" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-fit border-secondary/50 gap-2">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    {t("nav", "tryAura")}
                  </Button>
                </Link>
                
                <a href="https://lsnetinformatica.com.ar" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="sm" className="w-fit">
                    {t("nav", "getStarted")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
