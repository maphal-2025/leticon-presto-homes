import leticonLogo from "@/assets/leticon-logo.jpg";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <img 
      src={leticonLogo} 
      alt="Leticon Multi Service Group" 
      className={`h-auto ${className}`}
    />
  );
};

export default Logo;
