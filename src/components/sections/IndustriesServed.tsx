import { Card, CardContent } from "@/components/ui/card";
import { Building2, Factory, Zap, Landmark } from "lucide-react";

const IndustriesServed = () => {
  const industries = [
    {
      icon: Building2,
      title: "Construction",
      description: "Residential, commercial, and infrastructure projects across UAE",
      projects: "500+ Projects Completed",
      specialties: ["High-rise buildings", "Commercial complexes", "Infrastructure development"]
    },
    {
      icon: Factory,
      title: "Oil & Gas",
      description: "Upstream, downstream, and petrochemical facility operations",
      projects: "150+ Industrial Projects",
      specialties: ["Refinery maintenance", "Pipeline construction", "Petrochemical plants"]
    },
    {
      icon: Zap,
      title: "Interiors",
      description: "Premium interior design and fit-out solutions for all sectors",
      projects: "300+ Interior Projects",
      specialties: ["Office fit-outs", "Retail spaces", "Hospitality interiors"]
    },
    {
      icon: Landmark,
      title: "Government Projects",
      description: "Public sector infrastructure and facility management services",
      projects: "100+ Government Contracts",
      specialties: ["Public buildings", "Infrastructure", "Municipal projects"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering specialized workforce and technical solutions across UAE's key industry sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="text-sm font-medium text-accent mb-4">
                  {industry.projects}
                </div>
                
                <div className="space-y-2">
                  {industry.specialties.map((specialty, i) => (
                    <div key={i} className="text-xs bg-muted/50 rounded-full px-3 py-1 text-muted-foreground">
                      {specialty}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Join the growing list of satisfied clients across UAE's major industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary-foreground/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-primary-foreground/80">Total Projects</div>
              </div>
              <div className="bg-primary-foreground/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">250+</div>
                <div className="text-sm text-primary-foreground/80">Active Workforce</div>
              </div>
              <div className="bg-primary-foreground/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-primary-foreground/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;