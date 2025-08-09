import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/0f7f4cff-77c4-4a14-a26b-31cf5e140666.png" 
                alt="Leticon Multi Service Group" 
                className="h-24 w-auto relative z-10"
              />
              {/* Cycling dots around logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 relative">
                  <div className="absolute w-2 h-2 bg-primary rounded-full animate-spin" style={{ animationDuration: '3s', top: '0%', left: '50%', transformOrigin: '0 64px' }}></div>
                  <div className="absolute w-2 h-2 bg-primary-glow rounded-full animate-spin" style={{ animationDuration: '3s', animationDelay: '0.5s', top: '0%', left: '50%', transformOrigin: '0 64px' }}></div>
                  <div className="absolute w-2 h-2 bg-accent rounded-full animate-spin" style={{ animationDuration: '3s', animationDelay: '1s', top: '0%', left: '50%', transformOrigin: '0 64px' }}></div>
                  <div className="absolute w-2 h-2 bg-primary rounded-full animate-spin" style={{ animationDuration: '3s', animationDelay: '1.5s', top: '0%', left: '50%', transformOrigin: '0 64px' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+27 12 345 6789</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Pretoria</span>
              </div>
            </div>
            <Button variant="default" size="sm" className="shadow-elegant">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;