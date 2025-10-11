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
    <section className="py-0 bg-background pl-[100px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Includes
          </h2>
          <p className="text-xl text-muted-foreground max-w-1xl mx-auto pl-[25px]">
            Comprehensive technical services tailored for UAE businesses across construction, industrial, and government sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 pr-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-[400px] h-[250px] rounded-lg overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
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