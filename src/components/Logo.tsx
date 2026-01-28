import { useTheme } from "next-themes";
import logoHub from "@/assets/logo-hub.png";
import logoLight from "@/assets/logo-light.png";

interface LogoProps {
  className?: string;
  showSlogan?: boolean;
  showUnderline?: boolean;
}

const Logo = ({ className = "", showSlogan = false, showUnderline = false }: LogoProps) => {
  const { resolvedTheme } = useTheme();
  
  const logoSrc = resolvedTheme === "light" ? logoLight : logoHub;

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <img 
        src={logoSrc} 
        alt="LS NET HUB" 
        className="h-8 md:h-10 w-auto"
      />
      {/* LS Flow gradient underline */}
      {showUnderline && (
        <div className="w-full h-[2px] mt-1 bg-gradient-to-r from-secondary via-primary to-success rounded-full shadow-[0_0_10px_hsla(211,100%,50%,0.5)] animate-pulse-glow" />
      )}
      {showSlogan && (
        <p className="text-xs text-muted-foreground mt-2 tracking-wide">
          Empowering your digital future
        </p>
      )}
    </div>
  );
};

export default Logo;
