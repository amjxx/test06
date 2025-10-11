import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServiceGrid from "@/components/sections/ServiceGrid";
import RequestForm from "@/components/sections/RequestForm";
import HowWeWork from "@/components/sections/HowWeWork";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Technical Services
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Tailored solutions for UAE businesses across construction, oil & gas, and process industries
              </p>
            </div>
          </div>
        </section>
        <HowWeWork/>

 
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Services;