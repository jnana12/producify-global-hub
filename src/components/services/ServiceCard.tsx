
import React, { useRef, useEffect } from "react";
import { Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  leadTime: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  leadTime, 
  icon, 
  index 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="service-card animate-on-scroll relative flex flex-col"
    >
      <div className="flex items-center mb-6">
        <div className="bg-primary/10 p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gradient">{title}</h3>
      </div>
      
      <p className="text-foreground/80 mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex items-center mb-4 text-sm text-foreground/70">
        <Clock className="w-4 h-4 mr-2 text-primary" />
        <span>{leadTime}</span>
      </div>
      
      <Link 
        to={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`} 
        className="button-outline self-start mt-2 group"
      >
        Learn More
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
