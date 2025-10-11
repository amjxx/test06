import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    urgency: "normal"
  });
  const { toast } = useToast();

  const services = [
    "Manpower Recruitment",
    "Contracting & Interiors", 
    "Civil & Mechanical Services",
    "Oil & Gas Support",
    "Construction Support",
    "Finishing & Decoration",
    "General Inquiry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us! We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      urgency: "normal"
    });
  };

  const handleWhatsAppSend = () => {
    const urgencyText = formData.urgency === "urgent" ? "🔴 URGENT: " : "";
    const message = encodeURIComponent(
      `${urgencyText}Hello! I'm ${formData.name} from ${formData.company}.
      
Service Interested In: ${formData.service}
Phone: ${formData.phone}
Email: ${formData.email}

Message: ${formData.message}

Please get back to me as soon as possible. Thank you!`
    );
    window.open(`https://wa.me/971558700738?text=${message}`, '_blank');
  };

  const handleEmailSend = () => {
    const subject = `Service Inquiry - ${formData.service}`;
    const body = encodeURIComponent(
      `Dear Shamsul Imara Team,

I hope this email finds you well. I am writing to inquire about your ${formData.service} services.

Contact Details:
Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}

Inquiry Details:
${formData.message}

Urgency Level: ${formData.urgency}

I would appreciate a prompt response to discuss our requirements further.

Best regards,
${formData.name}`
    );
    window.open(`mailto:info@shamsulimaratech.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="bg-background p-8 lg:p-12">
      <Card className="shadow-card max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">
            Send Us a Message
          </CardTitle>
          <p className="text-muted-foreground text-justify">
            Fill out the form below and we'll get back to you within 24 hours with a detailed response.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="company">Company / Organization</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="mt-1"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-1"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-1"
                  placeholder="+9715587007380"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="service">Service Interested In *</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="urgency">Request Urgency</Label>
                <Select value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal (24-48 hours)</SelectItem>
                    <SelectItem value="high">High Priority (Within 24 hours)</SelectItem>
                    <SelectItem value="urgent">Urgent (Same day response)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message">Message / Project Details *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Please describe your project requirements, timeline, number of workers needed, location, and any specific qualifications required..."
                className="mt-1 min-h-[120px]"
              />
            </div>

            {formData.urgency === "urgent" && (
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <p className="text-sm text-accent font-medium">
                  🔴 Urgent Request: For immediate assistance, we recommend calling our hotline at +971-XX-XXXXXXX or using WhatsApp for fastest response.
                </p>
              </div>
            )}

            <div className="space-y-3">
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 gap-2 py-6">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={handleEmailSend}
                  className="gap-2 py-6 border-primary/20 hover:bg-primary/5"
                >
                  <Mail className="h-4 w-4" />
                  Send via Email
                </Button>
                
                <Button 
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="gap-2 py-6 bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                By submitting this form, you agree to our privacy policy. 
                We'll only use your information to respond to your inquiry and provide relevant service updates.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;