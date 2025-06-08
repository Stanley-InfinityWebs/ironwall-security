
export const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Our Mission
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 hover-lift">
            <div className="space-y-6 text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ironwall Security Services Ltd envisions being a leading and trusted security solution provider in Kenya, setting the standard for excellence in the industry.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We uphold the highest standards of professionalism, integrity, and reliability while staying ahead of emerging threats through continuous innovation, modern technology, and comprehensive training programs.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We promote inclusivity, build long-term partnerships, and foster professional growth for our team, all while delivering customized and responsive security services that exceed our clients' expectations.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-600">
              <p className="text-blue-800 font-semibold text-center text-lg">
                "Ironwall Security Services Ltd - for the best security"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
