import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitItemProps {
  title: string;
  description: string;
  details?: string[];
  className?: string;
  style?: React.CSSProperties;
}

export const BenefitItem = ({ title, description, details, className, style }: BenefitItemProps) => {
  return (
    <div className={cn("flex gap-4 group", className)} style={style}>
      <div className="flex-shrink-0 mt-1">
        <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ">
        <Check className="w-4 h-4 text-black  " />
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-base md:text-lg text-professional-gray leading-relaxed">
          {description}
        </p>
        {details && (
          <ul className="space-y-1.5 ml-4 pl-10">
            {details.map((detail, index) => (
              <li key={index} className="text-base md:text-lg text-professional-gray list-disc">
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};