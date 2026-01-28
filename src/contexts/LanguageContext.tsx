import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: keyof typeof translations, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectBrowserLanguage = (): Language => {
  // Check localStorage first
  const stored = localStorage.getItem("language");
  if (stored === "en" || stored === "es") {
    return stored;
  }

  // Detect from browser
  const browserLang = navigator.language || (navigator as any).userLanguage || "";
  
  // Check if browser language starts with "en"
  if (browserLang.toLowerCase().startsWith("en")) {
    return "en";
  }
  
  // Default to Spanish
  return "es";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("es");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const detectedLang = detectBrowserLanguage();
    setLanguageState(detectedLang);
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (section: keyof typeof translations, key: string): string => {
    const sectionData = translations[section];
    if (!sectionData) {
      console.warn(`Translation section "${section}" not found`);
      return key;
    }
    
    const translation = (sectionData as any)[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found in section "${section}"`);
      return key;
    }
    
    return translation[language] || translation.es || key;
  };

  // Don't render until we've detected the language to prevent flash
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
