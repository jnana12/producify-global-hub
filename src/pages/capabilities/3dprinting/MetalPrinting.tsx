
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTemplate from "../../../components/layout/PageTemplate";
import { Hammer, ArrowRight, Sparkles, Box, Layers, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MetalPrinting: React.FC = () => {
  const partners = Array(6).fill("Manufacturing partner network for 3D printing");
  
  const capabilities = {
    tolerances: "±0.2% with a lower limit of 0.1 – 0.2 mm",
    layerHeight: "20 – 80 μm, depending on the material",
    maxBuildSize: "400 x 400 x 400 mm",
    minFeatureSize: "0.5 mm",
    standardLeadTime: "From seven business days"
  };
  
  const benefits = [
    {
      icon: <Box className="w-6 h-6 text-primary" />,
      title: "Rapid turnaround",
      description: "Our streamlined order process allows you to receive a quote instantly or in under one business day, and DMLS 3D printed parts are delivered in as little as three working days."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "State-of-the-art technology",
      description: "All of our partners' Metal 3D printing technologies are the most up-to-date in the industry, ensuring that you always benefit from the latest innovations in selected laser sintering services."
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Unmatched scalability",
      description: "With our network of over 260 manufacturers offering Metal 3D printing services, you can rest assured that there is always capacity for both prototyping and large-scale production."
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      title: "A wide range of industries",
      description: "Our Metal 3D printing service creates parts that meet the high-quality demands of numerous industries, from mission-critical aerospace parts to medical components."
    },
    {
      icon: <Hammer className="w-6 h-6 text-primary" />,
      title: "High-quality materials",
      description: "Geomiq's DMLS 3D printing services provide industrial-grade, high-quality engineering material options, ensuring you have the perfect material for your application."
    }
  ];
  
  const processSteps = [
    {
      icon: <Box className="w-6 h-6 text-primary" />,
      title: "Get a quote",
      description: "Upload your CAD model to our platform, select your lead time, and get an instant or 24-hour DMLS printing service quote."
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      title: "Production",
      description: "We select the most suited manufacturer for your order, with production starting immediately."
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
      description: "We're committed to providing the best quality assurance in the business. Our highly skilled engineers triple-check all of your files and parts from the initial Metal 3D printing service quote to the final inspection – ensuring that you're happy with your results the first time, every time.",
      cta: "Find out more"
    },
    {
      image: "cad-engineer-working-with-manufacturing-software-develop-industrial-machinery-gears-model-engineering-technical-machine-product-computer-construction-industry-development 1",
      title: "From prototype to production in days",
      description: "At Geomiq, we understand the value of time in your product development, and the speed of our DMLS 3D printing service reflects this. When you upload your files, we provide you with a quote instantly or within one business day. Our network of highly experienced partners ensures you receive your parts in as little time as possible.",
      cta: "Upload your parts"
    },
    {
      image: "3D Printing2",
      title: "Leverage the expertise of our global partner network",
      description: "We partner with 260+ highly vetted and experienced manufacturers from 50+ countries so that you can benefit from more options, greater capabilities, and the highest standards in the world. With our DMLS printing service, you can rest assured that there's always capacity to handle your project.",
      cta: "Get instant quote"
    }
  ];
  
  const materials = [
    "Aluminium Al-Si10Mg",
    "Cobalt Chrome, CoCr",
    "Copper",
    "Inconel 718",
    "Inconel 615",
    "Stainless Steel 316L / 1.44.4 / X2CrNiMo17-12-2",
    "Stainless Steel 17-4PH / 1.4542 / X5CrNiCuNb16-4",
    "Titanium Grade 5 / 3.7164 / 3.7165 / Ti-6Al-4V"
  ];
  
  const finishingOptions = [
    {
      title: "As-printed",
      description: "Part is de-powdered and cleaned, leaving a natural metallic colour, depending on the metal. Smooth surface finish with a slightly grainy texture. No visible layer lines."
    },
    {
      title: "Bead blasting",
      description: "Parts are blasted with fine, abrasive beads, typically made of glass or ceramic,, under high pressure. This process removes surface imperfections, smooths out rough areas, and creates a uniform matte or satin finish."
    },
    {
      title: "Custom",
      description: "You can specify custom finishes such as coating, electroplating, anodising, coating, brightening, etc. Note that custom finishes require manual review and quoting and may be subject to approval."
    }
  ];
  
  const comparisonTable = [
    {
      technology: "DMLS",
      accuracy: "±0.2% with a lower limit on (0.1 – 0.2 mm)",
      strengths: "Engineering-grade metals, numerous post-processing options, complex geometries",
      buildVolume: "400 x 400 x 400 mm",
      layerThickness: "20 – 80 mm depending on the material",
      minFeatureSize: "0.5 mm"
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
    }
  ];
  
  const gallery = [
    { name: "Inconel 718", image: "Inconel 718" },
    { name: "Stainless Steel 316L", image: "Stainless Steel 316L" },
    { name: "Stainless Steel 17-4PH", image: "Stainless Steel 17-4PH" },
    { name: "Titanium Grade 5", image: "Titanium Grade 5" },
    { name: "Stainless Steel 316L", image: "Stainless Steel 316L" },
    { name: "Aluminium Al-Si10Mg", image: "Aluminium Al-Si10Mg" }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Fixed the pulseAnimation variant - changed string to a proper enum value
  const pulseAnimation = {
    initial: { scale: 1 },
    pulse: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" // Fixed: using a valid literal value
      }
    }
  };

  const rotateAnimation = {
    initial: { rotate: 0 },
    rotate: { 
      rotate: 360,
      transition: { 
        duration: 15,
        repeat: Infinity,
        ease: "linear" 
      }
    }
  };

  return (
    <PageTemplate
      title="Metal 3D Printing (DMLS and SLM)"
      description="Our metal 3D printing services use Direct Metal Laser Sintering (DMLS) and Selective Laser Melting (SLM) technologies to produce complex, high-performance metal parts with outstanding mechanical properties."
    >
      <div className="max-w-4xl mx-auto">
        {/* Trusted By Section */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-2xl font-bold text-center mb-8 text-gradient"
            animate={{ 
              textShadow: ["0 0 5px rgba(14, 165, 233, 0)", "0 0 20px rgba(14, 165, 233, 0.5)", "0 0 5px rgba(14, 165, 233, 0)"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Trusted by
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="bg-muted/30 p-6 rounded-lg flex items-center justify-center card-3d-effect hover-scale pulse-glow"
                variants={itemFade}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 25px rgba(14, 165, 233, 0.4)",
                  rotate: index % 2 === 0 ? 2 : -2
                }}
              >
                <p className="text-center text-sm text-foreground/70">{partner}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* What is DMLS 3D printing? */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="glass-morphism p-6 rounded-lg"
            whileHover={{ 
              boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)"
            }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gradient"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              What is DMLS 3D printing?
            </motion.h2>
            <motion.p 
              className="text-lg text-foreground/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Direct Metal Laser Sintering (DMLS) is an advanced metal 3D printing technology that enables the production of high-performance, fully dense metal parts directly from metal powder. In DMLS, a high-powered laser selectively fuses layers of metal powder according to a CAD design, building parts layer by layer with excellent precision. This process allows for the creation of complex geometries and intricate internal structures. DMLS printing service is compatible with aluminum, stainless steel, titanium, and Inconel, making it ideal for applications in aerospace, medical, automotive, and tooling industries. This metal 3D printing service is suitable for producing functional prototypes, specialized components, and low-volume production.
            </motion.p>
          </motion.div>
        </motion.section>
        
        {/* Order high-quality Metal 3D printed parts online */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-gradient"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          >
            Order high-quality Metal 3D printed parts online
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-foreground/80"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            At Geomiq, we're proud to partner with 260+ experienced and highly vetted Direct Metal Laser Sintering service providers with a proven track record of making high-quality, durable metal 3D printed parts for customers all over the globe. With our partners' expertise, access to the latest DMLS 3D printers, our engineers' attention to detail, and our entire team's commitment to exceptional quality assurance at every stage, you can rest assured that with Geomiq, you'll receive only the best DMLS 3D printed parts – the first time, every time.
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-between bg-muted/30 p-6 rounded-lg"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 8px 15px -5px rgba(14, 165, 233, 0.3)",
              background: "linear-gradient(to right, rgba(20, 20, 30, 0.8), rgba(30, 40, 60, 0.8))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex-1">
              <motion.h3 
                className="font-bold mb-2"
                animate={{ 
                  color: ["rgba(14, 165, 233, 1)", "rgba(121, 82, 233, 1)", "rgba(14, 165, 233, 1)"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                DMLS 3D Printing
              </motion.h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/upload-file" className="button-primary gradient-background">
                Get instant quote
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
        
        {/* DMLS 3D printer capabilities */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-6 text-gradient"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          >
            DMLS 3D printer capabilities
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {Object.entries(capabilities).map(([key, value], index) => (
              <motion.div key={index} variants={itemFade}>
                <Card className="glass-morphism h-full feature-card">
                  <CardContent className="p-6">
                    <motion.h3 
                      className="font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </motion.h3>
                    <motion.p 
                      className="text-foreground/80 text-sm whitespace-pre-line"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {value}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        {/* Why choose the Metal 3D printing service from Geomiq? */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-gradient"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 3 }}
          >
            Why choose the Metal 3D printing service from Geomiq?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                variants={itemFade}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3), 0 10px 20px -5px rgba(14, 165, 233, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="glass-morphism h-full shadow-lg">
                  <CardContent className="p-6 space-y-3">
                    <motion.div 
                      className="bg-primary/10 p-3 rounded-full inline-block mb-1"
                      variants={pulseAnimation}
                      initial="initial"
                      animate="pulse"
                    >
                      {benefit.icon}
                    </motion.div>
                    <motion.h3 className="font-bold text-lg">{benefit.title}</motion.h3>
                    <motion.p className="text-foreground/80 text-sm">{benefit.description}</motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        {/* Our DMLS 3D printing service process */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-gradient"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          >
            Our DMLS 3D printing service process:
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={itemFade}>
                <Card className="glass-morphism overflow-hidden h-full">
                  <CardContent className="p-6 space-y-4">
                    <motion.div 
                      className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-2 float-animation"
                      variants={rotateAnimation}
                      initial="initial"
                      animate="rotate"
                    >
                      <span className="font-bold text-primary text-lg">{index + 1}</span>
                    </motion.div>
                    <motion.h3 
                      className="font-bold text-lg"
                      whileHover={{ 
                        color: "rgba(14, 165, 233, 1)",
                        scale: 1.05
                      }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p className="text-foreground/80 text-sm">{step.description}</motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        {/* Featured Sections */}
        <motion.section 
          className="mb-16 space-y-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.7 }}
        >
          {featuredSections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <motion.h3 
                    className="text-2xl font-bold text-gradient"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 8, repeat: Infinity, delay: index }}
                  >
                    {section.title}
                  </motion.h3>
                  <motion.p 
                    className="text-foreground/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {section.description}
                  </motion.p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link to="/upload-file" className="flex items-center text-primary hover:underline group">
                      <span>{section.cta}</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>
        
        {/* Get instant quote */}
        <motion.section 
          className="mb-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/upload-file" className="button-primary inline-flex items-center gap-2 text-lg gradient-background">
              Get instant quote
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
          <motion.p 
            className="mt-2 text-sm text-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            All uploads are secure and confidential.
          </motion.p>
        </motion.section>
        
        {/* DMLS 3D printing materials */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-gradient"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 5 }}
          >
            DMLS 3D printing materials
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {materials.map((material, index) => (
              <motion.span 
                key={index} 
                className="px-4 py-2 rounded-full bg-muted/30 text-sm badge-glow"
                variants={itemFade}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(14, 165, 233, 0.2)",
                  boxShadow: "0 0 15px rgba(14, 165, 233, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {material}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>
        
        {/* DMLS 3D printing finishing options */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 1 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-gradient"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 6 }}
          >
            DMLS 3D printing finishing options
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {finishingOptions.map((option, index) => (
              <motion.div 
                key={index} 
                variants={itemFade}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3), 0 10px 20px -5px rgba(14, 165, 233, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="glass-morphism h-full">
                  <CardContent className="p-6 space-y-2">
                    <motion.h3 
                      className="font-bold text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.2 }}
                    >
                      {option.title}
                    </motion.h3>
                    <motion.p 
                      className="text-foreground/80 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                    >
                      {option.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        {/* Benefits and limitations */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-gradient"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 7 }}
          >
            Benefits and limitations of the DMLS 3D printing service
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3), 0 10px 20px -5px rgba(14, 165, 233, 0.4)"
              }}
            >
              <Card className="glass-morphism">
                <CardContent className="p-6">
                  <motion.h3 
                    className="font-bold text-lg mb-4"
                    animate={{ 
                      color: ["rgba(14, 165, 233, 1)", "rgba(59, 130, 246, 1)", "rgba(14, 165, 233, 1)"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Benefits:
                  </motion.h3>
                  <motion.ul 
                    className="list-disc ml-5 space-y-2 text-foreground/80"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <motion.li variants={itemFade}>Can produce highly complex geometries with fine details</motion.li>
                    <motion.li variants={itemFade}>Prints parts with excellent mechanical properties</motion.li>
                    <motion.li variants={itemFade}>Minimal material wastage. Does not require support support structures</motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3), 0 10px 20px -5px rgba(14, 165, 233, 0.4)" 
              }}
            >
              <Card className="glass-morphism">
                <CardContent className="p-6">
                  <motion.h3 
                    className="font-bold text-lg mb-4"
                    animate={{ 
                      color: ["rgba(239, 68, 68, 1)", "rgba(248, 113, 113, 1)", "rgba(239, 68, 68, 1)"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Limitations:
                  </motion.h3>
                  <motion.ul 
                    className="list-disc ml-5 space-y-2 text-foreground/80"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <motion.li variants={itemFade}>Limited material options</motion.li>
                    <motion.li variants={itemFade}>Relatively high cost compared to CNC machining and other 3D printing technologies</motion.li>
                    <motion.li variants={itemFade}>Limited volume size</motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Comparison Table */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-gradient"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 8 }}
          >
            DMLS printing service compared to other 3D printing technologies
          </motion.h2>
          
          <div className="overflow-x-auto">
            <motion.table 
              className="min-w-full bg-muted/30 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 0 30px rgba(14, 165, 233, 0.2)" }}
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
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      backgroundColor: tech.technology === "DMLS" 
                        ? "rgba(14, 165, 233, 0.15)" 
                        : "rgba(14, 165, 233, 0.05)" 
                    }}
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
        
        {/* Our DMLS 3D printing gallery */}
        <motion.section 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 text-gradient"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 9 }}
          >
            Our DMLS 3D printing gallery
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {gallery.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-muted/30 p-4 rounded-lg flex flex-col items-center justify-center aspect-square feature-card"
                variants={itemFade}
                whileHover={{ 
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3), 0 10px 20px -5px rgba(14, 165, 233, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p 
                  className="text-center font-medium mb-2"
                  animate={{
                    color: ["rgba(14, 165, 233, 1)", "rgba(59, 130, 246, 1)", "rgba(14, 165, 233, 1)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  {item.name}
                </motion.p>
                <p className="text-center text-sm text-foreground/70">{item.image}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        {/* Final Get instant quote */}
        <motion.section 
          className="mb-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["0 0 10px rgba(14, 165, 233, 0.3)", "0 0 30px rgba(14, 165, 233, 0.6)", "0 0 10px rgba(14, 165, 233, 0.3)"]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity },
              scale: { type: "spring", stiffness: 400 }
            }}
          >
            <Link to="/upload-file" className="button-primary inline-flex items-center gap-2 text-lg gradient-background">
              Get instant quote
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
          <motion.p 
            className="mt-2 text-sm text-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            All uploads are secure and confidential.
          </motion.p>
        </motion.section>
      </div>
    </PageTemplate>
  );
};

export default MetalPrinting;
