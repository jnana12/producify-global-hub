
import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
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
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent"></div>
            <div className="absolute right-1/4 top-1/3 w-72 h-72 bg-secondary/10 rounded-full filter blur-[100px]"></div>
            <div className="absolute left-1/3 bottom-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-[120px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient animate-on-scroll">
              Contact Us
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center mb-10 animate-on-scroll">
              We'd love to hear from you. Whether you have a question about our services or need assistance with your project, we're here to help.
            </p>
          </div>
        </section>
        
        {/* Contact Info & Form */}
        <section className="py-12 px-4" id="contact-section">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="animate-on-scroll">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
                  Get in Touch
                </h2>
                
                <div className="space-y-8">
                  <div className="glass-morphism p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Office Address</h3>
                        <p className="text-foreground/80">
                          45 Vyner Street<br />
                          London, UK
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-morphism p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <p className="text-foreground/80">
                          +44 20 3962 9020
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-morphism p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="text-foreground/80">
                          <a href="mailto:info@dmhub.com" className="hover:text-primary transition-colors">
                            info@dmhub.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 glass-morphism p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-2 text-foreground/80">Monday - Friday</td>
                        <td className="py-2 text-foreground">9:00 AM - 6:00 PM (GMT)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-foreground/80">Saturday</td>
                        <td className="py-2 text-foreground">10:00 AM - 2:00 PM (GMT)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-foreground/80">Sunday</td>
                        <td className="py-2 text-foreground">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="animate-on-scroll">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-morphism p-2 rounded-lg overflow-hidden animate-on-scroll">
              <div className="aspect-w-16 aspect-h-9 w-full h-96 bg-muted">
                {/* Map would go here - using a placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center text-foreground/40">
                  <p className="text-center">
                    Interactive Map<br />
                    <span className="text-sm">(Integration with Google Maps or similar service would go here)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gradient animate-on-scroll">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 animate-on-scroll">
              <div className="glass-morphism p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-gradient">How quickly can I receive my parts?</h3>
                <p className="text-foreground/80">
                  Depending on the manufacturing method, complexity, and quantity, parts can be delivered as quickly as 3 days for 3D printed parts and 5-8 days for CNC machined or injection molded components.
                </p>
              </div>
              
              <div className="glass-morphism p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-gradient">What file formats do you accept?</h3>
                <p className="text-foreground/80">
                  We accept all major CAD formats including .STEP, .STL, .IGS, .SLDPRT, .X_T, .DXF, and many more. If you have a different format, please contact us to discuss compatibility.
                </p>
              </div>
              
              <div className="glass-morphism p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-gradient">Do you offer design assistance?</h3>
                <p className="text-foreground/80">
                  Yes, our team of experienced design engineers can provide DFM (Design for Manufacturing) feedback to optimize your designs for production. For more extensive design services, we offer consulting packages.
                </p>
              </div>
              
              <div className="glass-morphism p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-gradient">What is your quality assurance process?</h3>
                <p className="text-foreground/80">
                  Every part undergoes a dual check system: first, a virtual inspection of the design for manufacturability, and second, a physical inspection post-production to verify dimensions, finish, and functionality before shipping.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
