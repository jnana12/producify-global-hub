
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTemplate from "../../../components/layout/PageTemplate";
import { Printer, ArrowRight, Clock, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrintingService: React.FC = () => {
  const partners = Array(6).fill("Manufacturing partner network for 3D printing");
  
  const printingTechnologies = [
    {
      title: "Metal 3D printing (DMLS and SLM)",
      subtitle: "Our 3D printing capabilities: Metal 3D Printing",
      description: "Metal 3D printing DMLS or SLM is best for parts with complex geometry requiring production-grade materials such as Stainless Steel 316L, Aluminium AlSi10Mg, Inconel 718 and Titanium Ti6AI4V.",
      link: "/capabilities/3d-printing/metal"
    },
    {
      title: "Selective Laser Sintering (SLS)",
      subtitle: "Selective Laser Sintering (SLS)",
      description: "SLS 3D Printing is popular for inexpensive industrial applications. Offers high performance Nylon materials PA11, PA12, PP and flexible TPU. It also offers glass filled options for further mechanical performance.",
      link: "/capabilities/3d-printing/sls"
    },
    {
      title: "HP Multi-Jet Fusion (MJF)",
      subtitle: "Our 3D printing capabilities: HP Multi-Jet Fusion",
      description: "HP MJF 3D Printing service offers high performance Nylon materials PA11, PA12, and flexible TPU-95A and Ultrasint TPU offering consistent mechanical performance.",
      link: "/capabilities/3d-printing/mjf"
    },
    {
      title: "Fused Deposition Modelling (FDM)",
      subtitle: "Our 3D printing capabilities: Fused Deposition Modeling",
      description: "FDM 3D printing offers low cost and fast turnaround functional parts for prototyping, durable manufacturing tools and jigs. A range of rigid plastics including ABS, PC and ULTEM are available.",
      link: "/capabilities/3d-printing/fdm"
    },
    {
      title: "Stereolithography (SLA)",
      subtitle: "Our 3D printing capabilities: Strereolithography",
      description: "SLA (Stereolithography) offers unrivalled feature detail and surface quality. Ideal for visual prototypes and models as well as moulds and form and fit checks. Offering ABS-like, PC-like and Silicone in many colours.",
      link: "/capabilities/3d-printing/sla"
    }
  ];
  
  const benefits = [
    {
      title: "Rapid turnaround",
      subtitle: "Rapid turnaround",
      description: "We're committed to reducing friction at every stage, so you can be as delighted with the speed of your 3D Printed parts' arrival as you are with their exceptional quality. Order 3D printing service now to receive your parts in as little as 3 days!"
    },
    {
      title: "Complex geometry",
      subtitle: "Complex geometry",
      description: "All of our partners' 3D Printing technologies allow you to produce 3D printed parts with virtually any geometry, and our tolerances are typically +/- 0.127mm."
    },
    {
      title: "Unmatched durability",
      subtitle: "Unmatched durability",
      description: "3D Printing produces durable and impact-resistant parts that are suitable for a multitude of prototype testing or end-use applications, and ready to delight."
    },
    {
      title: "Catering to a wide range of industries",
      subtitle: "Catering to a wide range of industries",
      description: "From aerospace and energy products to electronics and automotive goods, we're proud to deliver immaculate 3D Printed parts for any and every industry."
    },
    {
      title: "A wide variety of 3D printing materials and colours",
      subtitle: "A wide variety of 3D printing materials and colours",
      description: "We only offer the best plastic and metal 3D Printing materials and technologies, and can guarantee that you'll be happy with the quality of each part you receive. Expect nothing less than commercial grade materials, such as PA2200, PA12 – and so much more."
    }
  ];
  
  const processSteps = [
    {
      title: "Get a quote",
      description: "Upload your 3D printing CAD to our platform, select your lead time and get an instant or 24hr 3D printing quote."
    },
    {
      title: "Production",
      description: "We select the most suited manufacturer for your 3D printing order, with production starting immediately."
    },
    {
      title: "Quality control",
      description: "We are committed to offering the best quality assurance in the business. Our highly skilled engineers triple-check all your files and parts, from the initial 3D printing quote to the final inspection, ensuring your satisfaction the first time, every time."
    },
    {
      title: "Delivery",
      description: "We ship your 3D printed parts on express services where possible, including physical delivery notes and inspection reports."
    }
  ];
  
  const featuredSections = [
    {
      title: "Quality assurance at every stage",
      subtitle: "Online 3D Printing: Quality assurance",
      description: "We are committed to offering the best quality assurance in the business. Our highly skilled engineers triple-check all your files and parts, from the initial 3D printing quote to the final inspection, ensuring your satisfaction the first time, every time.",
      cta: "Find out more"
    },
    {
      title: "From prototype to production in days",
      subtitle: "Custom 3D Printing UK: From prototype to production",
      description: "At Geomiq, we understand the value of your time, and we are dedicated to helping you save more of it. Upon uploading your files, we provide a quote within one business day, and our network of highly experienced partners ensures that your 3D Printing parts are of the highest quality with short lead times.",
      cta: "Upload your parts"
    },
    {
      title: "Leverage the expertise of our global partner network",
      subtitle: "Online 3D Printing Service UK: Global partner network",
      description: "We collaborate with 260+ experienced and vetted manufacturers. This allows you to access a world-class supply chain, offering great 3D printing capabilities and the highest standards globally, all from a single access point.",
      cta: "Get instant quote"
    }
  ];
  
  const comparisonTable = [
    {
      type: "Metal 3D printing (DMLS and SLM)",
      materials: ["ABS", "PC", "ULTEM"],
      size: "-",
      tolerances: "DCTG 6 of DIN EN ISO 8062-3 for dimensions between 0.5 and 30 mm\n\nDCTG 8 of DIN EN ISO 8062-3 for dimensions between 30 and 400 mm\n\nDIN ISO 2768-1 c (coarse) for dimensions between 0.5 mm and 400 mm"
    },
    {
      type: "Fused Deposition Modelling (FDM)",
      materials: ["PA11", "PA12", "TPU-95A", "Ultrasint TPU"],
      size: "500mm x500mm x 500mm",
      tolerances: "± 0.5% with a lower limit of ± 0.5 mm"
    },
    {
      type: "HP Multi-Jet Fusion (MJF)",
      materials: ["PA11", "PA12", "PP", "TPU"],
      size: "370mm x 274mm x 375mm although we suggest 200mm x 200mm x 200mm to prevent warping, distortion and inaccuracy. (Larger parts can be made as multiple sub-parts in and mechanically or chemically joined together)",
      tolerances: "PA 12 (MJF): ±0.3% (with a lower limit of ±0.3 mm) although tolerances may change based on part geometry."
    },
    {
      type: "Selective Laser Sintering (SLS)",
      materials: ["PA2200 Nylon"],
      size: "340mm x 340mm x 605mm although we suggest 320mm x 320mm x 580mm to prevent warping, distortion and inaccuracy. (Larger parts can be made as multiple sub-parts in and mechanically or chemically joined together)",
      tolerances: "±0.3% (with a lower limit of ±0.3 mm) although tolerances may change based on part geometry."
    },
    {
      type: "Stereolithograph (SLA)",
      materials: ["ABS-Like", "PC-Like", "Silicone"],
      size: "500mm x500mm x 500mm",
      tolerances: "Standard ±0,5% (±0,2 mm lower limit)\nIndustrial ±0,5% (±0,15 mm lower limit)"
    }
  ];
  
  const materials = [
    "DMLS",
    "FDM",
    "HP MULTI-JET FUSION",
    "SLS",
    "SLA",
    "Black Resin",
    "Castable Resin",
    "Clear Resin",
    "Grey Resin",
    "Tough Resin",
    "White Resin"
  ];
  
  const reasons = [
    {
      title: "Cost-effective",
      subtitle: "Cost-effective",
      description: "Use our affordable 3D printing services to reduce costs through material efficiency. Cheaper than other manufacturing capabilities"
    },
    {
      title: "Rapid prototyping",
      subtitle: "Rapid prototyping",
      description: "3D printing is a really efficient way to create prototypes. It is quick to iterate and bring modifications"
    },
    {
      title: "Design freedom",
      subtitle: "Design freedom",
      description: "3D printing offers many design possibilities, which can't be manufactured with other technologies"
    },
    {
      title: "Reduced requirements",
      subtitle: "Reduced requirements",
      description: "Reduce resource requirements like materials or energy. 3D Printing is a more sustainable option."
    },
    {
      title: "Complex geometries",
      subtitle: "Complex geometries",
      description: "3D printing offers the possibility to have complex shapes which will be harder to produce with other manufacturing processes."
    },
    {
      title: "On-demand production",
      subtitle: "3D Printing On-demand production",
      description: "3D printing offers this flexibility of on-demand manufacturing. Get custom parts without large inventories."
    }
  ];
  
  const gallery = [
    { name: "SLS PA2200", image: "SLS PA2200" },
    { name: "MJF PA12", image: "MJF PA12" },
    { name: "FDM ABS", image: "FDM ABS" },
    { name: "SLA Clear Resin", image: "SLA Clear Resin" }
  ];

  return (
    <PageTemplate
      title="3D Printing Service"
      description="Our comprehensive 3D printing service offers fast, accurate, and cost-effective production of complex parts with customizable material properties and finishes."
    >
      <div className="max-w-4xl mx-auto">
        {/* Trusted By Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Trusted by</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-muted/30 p-6 rounded-lg flex items-center justify-center">
                <p className="text-center text-sm text-foreground/70">{partner}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our 3D Printing Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Our 3D printing services</h2>
          <p className="text-lg mb-8 text-foreground/80">
            Geomiq takes on prototype and production 3D Printing and post processing. We can support one-offs or batch production in line with your requirements. With over 350 machines on hand including large format and biocompatible printing, we can bring your 3D printing project to life with ease. We have earned our reputation among the world's leading companies, working on the very latest 3D printing technologies.
          </p>
          
          <div className="space-y-8">
            {printingTechnologies.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-morphism p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-1">{tech.title}</h3>
                <p className="text-sm text-foreground/70 mb-3">{tech.subtitle}</p>
                <p className="text-foreground/80 mb-4">{tech.description}</p>
                <Link to={tech.link} className="flex items-center text-primary hover:underline">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Order high-quality 3D printed parts online */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Order high-quality 3D printed parts online</h2>
          <p className="text-lg mb-8 text-foreground/80">
            Geomiq offers high-quality 3D printing services in the UK. We're proud to partner with 260+ experienced and highly vetted manufacturers, who have a proven track record of making high-quality, high-precision 3D Printed parts for customers all over the globe. With our partners' expertise, access to 120+ of the latest 3D printers, our engineers' attention to detail and our entire team's commitment to exceptional quality assurance at every stage, you can rest assured that with Geomiq, you'll receive the perfect 3D Printed parts – the first time, every time.
          </p>
          
          <div className="text-center">
            <Link to="/upload-file" className="button-primary inline-flex items-center gap-2">
              Get instant quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-2 text-sm text-foreground/60">3D printing quote</p>
          </div>
        </section>
        
        {/* Why choose 3D Printing services from Geomiq? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Why choose 3D Printing services from Geomiq?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-morphism overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                  <p className="text-foreground/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Our 3D printing process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Our 3D printing process:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="glass-morphism overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                    <span className="font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-foreground/80 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Featured Sections */}
        <section className="mb-16 space-y-8">
          {featuredSections.map((section, index) => (
            <Card key={index} className="glass-morphism overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gradient">{section.title}</h3>
                <p className="text-sm text-foreground/70">{section.subtitle}</p>
                <p className="text-foreground/80">{section.description}</p>
                <Link to="/upload-file" className="flex items-center text-primary hover:underline">
                  {section.cta}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
        
        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Compare 3D printing processes:</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-muted/30 rounded-lg">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Materials</th>
                  <th className="px-4 py-3 text-left">Maximum part size</th>
                  <th className="px-4 py-3 text-left">Tolerances & accuracy</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((item, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="px-4 py-3 font-medium">{item.type}</td>
                    <td className="px-4 py-3">
                      <ul className="list-none space-y-1">
                        {item.materials.map((material, i) => (
                          <li key={i}>{material}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-3 whitespace-pre-line">{item.size}</td>
                    <td className="px-4 py-3 whitespace-pre-line">{item.tolerances}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* 3D printing materials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">3D printing materials</h2>
          
          <div className="flex flex-wrap gap-2">
            {materials.map((material, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-muted text-sm">
                {material}
              </span>
            ))}
          </div>
        </section>
        
        {/* Main reasons to choose 3D printing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Main reasons to choose 3D printing:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="glass-morphism overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">{reason.title}</h3>
                  <p className="text-foreground/80">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* 3D Printing Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient text-center">OUR 3D PRINTING GALLERY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="bg-muted/30 p-4 rounded-lg flex flex-col items-center justify-center aspect-square">
                <p className="text-center font-medium mb-2">{item.name}</p>
                <p className="text-center text-sm text-foreground/70">{item.image}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Get instant quote */}
        <section className="mb-16 text-center">
          <Link to="/upload-file" className="button-primary inline-flex items-center gap-2 text-lg">
            Get instant quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-2 text-sm text-foreground/60">All uploads are secure and confidential.</p>
          <p className="mt-1 text-sm text-foreground/60">All uploads are secure and confidential.</p>
        </section>
      </div>
    </PageTemplate>
  );
};

export default PrintingService;
