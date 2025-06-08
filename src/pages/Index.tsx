
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Mission />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
