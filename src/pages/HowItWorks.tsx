
import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProcessStep from "../components/workflow/ProcessStep";
import { Upload, Calculator, ShoppingCart, Package } from "lucide-react";

const HowItWorks: React.FC = () => {
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

  const steps = [
    {
      heading: "Upload Your Design Files",
      content: "Use our secure online tool to upload your CAD files. We accept formats such as .STEP, .STL, .IGS, .DXF, and more. Our system immediately analyzes your file to match it with the best production method.",
      icon: <Upload className="w-6 h-6 text-primary" />,
    },
    {
      heading: "Receive Your Quote",
      content: "Simple designs receive an instant quote. For more complex parts, our expert team works within 24 hours to provide you with competitive and transparent pricing. You'll receive at least three quotes to choose from.",
      icon: <Calculator className="w-6 h-6 text-primary" />,
    },
    {
      heading: "Order with Confidence",
      content: "Once you're happy with your quote, proceed to order. Choose your preferred payment method – whether by credit card or corporate credit account – and confirm your order with ease.",
      icon: <ShoppingCart className="w-6 h-6 text-primary" />,
    },
    {
      heading: "Quality Delivered",
      content: "Our parts undergo stringent quality control measures, including virtual and in-house checks. Once approved, your parts are shipped globally, ensuring you receive your order in as little as 3–8 days depending on your product and location.",
      icon: <Package className="w-6 h-6 text-primary" />,
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
            <div className="absolute left-0 top-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-[100px]"></div>
            <div className="absolute right-1/4 bottom-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-[80px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient animate-on-scroll">
              How It Works
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center mb-10 animate-on-scroll">
              Our streamlined process takes the hassle out of manufacturing. Follow these simple steps to go from design to delivery with confidence.
            </p>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 md:gap-16">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  step={index + 1}
                  heading={step.heading}
                  content={step.content}
                  icon={step.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Animation Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-[120px] animate-pulse-slow"></div>
            <div className="absolute right-1/3 top-1/4 w-80 h-80 bg-secondary/5 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="glass-morphism p-8 md:p-12 rounded-xl max-w-4xl mx-auto animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Why Our Process Works</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">
                    <span className="font-semibold text-foreground">Automated Analysis:</span> Our system automatically identifies the best manufacturing method for your specific design.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">
                    <span className="font-semibold text-foreground">Multi-Vendor Network:</span> We match your project with the perfect manufacturer from our global network.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">
                    <span className="font-semibold text-foreground">Quality Assurance:</span> Every part undergoes two levels of quality control before shipping.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">
                    <span className="font-semibold text-foreground">Transparent Tracking:</span> Monitor your order from production to delivery with real-time updates.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animate-on-scroll">
              Ready to Experience Our Streamlined Process?
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-on-scroll">
              Start today and see how our efficient workflow can transform your manufacturing experience.
            </p>
            <a 
              href="#" 
              className="button-primary inline-flex animate-on-scroll"
            >
              Upload Your Design
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
