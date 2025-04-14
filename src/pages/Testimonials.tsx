
import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Initialize the animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements that should animate on scroll
    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const testimonials = [
    {
      name: "John Smith",
      title: "Design Engineer",
      company: "Innovatech",
      quote: "Digital Manufacturing Hub transformed our approach to prototyping. The instant quotes and quality assurance saved us weeks of work. Their CNC machining service delivered parts with incredible precision that fit perfectly into our assemblies.",
      image: undefined,
    },
    {
      name: "Emily Johnson",
      title: "Procurement Manager",
      company: "GlobalParts",
      quote: "Fast turnaround and exceptional service – our production cycle has never been smoother. The ability to compare quotes from different manufacturers helped us optimize our costs while maintaining quality standards. Highly recommended!",
      image: undefined,
    },
    {
      name: "Michael Lee",
      title: "R&D Lead",
      company: "MakerLabs",
      quote: "The platform's automated processes and reliable quality checks give us the confidence to scale our innovative designs. Their injection molding service allowed us to quickly transition from prototype to production with exceptional surface finish.",
      image: undefined,
    },
    {
      name: "Sarah Rodriguez",
      title: "Product Development Director",
      company: "TechInnovate",
      quote: "Digital Manufacturing Hub has become an extension of our development team. Their 3D printing capabilities allow us to test multiple iterations in days instead of weeks. The quality of their SLS prints is outstanding.",
      image: undefined,
    },
  ];

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextTestimonial();
    }
    if (touchEndX - touchStartX > 50) {
      prevTestimonial();
    }
  };

  // Auto cycle testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent"></div>
            <div className="absolute right-1/4 top-1/3 w-80 h-80 bg-secondary/10 rounded-full filter blur-[90px]"></div>
            <div className="absolute left-1/3 bottom-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-[80px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient animate-on-scroll">
              Client Testimonials
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center mb-10 animate-on-scroll">
              Hear from our satisfied clients – real stories of how our platform accelerated their project timelines and improved production quality.
            </p>
          </div>
        </section>
        
        {/* Testimonials Carousel */}
        <section 
          className="py-12 md:py-16 px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              {/* Desktop Testimonials Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {[
                  (activeIndex - 1 + testimonials.length) % testimonials.length,
                  activeIndex,
                  (activeIndex + 1) % testimonials.length,
                ].map((index) => (
                  <div
                    key={index}
                    className={index === activeIndex ? "col-span-1 transform scale-105 z-10" : "col-span-1"}
                  >
                    <TestimonialCard
                      {...testimonials[index]}
                      isActive={index === activeIndex}
                    />
                  </div>
                ))}
              </div>
              
              {/* Mobile Testimonial */}
              <div className="md:hidden">
                <TestimonialCard
                  {...testimonials[activeIndex]}
                  isActive={true}
                />
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-muted hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeIndex 
                          ? "bg-primary w-6" 
                          : "bg-foreground/30 hover:bg-foreground/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-muted hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Clients */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient animate-on-scroll">
              Trusted by Industry Leaders
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-on-scroll">
              {/* Client logos would go here */}
              {[1, 2, 3, 4].map((index) => (
                <div 
                  key={index} 
                  className="h-16 flex items-center justify-center glass-morphism rounded-lg p-4"
                >
                  <div className="w-full h-full bg-gradient-to-r from-foreground/10 to-foreground/5 rounded flex items-center justify-center text-foreground/30 font-semibold">
                    Client Logo {index}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animate-on-scroll">
              Join Our Satisfied Customers
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-on-scroll">
              Experience the difference our manufacturing platform can make for your business.
            </p>
            <a 
              href="#" 
              className="button-primary inline-flex animate-on-scroll"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
