import { Button } from "@/components/ui/button";
import { Shield, Phone, ArrowDown, Star } from "lucide-react";

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
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen flex items-center pt-28 md:pt-0 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-300/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-300/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-blue-300/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-blue-300/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo with enhanced animation */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative group">
              <img 
                src="/lovable-uploads/b93119b2-3fc9-46d9-93c1-7cc09bbcc494.png" 
                alt="Ironwall Security Services Limited Logo" 
                className="h-40 w-auto drop-shadow-2xl filter brightness-110 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Main Headline with enhanced typography */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in font-playfair drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Reliable & Trusted
            </span>
            <br />
            <span className="text-blue-200">Security Solutions</span>
            <br />
            <span className="text-3xl md:text-4xl text-blue-300">in Kenya</span>
          </h1>
          
          {/* Subheadline with better spacing */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in font-inter leading-relaxed max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            We safeguard your people, property, and peace of mind with professional security services backed by years of expertise.
          </p>
          
          {/* Enhanced tagline with icons */}
          <div className="flex items-center justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/30">
              <Shield className="h-5 w-5 text-blue-300" />
              <span className="text-lg font-semibold text-blue-200 font-inter">
                Best Provider for Security Solutions
              </span>
            </div>
            <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-2 rounded-full backdrop-blur-sm border border-yellow-400/30">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-900/50 border border-blue-400/20"
            >
              Get a Free Consultation
              <Shield className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('tel:+254715472078', '_self')}
              className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-10 py-5 text-xl font-semibold transition-all duration-300 shadow-lg backdrop-blur-sm bg-white/10"
            >
              <Phone className="mr-2 h-6 w-6" />
              Call Now - 24/7
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2 text-blue-200">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Phone className="h-5 w-5" />
              <span className="font-medium">24/7 Emergency Response</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-medium">2+ Years Experience</span>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <button 
            onClick={scrollToAbout}
            className="group animate-bounce hover:text-blue-300 transition-colors"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="bg-white/10 rounded-full p-3 group-hover:bg-white/20 transition-all duration-300">
              <ArrowDown className="h-6 w-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="block text-sm mt-2 font-medium">Discover More</span>
          </button>
        </div>
      </div>
    </section>
  );
};
