
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTemplate from "../../../components/layout/PageTemplate";
import { Lightbulb, ArrowRight, Clock, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SLA: React.FC = () => {
  const partners = Array(6).fill("Manufacturing partner network for 3D printing");
  
  const capabilities = {
    maxBuildSize: {
      prototyping: "145 × 145 × 175 mm",
      industrial: "500 x 500 x 500 mm"
    },
    standardLeadTime: "From 3 business days",
    dimensionalAccuracy: {
      prototyping: "± 0.3% with a lower limit of ± 0.3 mm",
      industrial: "± 0.2% with a lower limit of ± 0.13 mm"
    },
    layerHeight: "50-100 μm",
    minFeatureSize: "0.2 mm"
  };
  
  const benefits = [
    {
      icon: "Icon 3D printer",
      title: "Rapid turnaround",
      description: "Our streamlined order process allows you to receive a quote instantly or within one business day, and SLA 3D printed parts delivered in 5-7 working days."
    },
    {
      icon: "geometry 1",
      title: "Complex geometry",
      description: "All of our partners' SLA 3D Printing technologies allow you to produce SLA 3D printed parts with virtually any geometry, and our tolerances are typically +/- 0.127mm."
    },
    {
      icon: "Icon modelling",
      title: "Unmatched scalability",
      description: "With our network of over 260 manufacturers offering SLA 3D Printing services, you can rest assured that there is always capacity for both prototyping and large-scale production."
    },
    {
      icon: "Icon industrial robot",
      title: "A wide range of industries",
      description: "Our SLA 3D printing services creates parts that meet the high quality demands of numerous industries; from mission-critical aerospace parts to medical components."
    },
    {
      icon: "Icon variety",
      title: "A wide variety of materials and colors",
      description: "Geomiq's SLA 3D printing services provides a wide range of thermoplastics and engineering material options, ensuring you have the perfect materil for your application."
    }
  ];
  
  const processSteps = [
    {
      icon: "bolt and shapes",
      title: "Get a quote",
      description: "Upload your CAD to our platform, select your lead time and get an instant or 24hr SLA 3D printing quote."
    },
    {
      icon: "Robot arm",
      title: "Production",
      description: "We select the most suited manufacturer for your order, with production starting immediately."
    },
    {
      icon: "Feature image",
      title: "Quality control",
      description: "We gaurantee your order arrives to specification, with our industry leading virtual and physical quality standards."
    },
    {
      icon: "Bolt in box",
      title: "Delivery",
      description: "We ship your parts on express services where possible, providing physical delivery notes and inspection reports."
    }
  ];
  
  const featuredSections = [
    {
      image: "portrait-worker-overalls-steel-factory-background 1 (1)",
      title: "Quality assurance at every stage",
      description: "We're committed to providing the best quality assurance in the business. We employ highly skilled engineers to triple-check all of your files and parts from the initial SLA 3D printing quote to final inspection – ensuring that you're happy with your results the first time, every time.",
      cta: "Find out more"
    },
    {
      image: "cad-engineer-working-with-manufacturing-software-develop-industrial-machinery-gears-model-engineering-technical-machine-product-computer-construction-industry-development 1",
      title: "From prototype to production in days",
      description: "At Geomiq, we know your time is valuable – and we're passionate about helping you save more of it. When you upload your files, we'll get you a quote within one business day – and our network of highly experienced partners will ensure the finished products are of the highest quality possible.",
      cta: "Upload your parts"
    },
    {
      image: "3D Printing2",
      title: "Leverage the expertise of our global partner network",
      description: "We partner with 260+ highly vetted and experienced manufacturers from 50+ different countries, so that you can benefit from more options, greater capabilities and the highest standards in the world – all from a single access point of sheet metal processing and production.",
      cta: "Get instant quote"
    }
  ];
  
  const materials = [
    "Standard Resin - Black",
    "Standard Resin - White",
    "Standard Resin - Grey",
    "Standard Resin - Clear",
    "Formlabs Tough Resin 2000 - ABS-like",
    "Formlabs High Temp Resin",
    "Formlabs Durable Resin - PP-like",
    "Formlabs Rigid Resin 4000",
    "Formlabs Grey Pro Resin",
    "Formlabs Flexible Resin 80A - Silicone-like"
  ];
  
  const finishingOptions = [
    {
      title: "As-printed",
      description: "Support structures, if present, will be removed, and support surface nibs will be lightly sanded until smooth, ensuring a high-quality finish."
    },
    {
      title: "Vapour polished",
      description: "Vapour polishing is done to increase the smoothness of the surface."
    },
    {
      title: "Custom",
      description: "You can specify custom finishes such as painting and electroplating. Note that custom finishes require manual review and quoting and may be subject to approval."
    }
  ];
  
  const comparisonTable = [
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
      technology: "SLS",
      accuracy: "± 0.3% with a lower limit of ± 0.3 mm",
      strengths: "Design flexibility, support not required",
      buildVolume: "395 x 500 x 395 mm",
      layerThickness: "100μm",
      minFeatureSize: "0.762 mm"
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
    { name: "Standard Resin - Black", image: "Standard Resin - Black" },
    { name: "Tough Resin 2000- Clear", image: "Tough Resin 2000- Clear" },
    { name: "Durable Resin", image: "Durable Resin" },
    { name: "Flexible 80A", image: "Flexible 80A" },
    { name: "Grey Pro Resin", image: "Grey Pro Resin" }
  ];

  return (
    <PageTemplate
      title="Stereolithography (SLA)"
      description="Stereolithography uses a laser to cure liquid photopolymer resin layer-by-layer, creating highly detailed parts with smooth surface finishes ideal for visual prototypes and detailed components."
    >
      <div className="max-w-4xl mx-auto">
        {/* Banner Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-morphism p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-gradient">SLA 3D printing service | online parts</h1>
            <p className="text-lg text-foreground/80 mb-6">
              Delivering high-resolution SLA 3D printed prototypes and end-use parts. Receive SLA 3D printed parts in as little as 3 days. Our in-house specialists and advanced processes ensure you get the perfect 3D printed parts the first time, every time.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-muted/50 rounded-md px-3 py-1">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm">Parts in as little as 3 days</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-md px-3 py-1">
                <span className="text-sm">20+ high-quality, hard & flexible resins</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-md px-3 py-1">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm">ISO9001:2015 & ISO13485 Accredited</span>
              </div>
            </div>
            
            <Link to="/upload-file" className="button-primary inline-flex items-center gap-2">
              Get an instant SLA quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-2 text-sm text-foreground/60">All uploads are secure and confidential.</p>
            <p className="mt-1 text-sm text-foreground/60">All uploads are secure and confidential.</p>
          </div>
        </motion.section>
        
        {/* SLA printed prototype */}
        <div className="mb-16">
          <div className="bg-muted/30 rounded-lg p-6 flex items-center justify-center aspect-video">
            <p className="text-center font-medium">SLA printed prototype</p>
          </div>
        </div>
        
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

        {/* What is SLA 3D printing? */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-morphism p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gradient">What is SLA 3D printing?</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Stereolithography (SLA) is a vat photopolymerisation 3D Printing technology that prints high-resolution parts from liquid resins. This technology is suitable for end-use, low-volume production, as well as rapid prototyping. SLA 3D printing is known for producing extremely high-accuracy, detailed parts with smooth surface finishes, offering higher resolution printing than many other 3D Printing technologies.
            </p>
          </div>
        </motion.section>
        
        {/* Order high-quality SLA 3D printed parts online */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Order high-quality SLA 3D printed parts online</h2>
          <p className="text-lg mb-8 text-foreground/80">
            At Geomiq, we're proud to partner with 260+ experienced and highly vetted manufacturers, who have a proven track record of making high-quality, high-precision SLA 3D Printed parts for customers all over the globe. With our partners' expertise, access to 120+ of the latest 3D printers, our engineers' attention to detail and our entire team's commitment to exceptional quality assurance at every stage, you can rest assured that with Geomiq, you'll receive only the best SLA 3D Printed parts – the first time, every time.
          </p>
          
          <div className="text-center">
            <Link to="/upload-file" className="button-primary inline-flex items-center gap-2">
              Get instant quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
        
        {/* SLA 3D printer capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gradient">SLA 3D printer capabilities</h2>
          <p className="mb-6 text-foreground/80">
            SLA 3D printing has two distinct classes: prototyping (desktop) SLA and industrial SLA. These are the key capabilities of each technology.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-muted/30 rounded-lg">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left"></th>
                  <th className="px-4 py-3 text-left">Prototyping (desktop) SLA</th>
                  <th className="px-4 py-3 text-left">Industrial SLA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium">Max. build size</td>
                  <td className="px-4 py-3">{capabilities.maxBuildSize.prototyping}</td>
                  <td className="px-4 py-3">{capabilities.maxBuildSize.industrial}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium">Standard lead time</td>
                  <td className="px-4 py-3" colSpan={2}>{capabilities.standardLeadTime}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium">Dimensional accuracy</td>
                  <td className="px-4 py-3">{capabilities.dimensionalAccuracy.prototyping}</td>
                  <td className="px-4 py-3">{capabilities.dimensionalAccuracy.industrial}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium">Layer height</td>
                  <td className="px-4 py-3" colSpan={2}>{capabilities.layerHeight}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Min.feature size</td>
                  <td className="px-4 py-3" colSpan={2}>{capabilities.minFeatureSize}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Why choose SLA 3D printing service from Geomiq? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Why choose SLA 3D printing service from Geomiq?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-morphism">
                <CardContent className="p-6 space-y-3">
                  <div className="bg-primary/10 p-2 rounded-lg inline-block mb-1">
                    <span className="text-primary text-sm">{benefit.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                  <p className="text-foreground/80 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Our SLA 3D printing process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Our SLA 3D printing process:</h2>
          
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
                <p className="text-foreground/80">{section.description}</p>
                <Link to="/upload-file" className="flex items-center text-primary hover:underline">
                  {section.cta}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
        
        {/* Get instant quote */}
        <section className="mb-16 text-center">
          <Link to="/upload-file" className="button-primary inline-flex items-center gap-2 text-lg">
            Get instant quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-2 text-sm text-foreground/60">All uploads are secure and confidential.</p>
        </section>
        
        {/* SLA 3D printing materials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">SLA 3D printing materials</h2>
          
          <div className="flex flex-wrap gap-2">
            {materials.map((material, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-muted text-sm">
                {material}
              </span>
            ))}
          </div>
        </section>
        
        {/* SLA 3D printing finishing options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">SLA 3D printing finishing options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finishingOptions.map((option, index) => (
              <Card key={index} className="glass-morphism">
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-bold text-lg">{option.title}</h3>
                  <p className="text-foreground/80 text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Benefits and limitations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Benefits and limitations of SLA 3D printing service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Benefits:</h3>
                <ul className="list-disc ml-5 space-y-2 text-foreground/80">
                  <li>Can produce parts with high dimensional accuracy and intricate details</li>
                  <li>Produces very smooth surface finishes</li>
                  <li>Compatible with specialty materials, such as castable, flexible, and clear (transparent) resins.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Limitations:</h3>
                <ul className="list-disc ml-5 space-y-2 text-foreground/80">
                  <li>Limited to photosensitive resins/polymers</li>
                  <li>SLA-printed parts are susceptible to visual and mechanical degradation over long-term exposure to sunlight</li>
                  <li>Typically requires support structures for most geometries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">SLA 3D printing service compared to other 3D printing technologies</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-muted/30 rounded-lg">
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
                  <tr key={index} className="border-b border-border">
                    <td className="px-4 py-3 font-medium whitespace-pre-line">{tech.accuracy}</td>
                    <td className="px-4 py-3">{tech.strengths}</td>
                    <td className="px-4 py-3 whitespace-pre-line">{tech.buildVolume}</td>
                    <td className="px-4 py-3">{tech.layerThickness}</td>
                    <td className="px-4 py-3">{tech.minFeatureSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Our SLA 3D printing gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Our SLA 3D printing gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="bg-muted/30 p-4 rounded-lg flex flex-col items-center justify-center aspect-square">
                <p className="text-center font-medium mb-2">{item.name}</p>
                <p className="text-center text-sm text-foreground/70">{item.image}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Final Get instant quote */}
        <section className="mb-16 text-center">
          <Link to="/upload-file" className="button-primary inline-flex items-center gap-2 text-lg">
            Get instant quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </PageTemplate>
  );
};

export default SLA;
