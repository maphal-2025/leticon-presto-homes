import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Shield, 
  Wrench, 
  TreePine, 
  Droplets,
  Bus,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    description: "Comprehensive cleaning services for residential and commercial properties, ensuring pristine environments.",
    features: ["Deep cleaning", "Regular maintenance", "Sanitization", "Window cleaning"]
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Reliable security solutions to protect your property with trained personnel and modern technology.",
    features: ["24/7 monitoring", "Access control", "Patrol services", "Emergency response"]
  },
  {
    icon: Wrench,
    title: "Plumbing Solutions",
    description: "Expert plumbing services from repairs to installations, handling all your water and drainage needs.",
    features: ["Emergency repairs", "Pipe installation", "Leak detection", "Maintenance"]
  },
  {
    icon: TreePine,
    title: "Landscaping",
    description: "Transform your outdoor spaces with professional landscaping and garden maintenance services.",
    features: ["Garden design", "Lawn care", "Tree maintenance", "Irrigation systems"]
  },
  {
    icon: Droplets,
    title: "Sanitizing Services",
    description: "Advanced sanitization and disinfection services to maintain healthy, clean environments.",
    features: ["Deep sanitization", "Disinfection", "Health compliance", "Regular treatments"]
  },
  {
    icon: Bus,
    title: "Shuttle Service",
    description: "Reliable transportation solutions for workers and materials, ensuring timely arrivals and departures.",
    features: ["Worker transport", "Material delivery", "Scheduled routes", "Flexible scheduling"]
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-gradient-service overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 text-foreground pointer-events-none z-0">
        <div className="text-[15rem] font-black uppercase tracking-widest select-none transform rotate-12">
          CONSTRUCTION SERVICES
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Property Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From construction to maintenance, we provide end-to-end solutions for all your property needs in Pretoria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="service" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We're here to help with specialized services.
          </p>
          <Button size="lg" variant="hero" className="shadow-glow">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;