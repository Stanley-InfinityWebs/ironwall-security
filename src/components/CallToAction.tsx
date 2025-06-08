
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait until it's too late. Contact us today for a free security assessment and customized protection plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('tel:+254715472078', '_self')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call for Free Consultation
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              onClick={scrollToContact}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>

          <div className="mt-8 p-6 bg-blue-700/30 rounded-lg">
            <p className="text-blue-100 font-medium">
              ⚡ Emergency Response Available 24/7 | 🛡️ Licensed & Insured | 📞 Free Consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
