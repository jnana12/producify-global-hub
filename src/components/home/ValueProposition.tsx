
import React, { useEffect, useRef } from "react";
import { Zap, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

const ValueProposition: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      title: "Rapid Prototyping",
      description: "Submit your CAD files and get parts produced in as little as 3 days.",
      icon: <Zap className="w-12 h-12 text-primary" />,
    },
    {
      title: "Automated Quality Assurance",
      description: "Our dual check system ensures every part meets rigorous standards before shipment.",
      icon: <Shield className="w-12 h-12 text-primary" />,
    },
    {
      title: "Global Supplier Network",
      description: "Access a network of pre-vetted manufacturers around the world for optimal pricing and capacity.",
      icon: <Globe className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding glass-morphism relative z-10" id="value-proposition">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-on-scroll">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="service-card animate-on-scroll"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px -10px rgba(239, 68, 68, 0.4)" 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div 
                className="mb-6 flex justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse" as const 
                }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-gradient">
                {value.title}
              </h3>
              <p className="text-foreground/80 text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 md:mt-20 max-w-3xl mx-auto text-center animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our digital manufacturing platform streamlines your production process from quote to delivery. We help engineers and procurement teams cut through inefficiencies, reduce lead times, and bring ideas to life faster than ever before. Whether it's a one-off prototype or a low-volume production run, our end-to-end solution simplifies every step.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
