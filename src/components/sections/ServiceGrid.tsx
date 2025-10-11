import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import service images from assets
import manpowerImage from "@/assets/workforce.jpg";
import contractingImage from "@/assets/contract.jpg";
import civilImage from "@/assets/civil.jpg";
import oilGasImage from "@/assets/oil-gas.jpg";
import constructionImage from "@/assets/construction.jpg";
import finishingImage from "@/assets/decoration.jpg";

const ServiceGrid = () => {
  const services = [
    {
      image: manpowerImage,
      title: "Workforce Solution",
      description: "Skilled technicians, engineers, welders, electricians, masons, carpenters, scaffolders, riggers, painters for all your project needs."
    },
    {
      image: contractingImage,
      title: "Contracting & Interiors",
      description: "Professional joinery, gypsum ceilings, partitions, painting, and complete fit-outs for commercial and residential spaces."
    },
    {
      image: civilImage,
      title: "Civil & Mechanical Services",
      description: "Block & plastering, steel works, tiles installation, concrete works, and comprehensive mechanical support services."
    },
    {
      image: oilGasImage,
      title: "Oil & Gas Support",
      description: "Specialized technical services for oil & gas industry including process support, maintenance, and industrial construction."
    },
    {
      image: constructionImage,
      title: "Construction Support",
      description: "Complete construction support services including project management, quality control, and skilled workforce deployment."
    },
    {
      image: finishingImage,
      title: "Finishing & Decoration",
      description: "Professional finishing services including painting, decoration, flooring, and aesthetic enhancement for all project types."
    }
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-background pl-4 sm:pl-6 md:pl-8 lg:pl-[100px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Includes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-6 md:px-0">
            Comprehensive technical services tailored for UAE businesses across construction, industrial, and government sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16 pr-0 md:pr-6 lg:pr-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="w-full aspect-[4/2.5] sm:aspect-[16/10] rounded-lg overflow-hidden mb-4 sm:mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                <Button variant="outline" size="sm" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;