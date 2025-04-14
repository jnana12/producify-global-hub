
import React, { useRef, useEffect } from "react";

interface ProcessStepProps {
  step: number;
  heading: string;
  content: string;
  icon: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, heading, content, icon }) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, step * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [step]);

  return (
    <div ref={stepRef} className="animate-on-scroll relative">
      {/* Step number with line connecting to next step */}
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg">
          {step}
        </div>
        <div className="ml-4 text-xl font-semibold text-gradient-secondary">{heading}</div>
      </div>
      
      <div className="ml-6 pl-10 border-l-2 border-primary/30 pb-12 relative">
        <div className="absolute left-[-28px] top-0 p-3 bg-muted rounded-lg">
          {icon}
        </div>
        <p className="text-foreground/80">{content}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
