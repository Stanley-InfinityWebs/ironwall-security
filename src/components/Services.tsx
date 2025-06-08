
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

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
      icon: Shield
    },
    {
      title: "Access Control",
      description: "Installation and management of systems including biometric readers.",
      icon: CheckCircle
    },
    {
      title: "CCTV Surveillance",
      description: "Real-time monitoring and recording using closed-circuit television systems.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional security solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
