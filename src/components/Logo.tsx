const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center font-bold tracking-tight">
        <span className="text-[hsl(var(--brand-teal))]" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 800 }}>
          Letic
        </span>
        <span className="relative inline-block">
          <span className="text-[hsl(var(--brand-teal))]" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 800 }}>
            o
          </span>
          <span 
            className="absolute -top-0.5 right-0.5 w-2 h-2 bg-[hsl(var(--brand-coral))]" 
            style={{ transform: 'skewX(-10deg)' }}
          />
        </span>
        <span className="text-[hsl(var(--brand-teal))]" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 800 }}>
          n
        </span>
      </div>
      <span 
        className="text-[hsl(var(--brand-coral))] tracking-[0.2em] text-[0.35em] mt-0.5 uppercase"
        style={{ fontFamily: 'Arial, sans-serif', fontWeight: 400 }}
      >
        Multi Service Group
      </span>
    </div>
  );
};

export default Logo;
