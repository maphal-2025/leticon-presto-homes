const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 800, letterSpacing: '-0.02em' }}>
        <span className="text-[hsl(var(--brand-teal))] lowercase">
          letric
        </span>
        <span className="relative inline-block">
          <span className="text-[hsl(var(--brand-teal))] lowercase">o</span>
          <span 
            className="absolute top-[35%] left-[20%] w-[60%] h-[30%] bg-[hsl(var(--brand-coral))] rounded-sm" 
            style={{ transform: 'skewX(-15deg)' }}
          />
        </span>
        <span className="text-[hsl(var(--brand-teal))] lowercase">
          n
        </span>
      </div>
      <span 
        className="text-[hsl(var(--brand-coral))] uppercase mt-1"
        style={{ 
          fontFamily: 'Arial, sans-serif', 
          fontWeight: 300,
          fontSize: '0.3em',
          letterSpacing: '0.25em',
          marginLeft: '0.1em'
        }}
      >
        MULTI SERVICE GROUP
      </span>
    </div>
  );
};

export default Logo;
