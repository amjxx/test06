import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Al Rashid",
      company: "Emirates Construction LLC",
      role: "Project Manager",
      content: "Shamsul Imara delivered exactly what we needed - skilled technicians who were ready to work from day one. Their professionalism and efficiency exceeded our expectations. The team completed our interior project ahead of schedule.",
      rating: 5,
      project: "Commercial Interior Fit-out"
    },
    {
      name: "Sarah Johnson",
      company: "Gulf Energy Solutions",
      role: "Operations Director",
      content: "Outstanding service for our oil & gas project. The team's expertise in industrial environments and safety protocols was impressive. They provided exactly the skilled workforce we needed for our complex operations.",
      rating: 5,
      project: "Industrial Facility Maintenance"
    },
    {
      name: "Mohammed Hassan",
      company: "Dubai Infrastructure Corp",
      role: "Construction Manager",
      content: "Reliable and professional manpower services. Shamsul Imara has been our go-to partner for multiple projects. Their ability to mobilize qualified workers quickly has been crucial for our tight project timelines.",
      rating: 5,
      project: "Infrastructure Development"
    },
    {
      name: "Lisa Rodriguez",
      company: "Al Rashid Contracting",
      role: "HR Director",
      content: "Exceptional recruitment services. They understand our specific requirements and consistently provide skilled professionals who integrate seamlessly with our existing teams. Highly recommended for any technical staffing needs.",
      rating: 5,
      project: "Technical Staffing Solutions"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with Shamsul Imara Technical Services
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="shadow-card bg-card border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-6">
                <Quote className="h-12 w-12 text-accent flex-shrink-0" />
                <div className="flex space-x-1">
                  {Array.from({ length: testimonials[currentSlide].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentSlide].content}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-foreground">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentSlide].role}
                    </div>
                    <div className="text-accent font-medium">
                      {testimonials[currentSlide].company}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-muted-foreground">Project Type:</div>
                  <div className="text-sm text-foreground font-semibold">
                    {testimonials[currentSlide].project}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="w-10 h-10 p-0 rounded-full border-primary/20 hover:bg-primary/5"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="w-10 h-10 p-0 rounded-full border-primary/20 hover:bg-primary/5"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;