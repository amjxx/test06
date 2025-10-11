import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import Hero from "@/components/sections/Hero";
import CompanyStory from "@/components/sections/CompanyStory";
import ServiceHighlights from "@/components/sections/ServiceHighlights";
import ServiceGrid from "@/components/sections/ServiceGrid";
import ServicesSection from "@/components/sections/HowWeWork";
import StatsBar from "@/components/sections/StatsBar";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import ContractBenefits from "@/components/sections/ContractBenefits";


const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
    
        <div className="">
        <Hero/>
        <CompanyStory/>
        <ContractBenefits/>
     
        <ServicesSection/>
     
     
       

   
         
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contact;