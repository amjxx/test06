import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, MapPin, Award } from "lucide-react";

const StatsBar = () => {
  const stats = [
    {
      icon: Users,
      number: "250+",
      label: "Workforce Mobilized",
      description: "Skilled professionals deployed"
    },
    {
      icon: Calendar,
      number: "10+",
      label: "Years Experience",
      description: "Serving UAE industries"
    },
    {
      icon: MapPin,
      number: "UAE-wide",
      label: "Coverage",
      description: "All Emirates served"
    },
    {
      icon: Award,
      number: "100%",
      label: "Compliance",
      description: "Licensed & certified"
    }
  ];

  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/90 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;