import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: "Ahmed Al Rashid",
      company: "Emirates Construction LLC",
      role: "Project Manager", 
      content: "Shamsul Imara delivered exactly what we needed - skilled technicians who were ready to work from day one. Their professionalism and efficiency exceeded our expectations.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Gulf Energy Solutions",
      role: "Operations Director",
      content: "Outstanding service for our oil & gas project. The team's expertise in industrial environments and safety protocols was impressive. Highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <section className="py-5 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-17">
          <h4 className="text-4xl md:text-3xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h4>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies across UAE's construction and industrial sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-1">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-card border-border/50">
              <CardContent className="p-2">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-2 w-2 text-accent flex-shrink-0" />
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-2 w-2 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-9 h-9 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-3 px-8 py-4 text-lg border-primary/20 hover:bg-primary/5"
          >
            View More Testimonials
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;