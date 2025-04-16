
import React, { useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroElements = document.querySelectorAll('.parallax');
      
      heroElements.forEach((elem) => {
        const element = elem as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0');
        const yPos = scrollPosition * speed;
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 mt-10 md:mt-0">
        <motion.div 
          className="text-center max-w-4xl mx-auto reveal-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-gradient"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Revolutionize Your Manufacturing Process
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-semibold text-primary">Instant Quotes</span> | 
            <span className="font-semibold text-primary"> Fast Delivery</span> | 
            <span className="font-semibold text-primary"> Guaranteed Quality</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button 
              onClick={scrollToContact} 
              className="button-primary group text-lg glow-effect"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 20px 5px rgba(239, 68, 68, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Instant Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 20px 5px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <RouterLink to="/how-it-works" className="button-outline text-lg">
                How It Works
              </RouterLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 right-32 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-md"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-32 w-24 h-24 rounded-md rotate-45 bg-accent/10 backdrop-blur-md"
        animate={{
          rotate: [45, 55, 45, 35, 45],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }} 
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" as const,
        }}
      >
        <ChevronDown className="text-foreground/50 w-8 h-8" />
      </motion.div>
    </div>
  );
};

export default Hero;
