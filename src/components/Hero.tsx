
import { Button } from "@/components/ui/button";
import { Shield, Phone, ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen flex items-center pt-28 md:pt-0 animate-fade-in"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <img 
              src="/lovable-uploads/b93119b2-3fc9-46d9-93c1-7cc09bbcc494.png" 
              alt="Ironwall Security Services Limited Logo" 
              className="h-36 w-auto drop-shadow-2xl filter brightness-110"
            />
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in font-playfair drop-shadow" style={{ animationDelay: '0.2s' }}>
            Reliable & Trusted Security Solutions in Kenya
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in font-inter" style={{ animationDelay: '0.4s' }}>
            We safeguard your people, property, and peace of mind with professional security services.
          </p>
          
          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Shield className="h-5 w-5 text-blue-300" />
            <span className="text-lg font-semibold text-blue-200 font-inter">
              The Best Provider for Security Solutions in Kenya | Established 2024
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-900/25"
            >
              Get a Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('tel:+254715472078', '_self')}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:text-blue-300 transition-colors"
            style={{ animationDelay: '1s' }}
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
            <span className="block text-sm mt-2">Learn More</span>
          </button>
        </div>
      </div>
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-blue-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

