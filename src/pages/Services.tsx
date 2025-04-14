
import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ServiceCard from "../components/services/ServiceCard";
import { Cog, Box, Printer, Layers } from "lucide-react";

const Services: React.FC = () => {
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

  const services = [
    {
      title: "Precision CNC Machining",
      description: "Our state-of-the-art CNC machines produce parts with tolerances as tight as ±0.001mm. Choose from over 120 materials and 30+ surface finishes to achieve your desired quality.",
      leadTime: "Delivery as fast as 5 days",
      icon: <Cog className="w-6 h-6 text-primary" />,
    },
    {
      title: "Rapid Injection Moulding",
      description: "From low-volume runs to serial production, our injection moulding service offers fast turnaround times and excellent repeatability. We provide T1 samples in as little as 8 days with a variety of material options.",
      leadTime: "Samples within 8 days – production soon after",
      icon: <Box className="w-6 h-6 text-primary" />,
    },
    {
      title: "Advanced 3D Printing",
      description: "With multiple printing technologies (SLA, FDM, SLS, MJF, etc.), we bring your designs to life with an extensive selection of plastics, metals, and colors. Ideal for both prototypes and production parts.",
      leadTime: "Parts in as little as 3 days",
      icon: <Printer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Quality Sheet Metal Fabrication",
      description: "Our sheet metal fabrication service covers laser cutting, bending, assembling, and finishing options for various metals. We ensure precision and durability at every step.",
      leadTime: "Delivery in as little as 8 days",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent"></div>
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
            <div className="absolute left-1/3 bottom-1/3 w-80 h-80 bg-secondary/10 rounded-full filter blur-[90px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient animate-on-scroll">
              Our Services
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center mb-10 animate-on-scroll">
              Explore our comprehensive suite of on-demand manufacturing services tailored to meet your design and production challenges. We specialize in providing rapid, high-quality manufacturing solutions across multiple technologies.
            </p>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  leadTime={service.leadTime}
                  icon={service.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animate-on-scroll">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-on-scroll">
              Upload your CAD files today and receive a quote in as little as 24 hours.
              Our team is ready to bring your designs to life.
            </p>
            <a 
              href="#" 
              className="button-primary inline-flex animate-on-scroll"
            >
              Get an Instant Quote
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
