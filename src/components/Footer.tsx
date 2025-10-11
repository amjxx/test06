import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SI</span>
              </div>
              <div>
                <div className="font-bold text-lg">Shamsul Imara</div>
                <div className="text-sm text-secondary-foreground/70">Technical Services</div>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Leading UAE provider of skilled Workforce solutions, contracting, interiors, and technical services across construction and industrial sectors.
            </p>
            <Button variant="destructive" className="gap-2 border-secondary-foreground/20 hover:bg-black-foreground/10">
              <Download className="h-4 w-4" />
              Company Profile
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Our Services
              </Link>
              <Link to="/careers" className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Join Our Team
              </Link>
              <Link to="/clients" className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Our Clients
              </Link>
              <Link to="/about" className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2 text-sm">
              <div className="text-secondary-foreground/80">workforce solutions</div>
              <div className="text-secondary-foreground/80">Contracting & Interiors</div>
              <div className="text-secondary-foreground/80">Civil & Mechanical</div>
              <div className="text-secondary-foreground/80">Oil & Gas Support</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm text-secondary-foreground/80">Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-secondary-foreground/80">+971-55 870 0738</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-secondary-foreground/80">info@shamsulimara.com</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3 pt-2">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 border-secondary-foreground/20">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 border-secondary-foreground/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 border-secondary-foreground/20">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6829851535!2d54.947244!3d25.197269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shamsul Imara Technical Services Location"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/70">
              © 2024 Shamsul Imara Technical Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;