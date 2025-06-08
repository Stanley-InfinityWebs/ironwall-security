
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Ready to secure your property? Contact us for a consultation
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Phone className="h-5 w-5" />
                  Primary Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white mb-2">+254 715 472 078</p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('tel:+254715472078', '_self')}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Phone className="h-5 w-5" />
                  Alternative Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white mb-2">+254 734 384 539</p>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-600 text-white hover:bg-slate-700"
                  onClick={() => window.open('tel:+254734384539', '_self')}
                >
                  Request Callback
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-blue-600/10 rounded-lg p-8 border border-blue-500/20">
            <h3 className="text-2xl font-semibold mb-4">24/7 Emergency Response</h3>
            <p className="text-slate-300 mb-6">
              Our security experts are available around the clock to handle any emergency situations and provide immediate assistance.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4"
              onClick={() => window.open('tel:+254715472078', '_self')}
            >
              Emergency Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
