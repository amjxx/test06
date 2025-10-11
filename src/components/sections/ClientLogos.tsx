import { Card, CardContent } from "@/components/ui/card";

const ClientLogos = () => {
  // Placeholder client data - in a real implementation, these would be actual client logos
  const clients = [
    { name: "Emirates Construction LLC", logo: "EC" },
    { name: "Gulf Energy Solutions", logo: "GES" },
    { name: "Dubai Infrastructure Corp", logo: "DIC" },
    { name: "National Oil & Gas", logo: "NOG" },
    { name: "Al Rashid Contracting", logo: "ARC" },
    { name: "UAE Government Projects", logo: "UGP" },
    { name: "Sharjah Development", logo: "SD" },
    { name: "Abu Dhabi Construction", logo: "ADC" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've successfully delivered projects for some of UAE's most respected organizations across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-card/30 border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-bold text-lg">
                    {client.logo}
                  </span>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {client.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-semibold">+</span>
                </div>
              ))}
            </div>
            <span className="text-muted-foreground font-medium ml-3">
              And many more satisfied clients across UAE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;