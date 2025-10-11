import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Request Submitted Successfully",
      description: "We'll get back to you within 24 hours with a detailed proposal.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm ${formData.name} from ${formData.company}. I'm interested in your ${formData.service} services. ${formData.message}`);
    window.open(`https://wa.me/971558700738?text=${message}`, '_blank');
  };

  return (
    <section id="quote-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Request Skilled Manpower Now
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a customized workforce solution for your project requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Options */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Quick Contact Options
              </h3>
              
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Call Now</h4>
                      <p className="text-muted-foreground">Immediate assistance available</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full gap-2 border-accent/30 hover:bg-accent/10">
                    <Phone className="h-4 w-4" />
                    +971-55870 0738
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-[#25D366]/20 bg-[#25D366]/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <p className="text-muted-foreground">Fast response guaranteed</p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white"
                  >
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Request Form */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;