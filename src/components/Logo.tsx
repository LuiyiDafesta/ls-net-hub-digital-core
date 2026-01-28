interface LogoProps {
  className?: string;
  showSlogan?: boolean;
}

const Logo = ({ className = "", showSlogan = false }: LogoProps) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-baseline gap-0.5">
        {/* LSNET text with red dot inside 'n' */}
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          ls
        </span>
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground relative">
          n
          <span className="absolute top-[0.2em] left-[0.38em] w-[0.22em] h-[0.22em] bg-primary rounded-full shadow-[0_0_8px_hsla(0,100%,60%,0.8)]" />
        </span>
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          et
        </span>
        {/* HUB in blue */}
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-secondary ml-1">
          hub
        </span>
      </div>
      {/* LS Flow gradient underline */}
      <div className="w-full h-[2px] mt-1 bg-gradient-to-r from-secondary via-primary to-success rounded-full shadow-[0_0_10px_hsla(211,100%,50%,0.5)] animate-pulse-glow" />
      {showSlogan && (
        <p className="text-xs text-muted-foreground mt-2 tracking-wide">
          Empowering your digital future
        </p>
      )}
    </div>
  );
};

export default Logo;
