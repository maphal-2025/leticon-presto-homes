import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 text-white pointer-events-none z-0">
        <div className="text-[20rem] font-black uppercase tracking-widest select-none">
          LETICON
        </div>
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-[1]">
        <img 
          src="/lovable-uploads/2fe37800-f02e-4d63-828a-5e7b049c26b9.png" 
          alt="Leticon Multi Service Group - Professional construction and property services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Trusted Since 2020
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional
            <span className="block text-primary-glow">Construction Services</span>
            in Pretoria
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Leticon (Pty) Ltd delivers comprehensive construction and property services including 
            cleaning, security, plumbing, landscaping, and sanitizing solutions across Pretoria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="shadow-glow group" variant="default">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <Clock className="w-8 h-8 text-primary-glow mx-auto mb-2" />
              <div className="text-white font-semibold">24/7</div>
              <div className="text-white/70 text-sm">Emergency Service</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-primary-glow mx-auto mb-2" />
              <div className="text-white font-semibold">500+</div>
              <div className="text-white/70 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary-glow mx-auto mb-2" />
              <div className="text-white font-semibold">100%</div>
              <div className="text-white/70 text-sm">Insured & Licensed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;