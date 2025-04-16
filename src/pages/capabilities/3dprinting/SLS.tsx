
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTemplate from "../../../components/layout/PageTemplate";
import { Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SLS: React.FC = () => {
  const partners = Array(6).fill("Manufacturing partner network for 3D printing");
  
  const capabilities = {
    tolerances: "± 0.3% with a lower limit of ± 0.3 mm",
    layerHeight: "100 μm (0.1 mm)",
    maxBuildSize: "395 x 500 x 395 mm",
    minFeatureSize: "0.5 mm",
    standardLeadTime: "From three business days"
  };
  
  const benefits = [
    {
      icon: "Icon 3D printer",
      title: "Rapid turnaround",
      description: "Our streamlined order process allows you to receive a quote instantly or within one business day, and SLS 3D printed parts are delivered in as little as three working days."
    },
    {
      icon: "Tick",
      title: "State-of-the-art technology",
      description: "All of our partners' SLS 3D printing technologies are the most up-to-date in the industry, ensuring that you always benefit from the latest innovations in selected laser sintering services."
    },
    {
      icon: "Icon modelling",
      title: "Unmatched scalability",
      description: "With our network of over 260 manufacturers offering SLS 3D printing services, you can rest assured that there is always capacity for both prototyping and large-scale production."
    },
    {
      icon: "Icon industrial robot",
      title: "A wide range of industries",
      description: "Our SLS 3D printing services creates parts that meet the high quality demands of numerous industries; from mission-critical aerospace parts to medical components."
    },
    {
      icon: "Stacks",
      title: "High-quality materials",
      description: "Geomiq's SLS 3D printing services provide industrial-grade, high-quality engineering material options, ensuring you have the perfect material for your application"
    }
  ];
  
  const processSteps = [
    {
      icon: "bolt and shapes",
      title: "Get a quote",
      description: "Upload your CAD model to our platform, select your lead time, and get an instant or 24-hour SLS 3D printing quote."
    },
    {
      icon: "Robot arm",
      title: "Production",
      description: "We select the most suited manufacturer for your order, with production starting immediately"
    },
    {
      icon: "Feature image",
      title: "Quality control",
      description: "We guarantee your order arrives to specification with our industry-leading virtual and physical quality standards."
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

        {/* What is SLS 3D printing? */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-morphism p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gradient">What is SLS 3D printing?</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Selective Laser Sintering (SLS) is a powder bed fusion 3D printing technology that prints high-quality parts from atomised raw material plastic powder. In SLS 3D printing, a laser selectively fuses powdered material layer by layer until the whole part forms. SLS produces highly durable and complex plastic parts without needing support structures, making it ideal for both functional prototyping and small production runs in numerous industries.
            </p>
          </div>
        </motion.section>
        
        {/* Order high-quality SLS 3D printed parts online */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Order high-quality SLS 3D printed parts online</h2>
          <p className="text-lg mb-8 text-foreground/80">
            At Geomiq, we're proud to partner with 260+ experienced and thoroughly vetted selective laser sintering service providers with a proven track record of making high-quality, high-precision SLS 3D printed parts for customers all over the globe. With our partners' expertise, access to 120+ of the latest SLS 3D printers, our engineers' attention to detail, and our entire team's commitment to exceptional quality assurance at every stage, you can rest assured that with Geomiq, you'll receive only the best SLS 3D printed parts – the first time, every time.
          </p>
          
          <div className="flex items-center justify-between bg-muted/30 p-6 rounded-lg">
            <div className="flex-1">
              <h3 className="font-bold mb-2">High quality printed part</h3>
            </div>
            <Link to="/upload-file" className="button-primary">
              Get instant quote
            </Link>
          </div>
        </section>
        
        {/* SLS 3D printer capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gradient">SLS 3D printer capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Tolerances</h3>
                <p className="text-foreground/80 text-sm whitespace-pre-line">{capabilities.tolerances}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Layer height</h3>
                <p className="text-foreground/80 text-sm whitespace-pre-line">{capabilities.layerHeight}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Max. build size</h3>
                <p className="text-foreground/80 text-sm whitespace-pre-line">{capabilities.maxBuildSize}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Min. feature size</h3>
                <p className="text-foreground/80 text-sm">{capabilities.minFeatureSize}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Standard lead time</h3>
                <p className="text-foreground/80 text-sm">{capabilities.standardLeadTime}</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Why choose the SLS 3D printing service from Geomiq? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Why choose the SLS 3D printing service from Geomiq?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        
        {/* Our SLS 3D printing process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Our SLS 3D printing process:</h2>
          
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
        
        {/* SLS 3D printing materials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">SLS 3D printing materials</h2>
          
          <div className="flex flex-wrap gap-2">
            {materials.map((material, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-muted text-sm">
                {material}
              </span>
            ))}
          </div>
        </section>
        
        {/* SLS 3D printing finishing options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">SLS 3D printing finishing options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <h2 className="text-3xl font-bold mb-8 text-gradient">Benefits and limitations of SLS 3D printing service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Benefits:</h3>
                <ul className="list-disc ml-5 space-y-2 text-foreground/80">
                  <li>Produces parts with good mechanical properties.</li>
                  <li>Does not require support structures during printing</li>
                  <li>Fast printing process for functional, durable prototypes or end-use parts</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Limitations:</h3>
                <ul className="list-disc ml-5 space-y-2 text-foreground/80">
                  <li>Limited material choice</li>
                  <li>Produces a relatively rough grainy surface finish</li>
                  <li>Large, thin features are susceptible to warping</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">SLS 3D printing service compared to other 3D printing technologies</h2>
          
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
        
        {/* Our SLS 3D printing gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Our SLS 3D printing gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          <p className="mt-2 text-sm text-foreground/60">All uploads are secure and confidential.</p>
          <p className="mt-1 text-sm text-foreground/60">All uploads are secure and confidential.</p>
        </section>
      </div>
    </PageTemplate>
  );
};

export default SLS;
