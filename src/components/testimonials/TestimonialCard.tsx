
import React from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  quote: string;
  image?: string;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  title, 
  company, 
  quote, 
  image, 
  isActive
}) => {
  return (
    <div className={`
      glass-morphism p-6 rounded-lg transition-all duration-500 opacity-90
      ${isActive ? 'scale-100 opacity-100 shadow-lg' : 'scale-90 opacity-60'}
    `}>
      <div className="mb-6">
        <Quote className="text-primary/50 w-10 h-10 mb-2" />
        <p className="text-foreground/90 italic leading-relaxed">{quote}</p>
      </div>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-semibold mr-4">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-foreground/60">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
