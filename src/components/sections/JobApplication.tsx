import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Send, MessageCircle, Mail, Phone, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const JobApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    nationality: "",
    location: "",
    message: ""
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration - Replace these with your actual values from EmailJS dashboard
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const positions = [
    "Civil Engineer",
    "Mechanical Engineer",
    "Electrical Technician",
    "Welder",
    "Mason",
    "Carpenter",
    "Scaffolder",
    "Rigger", 
    "Painter",
    "Plumber",
    "HVAC Technician",
    "Site Supervisor",
    "Safety Officer",
    "Project Coordinator",
    "Interior Designer",
    "Gypsum Installer",
    "Tile Installer",
    "Steel Fabricator",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create template parameters for EmailJS
      const templateParams = {
        to_email: 'amjadmm127@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        nationality: formData.nationality,
        location: formData.location,
        message: formData.message,
        subject: `New Job Application - ${formData.position}`,
        cv_file: cvFile?.name || 'No CV uploaded',
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Application Sent Successfully",
          description: "Thank you for your interest! We'll review your application and get back to you within 3-5 business days.",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          nationality: "",
          location: "",
          message: ""
        });
        setCvFile(null);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Application",
        description: "There was an error sending your application. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };

  const handleWhatsAppApply = () => {
    const message = encodeURIComponent(
      `Hi! I'm ${formData.fullName} interested in applying for the ${formData.position} position. 
      
Experience: ${formData.experience} years
Location: ${formData.location}
Nationality: ${formData.nationality}

${formData.message}

Please let me know about the next steps in the application process.`
    );
    window.open(`https://wa.me/971558700738?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-1xl mx-auto">
              Build a rewarding career with UAE's leading technical services company. We're always looking for skilled professionals to join our growing team.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Apply Options */}
            <div className="space-y-6">
                        <Card className="bg-gradient-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg">Current Urgent Openings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Welders (SMAW/GTAW)</span>
                      <span className="bg-primary-foreground/20 px-2 py-1 rounded">5+ positions</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Civil Engineers</span>
                      <span className="bg-primary-foreground/20 px-2 py-1 rounded">3+ positions</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Electrical Technicians</span>
                      <span className="bg-primary-foreground/20 px-2 py-1 rounded">4+ positions</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Site Supervisors</span>
                      <span className="bg-primary-foreground/20 px-2 py-1 rounded">2+ positions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageCircle className="h-5 w-5 text-accent" />
                    Quick Apply via WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Get instant response for urgent hiring opportunities. Send us your details and we'll get back to you immediately.
                  </p>
                  <Button 
                    onClick={handleWhatsAppApply}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Apply via WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Email Application
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Send your CV and cover letter directly to our HR department for detailed review.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 border-primary/20 hover:bg-primary/10"
                    onClick={() => window.open('mailto:careers@shamsulimaratech.com?subject=Job Application')}
                  >
                    <Mail className="h-4 w-4" />
                    info@shamsulimara.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-accent" />
                    Call for Immediate Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with our recruitment team about current openings.
                  </p>
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    +971 558700738
                  </Button>
                </CardContent>
              </Card>

              {/* Current Openings */}
    
            </div>

            {/* Application Form */}
           {/* Application Form */}
           <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Submit Your Application</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below. Clicking submit will open Gmail with your details pre-filled. You can submit Your CV to info@shamsulimara.com.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="nationality">Nationality *</Label>
                        <Input
                          id="nationality"
                          value={formData.nationality}
                          onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                          required
                          className="mt-1"
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
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="position">Position Applying For *</Label>
                        <Select value={formData.position} onValueChange={(value) => setFormData({ ...formData, position: value })}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            {positions.map((position) => (
                              <SelectItem key={position} value={position}>
                                {position}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="2-3">2-3 years</SelectItem>
                            <SelectItem value="4-5">4-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location">Current Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g., Dubai, UAE"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Cover Letter / Additional Information</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your relevant experience, skills, and why you'd like to join our team..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-primary hover:opacity-90 gap-2 py-6"
                      >
                        <Send className="h-4 w-4" />
                        {isSubmitting ? "Opening Gmail..." : "Submit Application"}
                      </Button>
                      <Button 
                        type="button"
                        variant="outline" 
                        onClick={handleWhatsAppApply}
                        className="gap-2 py-6 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Quick Apply via WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobApplication;