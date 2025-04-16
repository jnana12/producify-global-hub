
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTemplate from "../../../components/layout/PageTemplate";
import { Zap, ArrowRight, Sparkles, Box, Layers, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SLS: React.FC = () => {
  const partners = Array(6).fill("Manufacturing partner network for 3D printing");
  
  // Animation observer for scroll animations
  const animatedElementsRef = useRef<HTMLDivElement>(null);
  
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

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const capabilities = {
    tolerances: "± 0.3% with a lower limit of ± 0.3 mm",
    layerHeight: "100 μm (0.1 mm)",
    maxBuildSize: "395 x 500 x 395 mm",
    minFeatureSize: "0.5 mm",
    standardLeadTime: "From three business days"
  };
  
  const benefits = [
    {
      icon: <Box className="w-6 h-6 text-primary" />,
      title: "Rapid turnaround",
      description: "Our streamlined order process allows you to receive a quote instantly or within one business day, and SLS 3D printed parts are delivered in as little as three working days."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "State-of-the-art technology",
      description: "All of our partners' SLS 3D printing technologies are the most up-to-date in the industry, ensuring that you always benefit from the latest innovations in selected laser sintering services."
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Unmatched scalability",
      description: "With our network of over 260 manufacturers offering SLS 3D printing services, you can rest assured that there is always capacity for both prototyping and large-scale production."
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      title: "A wide range of industries",
      description: "Our SLS 3D printing services creates parts that meet the high quality demands of numerous industries; from mission-critical aerospace parts to medical components."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "High-quality materials",
      description: "Geomiq's SLS 3D printing services provide industrial-grade, high-quality engineering material options, ensuring you have the perfect material for your application"
    }
  ];
  
  const processSteps = [
    {
      icon: <Box className="w-6 h-6 text-primary" />,
      title: "Get a quote",
      description: "Upload your CAD model to our platform, select your lead time, and get an instant or 24-hour SLS 3D printing quote."
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      title: "Production",
      description: "We select the most suited manufacturer for your order, with production starting immediately"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Quality control",
      description: "We guarantee your order arrives to specification with our industry-leading virtual and physical quality standards."
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Delivery",
      description: "We ship your parts on express services where possible, providing physical delivery notes and inspection reports."
    }
  ];
  
  const featuredSections = [
    {
      image: "portrait-worker-overalls-steel-factory-background 1 (1)",
      title: "Quality assurance at every stage",
      description: "We're committed to providing the best quality assurance in the business. Our highly skilled engineers triple-check all of your files and parts from the initial SLS 3D printing service quote to the final inspection – ensuring that you're happy with your results the first time, every time.",
      cta: "Find out more"
    },
    {
      image: "cad-engineer-working-with-manufacturing-software-develop-industrial-machinery-gears-model-engineering-technical-machine-product-computer-construction-industry-development 1",
      title: "From prototype to production in days",
      description: "At Geomiq, we understand the value of time in your product development, and the speed of our SLS 3D printing service reflects this. When you upload your files, we provide you with a quote instantly or within one business day. Our network of highly experienced partners ensures you receive your parts in as little time as possible.",
      cta: "Upload your parts"
    },
    {
      image: "3D Printing2",
      title: "Leverage the expertise of our global partner network",
      description: "We partner with 260+ highly vetted and experienced manufacturers from 50+ countries so that you can benefit from more options, greater capabilities, and the highest standards in the world. With our SLS 3D printing service, you can rest assured that there's always capacity to handle your project.",
      cta: "Get instant quote"
    }
  ];
  
  const materials = [
    "Flexible TPU",
    "PA 12 Nylon - Black",
    "PA 12 Nylon - White",
    "PEBA 2301 - Black",
    "PEBA 2301 - White",
    "Polypropylene"
  ];
  
  const finishingOptions = [
    {
      title: "As-printed",
      description: "The part is de-powdered and cleaned via air blasting, leaving a natural grainy texture. Depending on the material used, the finished product is typically white or black."
    },
    {
      title: "Short peening",
      description: "The part is blasted with small spherical media, such as glass or plastic beads, at controlled velocities. The impact creates beneficial compressive stresses in the part and smooths the surface, enhancing mechanical properties and improving the finish."
    },
    {
      title: "Vibro polishing",
      description: "Finished parts are placed in a vibrating container filled with polishing media, such as ceramic or plastic beads. The continuous vibration causes the media to gently abrade the parts' surfaces, gradually reducing surface roughness and improving finish quality."
    },
    {
      title: "Dyeing",
      description: "Parts are dyed by immersion in a warm color bath. The dye penetrates the part's surface to a depth of 0.25 mm to 0.5 mm. Available colours include black, blue, red, green, and yellow."
    },
    {
      title: "Custom",
      description: "You can specify custom finishes such as painting and electroplating. Note that custom finishes require manual review and quoting and may be subject to approval."
    }
  ];
  
  const comparisonTable = [
    {
      technology: "SLS",
      accuracy: "± 0.3% with a lower limit of ± 0.3 mm",
      strengths: "Design flexibility, support not required",
      buildVolume: "395 x 500 x 395 mm",
      layerThickness: "100μm",
      minFeatureSize: "0.762 mm"
    },
    {
      technology: "SLA",
      accuracy: "Standard: ± 0.3% with a lower limit of ± 0.3 mm\nIndustrial: ± 0.2% with a lower limit of ± 0.13 mm",
      strengths: "Smooth surface finish, fine feature details",
      buildVolume: "Standard: 145 × 145 × 175 mm\nIndustrial: 500 x 500 x 500 mm",
      layerThickness: "25-150μm",
      minFeatureSize: "0.2 mm"
    },
    {
      technology: "FDM",
      accuracy: "Standard: ± 0.5% with a lower limit on ± 0.5 mm\nIndustrial: ± 0.3% with a lower limit of ± 0.3 mm",
      strengths: "Low cost, wide range of materials",
      buildVolume: "Standard: 500 x 500 x 500 mm\nIndustrial: 900 x 600 x 900 mm",
      layerThickness: "100-300μm",
      minFeatureSize: "2.0 mm"
    },
    {
      technology: "MJF",
      accuracy: "± 0.3% with a lower limit on ± 0.3 mm",
      strengths: "Design flexibility, support not required",
      buildVolume: "380 x 285 x 380 mm",
      layerThickness: "80μm",
      minFeatureSize: "0.5 mm"
    },
    {
      technology: "DMLS",
      accuracy: "±0.2% with a lower limit on (0.1 – 0.2 mm)",
      strengths: "Engineering-grade metals, numerous post-processing options, complex geometries",
      buildVolume: "400 x 400 x 400 mm",
      layerThickness: "20 – 80 mm depending on the material",
      minFeatureSize: "0.5 mm"
    }
  ];
  
  const gallery = [
    { name: "PA12 - No Finish Brilliant White", image: "PA12 - No Finish Brilliant White" },
    { name: "PA12 - No Finish Brilliant White", image: "PA12 - No Finish Brilliant White" },
    { name: "Formlabs Flexible Resin 80A - Silicone-like", image: "Formlabs Flexible Resin 80A - Silicone-like" },
    { name: "Standard Resin - Black", image: "Standard Resin - Black" }
  ];

  return (
    <PageTemplate
      title="Selective Laser Sintering (SLS)"
      description="Selective Laser Sintering uses a high-powered laser to fuse small particles of polymer powder into a solid structure, producing durable parts with complex geometries without support structures."
    >
      <div className="max-w-4xl mx-auto" ref={animatedElementsRef}>
        {/* Trusted By Section */}
        <motion.section 
          className="mb-16 fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-gradient">Trusted by</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 stagger-animation">
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="bg-muted/30 p-6 rounded-lg flex items-center justify-center hover-scale pulse-glow"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-center text-sm text-foreground/70">{partner}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What is SLS 3D printing? */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-morphism p-6 rounded-lg card-3d-effect">
            <h2 className="text-3xl font-bold mb-4 text-gradient">What is SLS 3D printing?</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Selective Laser Sintering (SLS) is a powder bed fusion 3D printing technology that prints high-quality parts from atomised raw material plastic powder. In SLS 3D printing, a laser selectively fuses powdered material layer by layer until the whole part forms. SLS produces highly durable and complex plastic parts without needing support structures, making it ideal for both functional prototyping and small production runs in numerous industries.
            </p>
          </div>
        </motion.section>
        
        {/* Order high-quality SLS 3D printed parts online */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Order high-quality SLS 3D printed parts online</h2>
          <p className="text-lg mb-8 text-foreground/80">
            At Geomiq, we're proud to partner with 260+ experienced and thoroughly vetted selective laser sintering service providers with a proven track record of making high-quality, high-precision SLS 3D printed parts for customers all over the globe. With our partners' expertise, access to 120+ of the latest SLS 3D printers, our engineers' attention to detail, and our entire team's commitment to exceptional quality assurance at every stage, you can rest assured that with Geomiq, you'll receive only the best SLS 3D printed parts – the first time, every time.
          </p>
          
          <div className="flex items-center justify-between bg-muted/30 p-6 rounded-lg hover-scale pulse-glow">
            <div className="flex-1">
              <h3 className="font-bold mb-2">High quality printed part</h3>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/upload-file" className="button-primary">
                Get instant quote
              </Link>
            </motion.div>
          </div>
        </motion.section>
        
        {/* SLS 3D printer capabilities */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">SLS 3D printer capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
            <Card className="glass-morphism hover-scale feature-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Tolerances</h3>
                <p className="text-foreground/80 text-sm whitespace-pre-line">{capabilities.tolerances}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism hover-scale feature-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Layer height</h3>
                <p className="text-foreground/80 text-sm whitespace-pre-line">{capabilities.layerHeight}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism hover-scale feature-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Max. build size</h3>
                <p className="text-foreground/80 text-sm whitespace-pre-line">{capabilities.maxBuildSize}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism hover-scale feature-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Min. feature size</h3>
                <p className="text-foreground/80 text-sm">{capabilities.minFeatureSize}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism hover-scale feature-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Standard lead time</h3>
                <p className="text-foreground/80 text-sm">{capabilities.standardLeadTime}</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>
        
        {/* Why choose the SLS 3D printing service from Geomiq? */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">Why choose the SLS 3D printing service from Geomiq?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-animation">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="glass-morphism h-full feature-card">
                  <CardContent className="p-6 space-y-3">
                    <div className="bg-primary/10 p-2 rounded-lg inline-block mb-1 pulse-glow">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-lg">{benefit.title}</h3>
                    <p className="text-foreground/80 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Our SLS 3D printing process */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">Our SLS 3D printing process:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="glass-morphism overflow-hidden h-full hover-scale feature-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mb-2 pulse-glow float-animation">
                      <span className="font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-foreground/80 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Featured Sections */}
        <section className="mb-16 space-y-8 animate-on-scroll">
          {featuredSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism overflow-hidden hover-scale">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gradient">{section.title}</h3>
                  <p className="text-foreground/80">{section.description}</p>
                  <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link to="/upload-file" className="flex items-center text-primary hover:underline">
                      {section.cta}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>
        
        {/* Get instant quote */}
        <motion.section 
          className="mb-16 text-center animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/upload-file" className="button-primary inline-flex items-center gap-2 text-lg gradient-background">
              Get instant quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="mt-2 text-sm text-foreground/60">All uploads are secure and confidential.</p>
        </motion.section>
        
        {/* SLS 3D printing materials */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">SLS 3D printing materials</h2>
          
          <div className="flex flex-wrap gap-2 stagger-animation">
            {materials.map((material, index) => (
              <motion.span 
                key={index} 
                className="px-3 py-1 rounded-full bg-muted text-sm badge-glow hover-scale pulse-glow"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(14, 165, 233, 0.2)"
                }}
              >
                {material}
              </motion.span>
            ))}
          </div>
        </motion.section>
        
        {/* SLS 3D printing finishing options */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">SLS 3D printing finishing options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-animation">
            {finishingOptions.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Card className="glass-morphism h-full feature-card">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-bold text-lg">{option.title}</h3>
                    <p className="text-foreground/80 text-sm">{option.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Benefits and limitations */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">Benefits and limitations of SLS 3D printing service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="glass-morphism h-full feature-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Benefits:</h3>
                  <ul className="list-disc ml-5 space-y-2 text-foreground/80">
                    <li>Produces parts with good mechanical properties.</li>
                    <li>Does not require support structures during printing</li>
                    <li>Fast printing process for functional, durable prototypes or end-use parts</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="glass-morphism h-full feature-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Limitations:</h3>
                  <ul className="list-disc ml-5 space-y-2 text-foreground/80">
                    <li>Limited material choice</li>
                    <li>Produces a relatively rough grainy surface finish</li>
                    <li>Large, thin features are susceptible to warping</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Comparison Table */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">SLS 3D printing service compared to other 3D printing technologies</h2>
          
          <div className="overflow-x-auto">
            <motion.table 
              className="min-w-full bg-muted/30 rounded-lg"
              whileHover={{ boxShadow: "0 0 20px rgba(14, 165, 233, 0.15)" }}
            >
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left">Dimensional accuracy</th>
                  <th className="px-4 py-3 text-left">Strengths</th>
                  <th className="px-4 py-3 text-left">Build volume</th>
                  <th className="px-4 py-3 text-left">Layer thickness</th>
                  <th className="px-4 py-3 text-left">Min. feature size</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((tech, index) => (
                  <motion.tr 
                    key={index} 
                    className="border-b border-border"
                    whileHover={{ backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                  >
                    <td className="px-4 py-3 font-medium whitespace-pre-line">{tech.accuracy}</td>
                    <td className="px-4 py-3">{tech.strengths}</td>
                    <td className="px-4 py-3 whitespace-pre-line">{tech.buildVolume}</td>
                    <td className="px-4 py-3">{tech.layerThickness}</td>
                    <td className="px-4 py-3">{tech.minFeatureSize}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </motion.section>
        
        {/* Our SLS 3D printing gallery */}
        <motion.section 
          className="mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">Our SLS 3D printing gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-animation">
            {gallery.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-muted/30 p-4 rounded-lg flex flex-col items-center justify-center aspect-square hover-scale feature-card"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -5px rgba(14, 165, 233, 0.2)"
                }}
              >
                <p className="text-center font-medium mb-2">{item.name}</p>
                <p className="text-center text-sm text-foreground/70">{item.image}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Final Get instant quote */}
        <motion.section 
          className="mb-16 text-center animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/upload-file" className="button-primary inline-flex items-center gap-2 text-lg gradient-background">
              Get instant quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="mt-2 text-sm text-foreground/60">All uploads are secure and confidential.</p>
        </motion.section>
      </div>
    </PageTemplate>
  );
};

export default SLS;
