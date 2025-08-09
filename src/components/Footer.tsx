import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/0f7f4cff-77c4-4a14-a26b-31cf5e140666.png" 
                alt="Leticon Multi Service Group" 
                className="h-24 w-auto brightness-110 animate-spin"
                style={{ animationDuration: '10s' }}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional construction and property services in Pretoria. Your trusted partner for all construction, cleaning, security, and maintenance needs.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-glow">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Professional Cleaning</li>
              <li>Security Services</li>
              <li>Plumbing Solutions</li>
              <li>Landscaping</li>
              <li>Sanitizing Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-glow">Contact</h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+27 12 345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@leticon.co.za</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>100 James Clark Street<br />Med Village, Pretoria</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary-glow">Business Hours</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <div>
                  <div>Mon-Fri: 8:00 AM - 5:00 PM</div>
                  <div>Emergency Service: 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Leticon (Pty) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>POPI Act Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;