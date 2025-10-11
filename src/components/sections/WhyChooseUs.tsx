import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award } from "lucide-react";

// ✅ Import images from src/assets
import fullComplianceImg from "@/assets/full-compliance.jpg";
import fastMobilizationImg from "@/assets/fast-mobilization.jpg";
import skilledWorkforceImg from "@/assets/skilled-workforce.jpg";
import dedicatedSupportImg from "@/assets/dedicated-support.jpg";
import qualityAssuranceImg from "@/assets/quality-assurance.jpg";
import flexibleSolutionsImg from "@/assets/flexible-solutions.jpg";

const WhyChooseUs = () => {
  const advantages = [
    { image: fullComplianceImg, title: "Full Compliance", description: "Licensed and certified operations ensuring complete legal compliance across all UAE Emirates with proper documentation and permits." },
    { image: fastMobilizationImg, title: "Fast Mobilization", description: "Rapid workforce deployment within 48-72 hours of confirmation, ensuring your project timelines are never compromised." },
    { image: skilledWorkforceImg, title: "Skilled Workforce", description: "Pre-screened and certified professionals with proven track records in their respective fields and industries." },
    { image: dedicatedSupportImg, title: "Dedicated Support", description: "24/7 project support with dedicated account managers ensuring seamless communication and quick issue resolution." },
    { image: qualityAssuranceImg, title: "Quality Assurance", description: "Rigorous quality control processes and regular performance monitoring to maintain consistently high standards." },
    { image: flexibleSolutionsImg, title: "Flexible Solutions", description: "Customizable service packages tailored to your specific project requirements, budget, and timeline constraints." },
  ];

  const certifications = [
    "UAE Labor Ministry Licensed",


    "Municipality Approved",
    "Chamber of Commerce Member",
    "Government Contractor Registered"
  ];

  return (
    <section className="py-20 bg-muted/30 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Shamsul Imara?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference of working with UAE's most trusted technical services partner
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-28 h-28 flex items-center justify-center mb-4">
                  <img 
                    src={advantage.image} 
                    alt={advantage.title} 
                    className="max-w-60 max-h-60 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
<section>
  
</section>
        {/* Certifications & Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Certifications List */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Certified & Compliant</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence is reflected in our comprehensive certifications and compliance standards. We maintain all necessary licenses and certifications to operate legally and safely across the UAE.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Awards */}
          <div className="space-y-6">
            <Card className="bg-gradient-primary text-primary-foreground p-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-primary-foreground/90 mb-4">Client Satisfaction Rate</div>
                <p className="text-sm text-primary-foreground/80">Based on project completion surveys and long-term partnerships</p>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 p-6 text-center border-border/50">
                <div className="text-2xl font-bold text-foreground mb-1">72hrs</div>
                <div className="text-sm text-muted-foreground">Average Mobilization Time</div>
              </Card>
              <Card className="bg-card/50 p-6 text-center border-border/50">
                <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </Card>
            </div>

           
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-lg text-secondary-foreground/90 mb-6">
              Join hundreds of satisfied clients who trust Shamsul Imara for their technical service needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-secondary-foreground/10 rounded-lg px-4 py-2 text-sm">
                ✓ Free consultation and project assessment
              </div>
              <div className="bg-secondary-foreground/10 rounded-lg px-4 py-2 text-sm">
                ✓ Competitive pricing with transparent quotes
              </div>
              <div className="bg-secondary-foreground/10 rounded-lg px-4 py-2 text-sm">
                ✓ Flexible contract terms and conditions
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
