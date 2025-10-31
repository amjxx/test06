import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {Mail, Menu, X, Phone, Globe, } from "lucide-react";
import logoImage from "@/assets/logo.webp";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 h-[130px] bg-background/100 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-0">
        <div className="flex justify-between items-center h-[120px]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="Shamsul Imara Technical Services Logo"
              style={{ height: "95px", width: "350px" }}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 mt-16">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions (Language, Phone, Email) */}
          <div className="hidden lg:flex items-center space-x-4 mt-16">
  <Button variant="outline" size="sm" className="gap-2">
    <Globe className="h-4 w-4" />
    EN
  </Button>

  {/* ✅ Combined rectangle for phone + email */}
  <div className="flex items-center justify-center bg-secondary text-white px-4 py-2 rounded-r-2xl hover:opacity-90 cursor-pointer">
  <Phone className="h-4 w-4 mr-2" />
  <span className="mr-4">971 55 8700738</span>
  <span className="border-l border-white h-4 mx-3"></span>
  <Mail className="h-4 w-4 mr-2" />
  <span>info@shamsulimara.com</span>
</div>
</div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 px-4 text-base font-medium transition-colors hover:bg-muted ${
                    isActive(item.path)
                      ? "text-primary bg-muted"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <Button variant="outline" className="w-full gap-2">
                  <Globe className="h-4 w-4" />
                  العربية
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  +971558700738
                </Button>
                <Button className="w-full bg-gradient-primary">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
