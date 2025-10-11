import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ClientLogos from "@/components/sections/ClientLogos";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import IndustriesServed from "@/components/sections/IndustriesServed";

const Clients = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by Leading Companies
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Building partnerships across UAE's construction, oil & gas, and government sectors
              </p>
            </div>
          </div>
        </section>
        <ClientLogos />
        <TestimonialSlider />
        <IndustriesServed />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Clients;