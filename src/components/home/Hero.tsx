
import React, { useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

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
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent"></div>
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] parallax" data-speed="-0.2"></div>
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-[80px] parallax" data-speed="0.3"></div>
        <div className="absolute left-0 top-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-[90px] parallax" data-speed="-0.1"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 mt-10 md:mt-0">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-gradient animate-fade-in">
            Revolutionize Your Manufacturing Process
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <span className="font-semibold text-primary">Instant Quotes</span> | 
            <span className="font-semibold text-primary"> Fast Delivery</span> | 
            <span className="font-semibold text-primary"> Guaranteed Quality</span>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <button 
              onClick={scrollToContact} 
              className="button-primary group text-lg"
            >
              Get Instant Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <RouterLink to="/how-it-works" className="button-outline text-lg">
              How It Works
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-foreground/50 w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;
