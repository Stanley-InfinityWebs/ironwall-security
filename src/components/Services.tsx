
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Camera, Users } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Security Consulting",
      description: "Deploying resources to any company in need of security expertise.",
      icon: Shield
    },
    {
      title: "Security System Development", 
      description: "Custom-built surveillance and protection systems for homes or offices.",
      icon: Shield
    },
    {
      title: "Retail Security",
      description: "Round-the-clock patrol and guarding to protect property.",
      icon: Shield
    },
    {
      title: "Mobile Patrols",
      description: "Monitoring and securing premises through perimeter and mobile patrols.",
      icon: Shield
    },
    {
      title: "Event Security",
      description: "Ensuring safety of guests and staff at events.",
      icon: Users
    },
    {
      title: "Access Control",
      description: "Installation and management of systems including biometric readers.",
      icon: CheckCircle
    },
    {
      title: "CCTV Surveillance",
      description: "Real-time monitoring and recording using closed-circuit television systems.",
      icon: Camera
    }
  ];

  return (
    <section id="services" className="py-24 md:py-28 bg-background animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-playfair">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Professional security solutions tailored to your specific needs
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-600 hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300 font-playfair">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed font-inter">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Technology Showcase */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                alt="Advanced Security Technology" 
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2 font-playfair">Advanced Technology</h3>
                  <p className="text-blue-100 font-inter">State-of-the-art security systems</p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Professional Security Team" 
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/20 rounded-lg flex items-center justify-center group-hover:bg-slate-900/30 transition-colors duration-300">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2 font-playfair">Expert Team</h3>
                  <p className="text-slate-100 font-inter">Highly trained professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
