import { useTheme } from "next-themes";
import { Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageThemeSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Language Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-1.5 px-2">
            <Globe className="w-4 h-4" />
            <span className="text-xs font-medium uppercase">{language}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-popover border-border z-50">
          <DropdownMenuItem 
            onClick={() => setLanguage("es")}
            className={language === "es" ? "bg-accent" : ""}
          >
            <span className="mr-2">🇪🇸</span>
            Español
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setLanguage("en")}
            className={language === "en" ? "bg-accent" : ""}
          >
            <span className="mr-2">🇺🇸</span>
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="sm"
        className="px-2"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={t("theme", theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
};

export default LanguageThemeSelector;
