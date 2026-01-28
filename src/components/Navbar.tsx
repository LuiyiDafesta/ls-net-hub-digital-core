import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "IA", href: "/ia" },
    { label: "Cloud", href: "/cloud" },
    { label: "Academy", href: "/academy" },
    { label: "Media", href: "/media" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            {/* AURA Button - Highlighted */}
            <Link to="/aura">
              <Button variant="outline" size="sm" className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                Probá AURA
              </Button>
            </Link>
            
            {/* Get Started - External Link */}
            <a href="https://lsnetinformatica.com.ar" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex flex-col gap-3 mt-2">
                <Link to="/aura" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-fit border-secondary/50 gap-2">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    Probá AURA
                  </Button>
                </Link>
                
                <a href="https://lsnetinformatica.com.ar" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="sm" className="w-fit">
                    Get Started
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
