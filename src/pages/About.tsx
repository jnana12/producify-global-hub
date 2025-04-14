
import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TeamMember from "../components/about/TeamMember";
import { Badge, CheckCircle } from "lucide-react";

const About: React.FC = () => {
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

  const teamMembers = [
    {
      name: "Sam Al-Mukhtar",
      role: "Co-Founder & CEO",
      bio: "A seasoned mechanical engineer who faced firsthand the inefficiencies in the manufacturing industry. Sam's vision is to create a seamless, technology-driven manufacturing process.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Will Hoyer Millar",
      role: "Co-Founder & Marketplace Strategist",
      bio: "With a background in marketplace entrepreneurship, Will brings a strategic approach to bridging the gap between engineers and manufacturers.",
      social: {
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Emma Rodriguez",
      role: "Chief Technology Officer",
      bio: "With 15 years of experience in developing manufacturing software, Emma leads our engineering team in creating innovative solutions for complex production challenges.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "David Chen",
      role: "Head of Manufacturing Networks",
      bio: "David's expertise in global manufacturing logistics ensures our platform connects with the most reliable and innovative production facilities worldwide.",
      social: {
        linkedin: "https://linkedin.com",
      },
    },
  ];

  const certificates = [
    { name: "ISO9001", icon: <Badge className="w-10 h-10 text-primary" /> },
    { name: "ISO14001", icon: <Badge className="w-10 h-10 text-primary" /> },
    { name: "AS9100", icon: <Badge className="w-10 h-10 text-primary" /> },
    { name: "ISO13485", icon: <Badge className="w-10 h-10 text-primary" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent"></div>
            <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-secondary/10 rounded-full filter blur-[120px]"></div>
            <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-[100px]"></div>
            <div className="absolute left-0 top-1/4 w-72 h-72 bg-accent/5 rounded-full filter blur-[90px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient animate-on-scroll">
              About Us
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-center mb-10 animate-on-scroll">
              Learn about our mission to revolutionize manufacturing and the team that's making it happen.
            </p>
          </div>
        </section>
        
        {/* Company Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient animate-on-scroll">
              Our Mission
            </h2>
            
            <div className="glass-morphism p-8 rounded-lg animate-on-scroll">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                At Digital Manufacturing Hub, we are dedicated to revolutionizing the way parts are manufactured. Born out of the need to streamline the production process, our platform connects design engineers with a global network of trusted manufacturers.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                We believe in innovation, precision, and service excellence to enable faster product development and more sustainable manufacturing practices. Our team combines expertise in mechanical engineering, software development, and manufacturing logistics to create a truly end-to-end solution.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Since our founding in 2023, we've helped over 500 companies reduce their time-to-market by an average of 37%, while maintaining rigorous quality standards across all manufacturing processes.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
              <div className="glass-morphism p-6 rounded-lg text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
                <p className="text-foreground/70">Companies Served</p>
              </div>
              <div className="glass-morphism p-6 rounded-lg text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24,000+</div>
                <p className="text-foreground/70">Parts Manufactured</p>
              </div>
              <div className="glass-morphism p-6 rounded-lg text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">37%</div>
                <p className="text-foreground/70">Avg. Time Savings</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Meet the Team */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient animate-on-scroll">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  social={member.social}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Partners & Certifications */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient animate-on-scroll">
              Trusted Partners & Certifications
            </h2>
            
            <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto mb-12 animate-on-scroll">
              Our platform is built on partnerships with leading manufacturers worldwide. We proudly display certifications that guarantee quality and reliability.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto animate-on-scroll">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="glass-morphism p-6 rounded-lg flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-300"
                >
                  {cert.icon}
                  <h3 className="mt-4 font-semibold text-gradient">{cert.name}</h3>
                  <p className="text-sm text-foreground/60 text-center mt-2">Certified Standard</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 max-w-4xl mx-auto glass-morphism p-6 md:p-8 rounded-lg animate-on-scroll">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gradient">Our Manufacturing Guarantees</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-foreground/70">Every part undergoes rigorous inspection before shipping</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold mb-2">On-Time Delivery</h4>
                    <p className="text-foreground/70">We monitor production to ensure your parts arrive on schedule</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold mb-2">Material Certification</h4>
                    <p className="text-foreground/70">Full traceability of all materials used in production</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold mb-2">Price Match</h4>
                    <p className="text-foreground/70">We'll match any competitor's price for equivalent quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
