
import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/09f03614-8236-405a-a1bb-9cd8f9a70fe1.png" 
              alt="Ironwall Security Services Limited Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 mb-2">
              &copy; {new Date().getFullYear()} Ironwall Security Services Limited
            </p>
            <p className="text-blue-400 font-medium">
              Designed for safety, powered by integrity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
