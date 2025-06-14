
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Camera, Users, Eye, Lock, UserCheck } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Security Consulting",
      description: "Deploying resources to any company in need of security expertise and strategic planning.",
      icon: Shield,
      color: "blue"
    },
    {
      title: "Security System Development", 
      description: "Custom-built surveillance and protection systems tailored for homes or offices.",
      icon: Lock,
      color: "green"
    },
    {
      title: "Retail Security",
      description: "Round-the-clock patrol and guarding to protect your retail business and customers.",
      icon: UserCheck,
      color: "purple"
    },
    {
      title: "Mobile Patrols",
      description: "Professional monitoring and securing of premises through perimeter and mobile patrols.",
      icon: Eye,
      color: "orange"
    },
    {
      title: "Event Security",
      description: "Comprehensive security management ensuring safety of guests and staff at events.",
      icon: Users,
      color: "red"
    },
    {
      title: "Access Control",
      description: "Advanced installation and management of access systems including biometric readers.",
      icon: CheckCircle,
      color: "teal"
    },
    {
      title: "CCTV Surveillance",
      description: "State-of-the-art real-time monitoring and recording using advanced CCTV systems.",
      icon: Camera,
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { icon: string; border: string; hover: string; bg: string } } = {
      blue: { icon: "text-blue-600", border: "border-l-blue-600", hover: "hover:border-blue-200", bg: "hover:bg-blue-50" },
      green: { icon: "text-green-600", border: "border-l-green-600", hover: "hover:border-green-200", bg: "hover:bg-green-50" },
      purple: { icon: "text-purple-600", border: "border-l-purple-600", hover: "hover:border-purple-200", bg: "hover:bg-purple-50" },
      orange: { icon: "text-orange-600", border: "border-l-orange-600", hover: "hover:border-orange-200", bg: "hover:bg-orange-50" },
      red: { icon: "text-red-600", border: "border-l-red-600", hover: "hover:border-red-200", bg: "hover:bg-red-50" },
      teal: { icon: "text-teal-600", border: "border-l-teal-600", hover: "hover:border-teal-200", bg: "hover:bg-teal-50" },
      indigo: { icon: "text-indigo-600", border: "border-l-indigo-600", hover: "hover:border-indigo-200", bg: "hover:bg-indigo-50" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="services" className="py-32 md:py-36 bg-gradient-to-br from-slate-50 to-blue-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              Professional security services tailored to your specific needs, backed by cutting-edge technology and expert personnel
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 ${colors.border} ${colors.hover} ${colors.bg} bg-white/80 backdrop-blur-sm hover:scale-105`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <service.icon className={`h-7 w-7 ${colors.icon} transition-transform duration-300`} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 font-playfair">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed font-inter text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced Security Technology Showcase */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                alt="Advanced Security Technology" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent flex items-end p-8 group-hover:from-blue-900/90 transition-all duration-500">
                <div className="text-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-3xl font-bold mb-3 font-playfair">Advanced Technology</h3>
                  <p className="text-blue-100 font-inter text-lg leading-relaxed">
                    State-of-the-art security systems with AI-powered monitoring and real-time threat detection
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Professional Security Team" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-700/40 to-transparent flex items-end p-8 group-hover:from-slate-900/90 transition-all duration-500">
                <div className="text-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-3xl font-bold mb-3 font-playfair">Expert Team</h3>
                  <p className="text-slate-100 font-inter text-lg leading-relaxed">
                    Highly trained and certified professionals dedicated to your safety and security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
