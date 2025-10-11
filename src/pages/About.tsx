import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CompanyStory from "@/components/sections/CompanyStory";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Shamsul Imara Technical Services
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Your trusted partner for comprehensive manpower and technical solutions across UAE
              </p>
            </div>
          </div>
        </section>
        <CompanyStory />
        <WhyChooseUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;