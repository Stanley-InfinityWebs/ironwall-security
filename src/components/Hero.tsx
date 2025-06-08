
import { Button } from "@/components/ui/button";
import { Shield, Phone } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/09f03614-8236-405a-a1bb-9cd8f9a70fe1.png" 
              alt="Ironwall Security Services Limited Logo" 
              className="h-32 w-auto"
            />
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Reliable & Trusted Security Solutions in Kenya
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            We safeguard your people, property, and peace of mind.
          </p>
          
          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Shield className="h-5 w-5 text-blue-300" />
            <span className="text-lg font-semibold text-blue-200">
              The Best Provider for Security Solutions in Kenya
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get a Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-300 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-300 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-blue-300 rounded-full"></div>
      </div>
    </section>
  );
};
