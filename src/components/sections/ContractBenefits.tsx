import { BenefitItem } from "@/components/BenefitItem";
import professionalPerson from "@/assets/professional-service-person.jpg";
import professionalPerson1 from "@/assets/professional-service-person1.jpg";

const ContractBenefits = () => {
  const benefits = [
    {
      title: "Professional & Reliable Service",
      details: [
        "Guaranteed skilled workforce with proven expertise.",
        "On-time delivery of projects and services.",
        "Transparent agreements that build trust.",
      ],
    },
    {
      title: "Cost Efficiency",
      details: [
        "Fixed contract rates prevent unexpected costs.",
        "Long-term savings through preventive maintenance.",
        "Flexible packages tailored to client needs.",
      ],
    },
    {
      title: "Quality Assurance",
      details: [
        "Adherence to international standards and safety regulations.",
        "Use of high-quality materials and modern techniques.",
        "Regular quality checks to ensure long-lasting results.",
      ],
    },
    {
      title: "Accountability & Legal Protection",
      details: [
        "Clear terms safeguard both client and company.",
        "Legal framework for dispute resolution.",
        "Service warranties and performance guarantees included.",
      ],
    },
    {
      title: "Convenience & Peace of Mind",
      details: [
        "One-stop solution for multiple technical service needs.",
        "Dedicated team available for emergencies.",
        "Hassle-free project management with minimal client involvement.",
      ],
    },
    {
      title: "Long-Term Relationship & Support",
      details: [
        "Priority support for contracted clients.",
        "Regular follow-ups and maintenance services.",
        "Partnership that grows with the client's needs.",
      ],
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Benefits of Contract With Shamsul Imara
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-card border border-muted bg-muted w-full">
              <img
                src={professionalPerson1}
                alt="Professional service person"
                className="w-full h-[800px] object-cove"
              />
            </div>
          </div>

          <div className="space-y-2 order-1 md:order-2">
            {benefits.map((item, idx) => (
              <BenefitItem 
                key={idx} 
                title={item.title} 
                description="" 
                details={item.details} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractBenefits;