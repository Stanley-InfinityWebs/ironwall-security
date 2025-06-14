
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MapPin } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Kimani",
      company: "Westlands Shopping Center",
      location: "Nairobi",
      content: "Ironwall Security has been protecting our mall for over 2 years. Their professionalism and quick response time are unmatched. The peace of mind they provide is invaluable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b932?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Michael Ochieng",
      company: "Private Residence",
      location: "Karen",
      content: "The CCTV system they installed gives me complete peace of mind. The mobile patrols are always on time and very professional. Highly recommend their services.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Grace Mwangi",
      company: "Office Complex",
      location: "CBD",
      content: "Outstanding security consulting services. They assessed our vulnerabilities and provided comprehensive solutions that have significantly improved our security posture.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section className="py-32 md:py-36 bg-gradient-to-br from-blue-50 via-white to-slate-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
              <Star className="h-5 w-5 text-yellow-600 fill-current" />
              <span className="text-yellow-800 font-semibold">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              Trusted by businesses and individuals across Kenya - hear from our satisfied clients
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg overflow-hidden relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent opacity-50"></div>
                
                <CardContent className="p-8 relative">
                  <div className="flex items-center mb-6">
                    <Quote className="h-10 w-10 text-blue-600 mb-2 opacity-80" />
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed font-inter text-lg italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <p className="font-bold text-foreground font-playfair text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground font-inter font-medium">{testimonial.company}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-blue-600 font-medium">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust indicator section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-2xl text-slate-800">5.0</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-800 font-playfair">Excellent Rating</p>
                <p className="text-sm text-slate-600">Based on 100+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
