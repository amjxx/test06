import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JobApplication from "@/components/sections/JobApplication";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Grow Your Career with Shamsul Imara
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Join our team of skilled professionals and build a rewarding career in UAE's technical services industry
              </p>
            </div>
          </div>
        </section>
        <JobApplication />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Careers;