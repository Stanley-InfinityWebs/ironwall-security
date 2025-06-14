
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Award } from "lucide-react";

export const Statistics = () => {
  const stats = [
    {
      icon: Shield,
      number: "500+",
      label: "Properties Protected",
      description: "Homes and businesses secured"
    },
    {
      icon: Users,
      number: "50+",
      label: "Security Personnel",
      description: "Trained professionals"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Response",
      description: "Round-the-clock availability"
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      description: "In security industry"
    }
  ];

  return (
    <section className="py-24 md:py-28 bg-slate-900 text-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Our Track Record
            </h2>
            <p className="text-xl text-slate-300 font-inter">
              Numbers that speak for our commitment to security
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-center group hover:bg-slate-700 transition-all duration-300 animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-playfair">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold text-blue-400 mb-2 font-inter">
                    {stat.label}
                  </p>
                  <p className="text-slate-300 text-sm font-inter">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
