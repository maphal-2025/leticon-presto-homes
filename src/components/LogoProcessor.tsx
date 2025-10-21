import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/removeLogoBackground';
import leticonLogo from '@/assets/leticon-full-logo.jpg';

const LogoProcessor = () => {
  const [status, setStatus] = useState('idle');
  const [processedLogo, setProcessedLogo] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setStatus('processing');
        
        // Load the logo
        const response = await fetch(leticonLogo);
        const blob = await response.blob();
        const img = await loadImage(blob);
        
        // Remove background
        const resultBlob = await removeBackground(img);
        const url = URL.createObjectURL(resultBlob);
        
        setProcessedLogo(url);
        setStatus('complete');
        
        // Download the processed image
        const link = document.createElement('a');
        link.href = url;
        link.download = 'leticon-logo-no-bg.png';
        link.click();
      } catch (error) {
        console.error('Error processing logo:', error);
        setStatus('error');
      }
    };

    processLogo();
  }, []);

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center flex-col gap-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Processing Logo</h2>
        <p className="text-muted-foreground">
          {status === 'processing' && 'Removing background...'}
          {status === 'complete' && 'Done! Image downloaded.'}
          {status === 'error' && 'Error processing image.'}
        </p>
      </div>
      {processedLogo && (
        <img src={processedLogo} alt="Processed logo" className="max-w-md border rounded" />
      )}
    </div>
  );
};

export default LogoProcessor;
