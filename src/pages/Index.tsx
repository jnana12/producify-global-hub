
import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import ValueProposition from "../components/home/ValueProposition";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/contact/ContactForm";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        
        {/* Services Preview */}
        <section className="section-padding bg-gradient-primary">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center animate-on-scroll">Our Services</h2>
            <p className="section-subtitle text-center animate-on-scroll">
              Explore our comprehensive suite of on-demand manufacturing services tailored to
              meet your design and production challenges.
            </p>
            
            <div className="mt-12 text-center animate-on-scroll">
              <Link to="/services" className="button-primary inline-flex group">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* How It Works Preview */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center animate-on-scroll">How It Works</h2>
            <p className="section-subtitle text-center animate-on-scroll">
              Our streamlined process takes the hassle out of manufacturing.
              From design to delivery with confidence.
            </p>
            
            <div className="mt-12 text-center animate-on-scroll">
              <Link to="/how-it-works" className="button-outline inline-flex group">
                Learn Our Process
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section id="contact-section" className="section-padding bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center animate-on-scroll">Get Started Today</h2>
            <p className="section-subtitle text-center animate-on-scroll">
              Ready to transform your manufacturing process? Reach out to us for an instant quote
              or to discuss your project requirements.
            </p>
            
            <div className="max-w-2xl mx-auto mt-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
