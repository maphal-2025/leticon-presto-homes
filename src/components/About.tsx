import { Building2, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Leticon</h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for comprehensive construction and property services in Pretoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-lg p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed">
              Leticon (Pty) Ltd delivers comprehensive construction and property services including 
              cleaning, security, plumbing, landscaping, paving, and construction solutions across 
              Pretoria. We've built our reputation on delivering exceptional quality and reliable 
              service to both residential and commercial clients.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide comprehensive, high-quality services that exceed our clients' expectations 
              while maintaining the highest standards of professionalism, safety, and environmental 
              responsibility. We're committed to building lasting relationships through exceptional 
              service delivery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-elegant transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Professional Team</h4>
            <p className="text-sm text-muted-foreground">Experienced and certified professionals</p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-elegant transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Client Focus</h4>
            <p className="text-sm text-muted-foreground">Dedicated to your satisfaction</p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-elegant transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Quality Service</h4>
            <p className="text-sm text-muted-foreground">Excellence in every project</p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-elegant transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p className="text-sm text-muted-foreground">Always available when you need us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
