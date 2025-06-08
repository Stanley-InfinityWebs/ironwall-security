
import { Shield, CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Who We Are
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ironwall Security Services Ltd is a provider of security solutions in Kenya with vast experience in the industry.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We have established ourselves as a trusted partner for both businesses and individuals seeking reliable and effective security services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Our commitment to customer satisfaction and the deployment of advanced technology sets us apart.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Our highly trained personnel are dedicated to keeping our clients safe and secure at all times.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="Security Operations Center with multiple monitors" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
