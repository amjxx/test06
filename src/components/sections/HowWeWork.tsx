import { Card, CardContent } from "@/components/ui/card";
import electricalWork from "@/assets/electrical-work.jpg";
import kitchenEquipment from "@/assets/kitchen-equipment.jpg";
import engineeringWorks from "@/assets/engineering-works.jpg";
import steelStructure from "@/assets/steel-structure.jpg";
import manpowerImage from "@/assets/workforce.jpg";
import contractingImage from "@/assets/contract.jpg";
import civilImage from "@/assets/civil.jpg";
import oilGasImage from "@/assets/oil-gas.jpg";
import constructionImage from "@/assets/construction.jpg";
import finishingImage from "@/assets/decoration.jpg";

const services = [
  {
    id: 1,
    title: "Electrical & Plumbing Work",
    image: electricalWork,
    alt: "Professional electrical and plumbing services",
    description: "Expert electrical wiring, lighting, maintenance, and plumbing installations for residential, commercial, and industrial projects. Our certified technicians ensure all work meets safety standards and building codes. We provide comprehensive solutions from initial planning to final installation, including circuit design, panel upgrades, lighting systems, water supply networks, drainage systems, and emergency repairs. With years of experience, we deliver reliable, efficient, and cost-effective electrical and plumbing services that stand the test of time."
  },
  {
    id: 2,
    title: "Kitchen Equipment",
    image: kitchenEquipment,
    alt: "Modern kitchen equipment installation",
    description: "Supply and installation of high-quality kitchen equipment, ensuring durability, safety, and efficiency for hotels, restaurants, and catering services. We specialize in commercial-grade appliances including cooking ranges, ovens, refrigeration units, dishwashers, food preparation stations, and ventilation systems. Our team handles everything from layout design and equipment selection to installation, testing, and staff training. We work with leading manufacturers to provide equipment that maximizes productivity while minimizing energy consumption and maintenance costs."
  },
  {
    id: 3,
    title: "Engineering Works",
    image: engineeringWorks,
    alt: "Professional engineering and design services",
    description: "Comprehensive engineering solutions including design, drafting, fabrication, and project execution tailored to client requirements. Our multidisciplinary team offers mechanical, civil, and structural engineering services for diverse industries. We utilize advanced CAD software and engineering tools to create precise technical drawings and 3D models. From concept development through construction supervision, we ensure projects are completed on time, within budget, and to the highest quality standards. Our expertise spans industrial plants, infrastructure projects, and custom-engineered solutions."
  },
  {
    id: 4,
    title: "All Type Steel Structure Works",
    image: steelStructure,
    alt: "Steel structure construction and fabrication",
    description: "Fabrication and erection of steel structures such as warehouses, sheds, mezzanines, and customized industrial steel solutions. We provide end-to-end steel fabrication services including structural design, material procurement, shop fabrication, surface treatment, and on-site installation. Our state-of-the-art facility is equipped with modern cutting, welding, and assembly equipment to handle projects of any scale. We ensure all structures meet load-bearing requirements and safety regulations while offering flexibility for future modifications and expansions."
  },
  {
    id: 5,
    title: "Workforce Solutions",
    image: manpowerImage,
    alt: "Steel structure construction and fabrication",
    description: "We provide a highly skilled and experienced workforce to meet the complete requirements of your projects. Our team includes qualified technicians, engineers, welders, electricians, masons, carpenters, scaffolders, riggers, and painters who are trained to deliver precision, safety, and quality workmanship. Each member of our workforce is equipped with the technical expertise and practical experience required to execute tasks efficiently across industrial, commercial, and residential projects, ensuring timely completion and adherence to the highest industry standards."
  },
  {
    id: 6,
    title: "Contracting & Interiors",
    image: contractingImage,
    alt: "Professional interior contracting and fit-out services",
    description: "We offer complete contracting and interior fit-out solutions that combine functionality with elegant design. Our services include professional joinery, gypsum ceilings, wall partitions, decorative painting, and full turnkey interior works for both commercial and residential projects. From concept to completion, our skilled team ensures precision craftsmanship, timely delivery, and quality finishes. We collaborate closely with clients to transform their spaces into aesthetically pleasing, efficient, and long-lasting environments that reflect their vision and standards."
  },
  {
    id: 7,
    title: "Civil & Mechanical Services",
    image: civilImage,
    alt: "Comprehensive civil and mechanical construction services",
    description: "We provide a wide range of civil and mechanical services covering block and plastering, steel fabrication, tile installation, and concrete works. Our mechanical division delivers complete support systems, including piping, equipment installation, and structural maintenance. With a team of skilled professionals and advanced tools, we execute projects with accuracy, safety, and efficiency. Every task is performed according to strict quality standards, ensuring durable structures and reliable mechanical performance for industrial, commercial, and residential developments."
  },
  {
    id: 8,
    title: "Construction Support",
    image: constructionImage,
    alt: "End-to-end construction management and support services",
    description: "Our construction support division provides complete assistance for all project stages, including site supervision, project management, quality control, and skilled manpower deployment. We work alongside contractors and developers to ensure timely execution, adherence to safety protocols, and cost efficiency. Our experienced team integrates technical expertise with practical field knowledge to optimize workflow, resource management, and coordination, guaranteeing that every construction phase meets the highest standards of quality and operational excellence."
  },
  {
    id: 9,
    title: "Finishing & Decoration",
    image: finishingImage,
    alt: "Professional finishing and decorative solutions for all project types",
    description: "We specialize in high-quality finishing and decorative works that enhance the look and feel of every space. Our services include painting, wall treatments, flooring, ceiling finishes, and decorative installations tailored to both modern and traditional styles. With a keen eye for detail and artistic precision, our craftsmen deliver seamless results that elevate the aesthetic value and functionality of any project. We focus on quality materials, durable finishes, and client satisfaction through every stage of design and execution."
  }
  
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-subtle pl-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="text-sm text-muted-foreground mb-2 tracking-wider uppercase">
            Experience
          </div>
          <h2 className="text-4xl md:text-4l font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-1xl">
            We have a team of skilled and experienced professionals dedicated to meeting our customers' needs.
            Our expertise allows us to deliver high-quality, reliable services that set industry standards.
            We focus on efficiency, precision, and attention to detail in every project.
            By consistently exceeding expectations, we build trust and long-lasting client relationships.
            This commitment to excellence keeps us at the forefront of the market.
          </p>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 bg-card"
            >
              <CardContent className="p-0">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2 overflow-hidden pt-9">
  <img
    src={service.image}
    alt={service.alt}
    className="w-[550px] h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

                  
                  {/* Description Section */}
                  <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;