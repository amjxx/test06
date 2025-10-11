import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import officeImage from "@/assets/professional-service-person.jpg";

const CompanyStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-20 ">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story Content */}
          <div className="space-y-6">
          <div>
  <h2 className="text-4xl md:text-4xl font-bold text-foreground mb-6">
    About Us
  </h2>
  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
    
  <p className="text-align:justify">

      With over a decade of experience, <strong className="text-foreground">Shamsul Imara Technical Services (SITS)</strong> has grown from a small workforce solution into one of the   UAE's most trusted technical service providers. Our journey began with a simple vision: to bridge the gap between skilled professionals and industry needs.
    </p>
    <p className="text-align:justify">

      Today, we proudly serve clients across all Emirates, providing skilled workforce solution and delivering successful projects across diverse sectors. Our commitment to excellence, safety compliance, and client satisfaction has made us the preferred partner for leading companies throughout the UAE. We don't just provide services – we build lasting partnerships. Backed by years of expertise and a deep understanding of UAE market dynamics,<strong className="text-foreground"> we specialize in:</strong>
    </p>
  </div>
</div>


            {/* Services List */}
            <div className="space-y-3 px-12">
    
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-3">

                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>


                  <span className="text-muted-foreground">Workforce Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>

                  <span className="text-muted-foreground">Plumbing & Sanitary Installation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Painting Contracting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">False Ceiling & Light Partitions Installation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Carpentry & Wood Flooring Works</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Air-Conditioning, Ventilation & Air Filtration Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Electrical Fittings & Fixtures Repairing & Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Electromechanical Equipment Installation & Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Plaster Works</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Floor & Wall Tiling Works</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Sanitary Installation & Pipe Repairs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Wallpaper Fixing Works</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">… and many more technical services tailored to client needs</span>
                </div>
              </div>
            </div>

            {/* Additional Content */}
            <div className="space-y-3">
              <div className="text-base text-muted-foreground leading-relaxed">
                <p>
                  At <strong className="text-foreground">Shamsul Imara Technical Services (SITS)</strong>, every solution is designed to meet the unique requirements of each facility and environment. Customer satisfaction defines our success, and we are proud to have executed numerous projects with complete client satisfaction across the UAE.
                </p>
                <p>
                  As a full-service provider, we deliver comprehensive workforce solution and facility management solutions for commercial, industrial, and residential properties. Our team of experienced professionals brings the right knowledge and expertise to ensure unmatched service quality.
                </p>
                <p>
                  Our objective is to meet client requirements with absolute efficiency and cost-effectiveness. Since every facility has different operations and priorities, we customize complete service packages to suit individual needs. From routine maintenance to specialized works, we provide top-quality services that ensure your facility remains safe, secure, and well-maintained.
                </p>
              </div>
            </div>
          </div>

          {/* Office Image */}
          <div className="relative lg:sticky lg:top-9 py-0">
  <img 
    src={officeImage} 
    alt="Shamsul Imara Technical Services office building" 
    className="rounded-2xl shadow-hero object-cover w-full h-[600px]" 
  />
  <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl"></div>
</div>


        </div>

    
      </div>
    </section>
  );
};

export default CompanyStory;