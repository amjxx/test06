import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

// 🖼️ Import your images (replace these with your actual files)
import heroImage1 from "@/assets/banner2.jpg";
import heroImage2 from "@/assets/banner1.jpg";
import heroImage3 from "@/assets/banner3.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // 🌀 Image array
  const images = [heroImage1, heroImage2, heroImage3];

  // ⏱️ Auto change background every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to request a quote for your technical services."
    );
    window.open(`https://wa.me/971558700738?text=${message}`, "_blank");
  };

  const handleQuoteRequest = () => {
    document
      .getElementById("quote-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes smoothZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        
        .zoom-animation {
          animation: smoothZoom 10s ease-out forwards;
        }
      `}</style>
      
      <section className="relative h-[420px] sm:h-[500px] md:h-[550px] flex items-center justify-center overflow-hidden">
        {/* 🖼️ Background Images with Smooth Zoom + Fade Transition */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Hero background ${index + 1}`}
                className={`w-full h-full object-cover ${
                  index === currentImage ? "zoom-animation" : ""
                }`}
                style={{
                  animation: index === currentImage ? 'smoothZoom 10s ease-out forwards' : 'none'
                }}
              />
              
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-secondary/70 to-transparent" />
        </div>

        {/* ✨ Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 py-10 sm:py-14 md:py-20">
          <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-secondary-foreground mb-4 sm:mb-6 animate-fade-in">
              Shamsul Imara
              <span className="block text-accent text-lg sm:text-2xl md:text-4xl font-medium">
                Solutions Across UAE
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-secondary-foreground/90 mb-4 sm:mb-6 animate-slide-up">
              Shamsul Imara Technical Services Provides Skilled Workfroce solutions, Interior
              Works, and Contracting Services for the Construction, Oil & Gas, and
              Process Industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-scale-in">
              {/* ✅ Request a Quote Button */}
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 gap-3 shadow-hero"
              >
                <a href="mailto:info@shamsulimara.com?subject=Quote%20Request&body=Hello%2C%20I%20would%20like%20to%20request%20a%20quote.">
                  Request a Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>

              {/* ✅ WhatsApp Button */}
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* ⬇️ Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-secondary-foreground/40 rounded-full flex justify-center">
            <div className="w-1 h-2.5 sm:h-3 bg-secondary-foreground/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;