import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Download } from "lucide-react";

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const to = "info@shamsulimara.com";
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 min-h-[120px]"
        />
      </div>

      <Button type="submit" className="bg-gradient-primary hover:opacity-90 w-full py-4">
        {isSubmitting ? "Opening Gmail..." : "Send Message"}
      </Button>
    </form>
  );
};

// Contact Info Section
const ContactSection = () => {
  const handlePhoneClick = () => window.open("tel:+971558700738");
  const handleEmailClick = () => window.open("mailto:info@shamsulimaratech.com");
  const handleWhatsAppClick = () => window.open("https://wa.me/971558700738?text=Hello!%20I%27d%20like%20to%20inquire%20about%20your%20technical%20services.", "_blank");

  const contactMethods = [
    { icon: Phone, title: "Phone", info: "+971558700738", description: "Call us for immediate assistance", action: handlePhoneClick, buttonText: "Call Now", color: "text-accent" },
    { icon: MessageCircle, title: "WhatsApp", info: "+971-55 870 0738", description: "Chat with us instantly", action: handleWhatsAppClick, buttonText: "WhatsApp", color: "text-[#25D366]" },
    { icon: Mail, title: "Email", info: "info@shamsulimaratech.com", description: "Send us your detailed inquiry", action: handleEmailClick, buttonText: "Send Email", color: "text-primary" }
  ];

  return (
    <div className="space-y-8 pl-[130px]">
      {/* Contact Form + Info */}
      <Card className="bg-card/50 border-border/50 ">
        <CardContent className="p-6">
          <h1 className="font-semibold text-foreground text-lg mb-2">Send Us a Message</h1>
          <p className="text-muted-foreground mb-6">
            Please fill out the form below and our team will get in touch with you as soon as possible. For urgent matters, feel free to use our phone or WhatsApp for immediate assistance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-start gap-4 pr-10">
              <h4 className="font-semibold text-foreground text-lg">Contact Information</h4>
              <p className="text-muted-foreground">Our support team is available 24/7 to answer your questions.</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2"><span className="font-semibold">Phone:</span> +971 558700738</p>
                <p className="flex items-center gap-2"><span className="font-semibold">Email:</span> info@shamsulimara.com</p>
                <p className="flex items-center gap-2"><span className="font-semibold">Address:</span> Dubai, UAE</p>
              </div>
              <p className="text-muted-foreground mt-4">You can also reach us via WhatsApp for instant support.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Methods Cards */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-card/50 border-border/50">
            <CardContent className="p-6 flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full bg-current/10 flex items-center justify-center ${method.color} flex-shrink-0`}>
                <method.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg mb-1">{method.title}</h3>
                <p className="text-foreground font-medium mb-1">{method.info}</p>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <Button onClick={method.action} variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground">
                  <method.icon className="h-4 w-4" /> {method.buttonText}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Office Location */}
      <Card className="bg-card/50 border-border/50">
        <CardContent className="p-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-lg mb-2">Office Location</h3>
            <p className="text-muted-foreground mb-3">Dubai, United Arab Emirates<br />Serving all UAE Emirates</p>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-1"><Clock className="h-4 w-4" /><span>Sun-Thu: 8:00 AM - 6:00 PM</span></div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Fri: 9:00 AM - 1:00 PM</span></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company Resources */}
      <Card className="bg-gradient-primary text-primary-foreground">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-3">Company Resources</h3>
          <p className="text-primary-foreground/90 mb-4">Download our company profile and certifications for detailed information about our services and credentials.</p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"><Download className="h-4 w-4" /> Company Profile (PDF)</Button>
            <Button variant="outline" className="w-full gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"><Download className="h-4 w-4" /> Service Catalog (PDF)</Button>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Support */}
      <Card className="border-accent/20 bg-accent/5">
        <CardContent className="p-6">
          <h3 className="font-semibold text-foreground text-lg mb-2">24/7 Emergency Support</h3>
          <p className="text-muted-foreground mb-3">For urgent project requirements and emergency workforce deployment.</p>
          <Button onClick={handlePhoneClick} className="w-full bg-accent hover:bg-accent/90 gap-2"><Phone className="h-4 w-4" /> Emergency Hotline: +971558700738</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
