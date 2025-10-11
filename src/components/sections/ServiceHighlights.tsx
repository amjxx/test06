import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Home, Wrench, ArrowRight } from "lucide-react";

// ✅ Import your images (make sure paths are correct)


const ServiceHighlights = () => {
  const services = [
    {
      icon: Users,
      title: "Workforce solution",
      image: electricalWork,
      description:
        "Skilled technicians, engineers, welders, electricians, and construction professionals ready for deployment across UAE projects.",
    },
    {
      icon: Home,
      title: "Contracting & Interiors",
      image: kitchenEquipment,
      description:
        "Complete interior solutions including joinery, gypsum ceilings, partitions, painting, and premium fit-outs for commercial spaces.",
    },
    {
      icon: Wrench,
      title: "Civil & Oil & Gas",
      image: engineeringWorks,
      description:
        "Specialized services in block & plastering, steel works, concrete, and technical support for oil & gas industry operations.",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical solutions tailored for UAE's construction,
            industrial, and oil & gas sectors
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>

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
