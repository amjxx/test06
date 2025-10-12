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
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Full Name *"
          className="border-[1px]"
        />
      </div>

      <div>
        <Input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email *"
          className="border-[1px]"
        />
      </div>

      <div>
        <Input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number *"
          className="border-[1px]"
        />
      </div>

      <div>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message *"
          className="min-h-[120px] border-[1px]"
        />
      </div>

      <Button
  type="submit"
  className="bg-gradient-primary hover:opacity-90 w-full py-4 text-lg"
>
  {isSubmitting ? "Opening Gmail..." : "Send Message"}
</Button>

    </form>
  );
};

// Contact Info Section
const ContactSection = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "+971 55 870 0738";
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert(`Phone number copied to clipboard: ${phoneNumber}\n\nYou can now paste it into your phone app or dialer.`);
    }).catch(() => {
      // Fallback: show the number in an alert
      alert(`Phone Number: ${phoneNumber}\n\nPlease copy this number to call us.`);
    });
  };
  const handleEmailClick = () => {
    const to = "info@shamsulimara.com";
    const subject = encodeURIComponent("Inquiry from Website");
    const body = encodeURIComponent(
      `Dear Shamsul Imara Team,

I am writing to inquire about your technical services. Please provide me with more information about:

- Services offered
- Pricing details
- Availability
- Any other relevant information

I look forward to hearing from you soon.

Best regards,
[Your Name]`
    );
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");
  };
  const handleWhatsAppClick = () => window.open("https://wa.me/971558700738?text=Hello!%20I%27d%20like%20to%20inquire%20about%20your%20technical%20services.", "_blank");

  const contactMethods = [
    { icon: Phone, title: "Phone", info: "+971 55 870 0738", description: "Call us for immediate assistance", action: handlePhoneClick, buttonText: "Call Now", color: "text-accent" },
    { icon: MessageCircle, title: "WhatsApp", info: "+971-55 870 0738", description: "Chat with us instantly", action: handleWhatsAppClick, buttonText: "WhatsApp", color: "text-[#25D366]" },
    { icon: Mail, title: "Email", info: "info@shamsulimara.com", description: "Send us your detailed inquiry", action: handleEmailClick, buttonText: "Send Email", color: "text-primary" }
  ];

  return (
    <div className="space-y-8 px-4 sm:px-6 md:px-8 lg:pl-[130px]">
      {/* Contact Form + Info */}
      <Card className="bg-card/50 border-border/50 ">
        <CardContent className="p-6">
          <h1 className="font-semibold text-foreground text-lg mb-2">Send Us a Message</h1>
          <p className="text-muted-foreground mb-6">
            Please fill out the form below and our team will get in touch with you as soon as possible. For urgent matters, feel free to use our phone or WhatsApp for immediate assistance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left: Form */}
            <div className="order-1 border border-black/40 shadow-2xl rounded-lg p-4 bg-card/80">
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-start gap-4 pr-0 md:pr-6 lg:pr-10 order-3 md:order-2 pl-[100px]">
  <h2 className="font-semibold text-foreground text-3xl">Contact Information</h2> {/* Increased from text-lg to text-2xl */}
  <p className="text-muted-foreground text-lg">Our support team is available 24/7 to answer your questions.</p> {/* Added text-lg */}
  <div className="space-y-2">
    <p className="flex items-center gap-2 text-lg"><span className="font-semibold">Phone:</span> +971 558700738</p>
    <p className="flex items-center gap-2 text-lg"><span className="font-semibold">Email:</span> info@shamsulimara.com</p>
    <p className="flex items-center gap-2 text-lg"><span className="font-semibold">Address:</span> Dubai, UAE</p>
  </div>
</div>

            
         

            {/* Quick Actions - full width below form/info on md+, directly under form on mobile */}
            <div className="order-2 md:order-3 md:col-span-2">
              <div className="mt-2 md:mt-4 grid grid-cols-3 gap-3">
                <Button onClick={handlePhoneClick} className="bg-secondary text-primary-foreground hover:bg-primary/90 gap-2 w-full">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">Phone</span>
                </Button>
                <Button onClick={handleWhatsAppClick} className="bg-secondary text-primary-foreground hover:bg-primary/90 gap-2 w-full">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </Button>
                <Button onClick={handleEmailClick} className="bg-secondary text-primary-foreground hover:bg-primary/90 gap-2 w-full">
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Email</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


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

    

  
    </div>
  );
};

export default ContactSection;

