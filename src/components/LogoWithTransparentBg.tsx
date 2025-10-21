import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/removeBackground';
import leticonLogo from '@/assets/leticon-logo.jpg';

const LogoWithTransparentBg = ({ className = "" }: { className?: string }) => {
  const [processedLogo, setProcessedLogo] = useState<string | null>(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const processLogo = async () => {
      try {
        setStatus('processing');
        
        const response = await fetch(leticonLogo);
        const blob = await response.blob();
        const img = await loadImage(blob);
        
        const resultBlob = await removeBackground(img);
        const url = URL.createObjectURL(resultBlob);
        
        setProcessedLogo(url);
        setStatus('complete');
      } catch (error) {
        console.error('Error processing logo:', error);
        setStatus('error');
        // Fallback to original logo
        setProcessedLogo(leticonLogo);
      }
    };

    processLogo();
  }, []);

  if (status === 'processing') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-sm text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <img 
      src={processedLogo || leticonLogo} 
      alt="Leticon Multi Service Group" 
      className={`h-auto ${className}`}
    />
  );
};

export default LogoWithTransparentBg;
