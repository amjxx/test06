import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Requested images (add these into src/assets with these exact names)
import workforceImage from "@/assets/workforce.jpg";
import constructImage from "@/assets/construct.jpg"; // for Contracting & Interiors
import civilImage from "@/assets/civil.jpg";
import oilAndGasImage from "@/assets/oil-and-gas.jpg";
import constructionImage from "@/assets/construction.jpg"; // for Construction Support
import decorationImage from "@/assets/decoration.jpg";

const ServiceHighlights = () => {
  const services = [
    {
      title: "Manpower Recruitment",
      image: workforceImage,
      description:
        "Skilled technicians, engineers, welders, electricians, and construction professionals ready for deployment across UAE projects.",
    },
    {
      title: "Contracting & Interiors",
      image: constructImage,
      description:
        "Complete interior solutions including joinery, gypsum ceilings, partitions, painting, and premium fit-outs for commercial spaces.",
    },
    {
      title: "Civil Services",
      image: civilImage,
      description:
        "Concrete, masonry, steel structures, and site works executed to high quality and safety standards.",
    },
    {
      title: "Oil & Gas",
      image: oilAndGasImage,
      description:
        "Specialized manpower and technical support for oil & gas facilities and maintenance.",
    },
    {
      title: "Construction Support",
      image: constructionImage,
      description:
        "Scaffolding, equipment supply, logistics, and on-site technical assistance for projects.",
    },
    {
      title: "Finishing & Decoration",
      image: decorationImage,
      description:
        "Painting, gypsum, joinery, and premium fit-out finishing for residential and commercial spaces.",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical solutions tailored for UAE's construction,
            industrial, and oil & gas sectors
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 border-none bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 gap-3 px-8 py-6 text-lg"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
