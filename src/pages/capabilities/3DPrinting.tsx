
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const ThreeDPrinting: React.FC = () => {
  const technologies = [
    {
      id: "fdm",
      name: "Fused Deposition Modelling (FDM)",
      description: "FDM creates parts by extruding thermoplastic filaments layer by layer. This technology is ideal for concept models, functional prototypes, and low-volume production parts.",
      advantages: ["Cost-effective", "Wide material selection", "Good for large parts", "Fast turnaround times"],
      applications: ["Prototyping", "Fixtures and jigs", "Low-stress components", "Conceptual models"],
      materials: ["ABS", "PLA", "PETG", "Nylon", "TPU", "PC", "ASA"],
    },
    {
      id: "mjf",
      name: "Multi-Jet Fusion (MJF)",
      description: "MJF technology uses a binding agent and heat to fuse nylon powder particles together. It offers excellent mechanical properties and surface finish.",
      advantages: ["Excellent detail resolution", "High strength parts", "Smooth surface finish", "Consistent mechanical properties"],
      applications: ["Functional prototypes", "End-use parts", "Complex geometries", "Small to medium batch production"],
      materials: ["PA 12", "PA 11", "PA 12 Glass Beads"],
    },
    {
      id: "sls",
      name: "Selective Laser Sintering (SLS)",
      description: "SLS uses a laser to sinter powdered material, binding it together to create solid structures. This process allows for complex geometries without support structures.",
      advantages: ["No support structures needed", "High geometric freedom", "Good mechanical properties", "Suitable for functional parts"],
      applications: ["Functional prototypes", "End-use parts", "Complex assemblies", "Short production runs"],
      materials: ["PA 12", "PA 11", "TPU", "PP", "PA 12 Glass-filled"],
    },
    {
      id: "sla",
      name: "Stereolithography (SLA)",
      description: "SLA uses a laser to cure liquid resin into hardened plastic. It produces parts with exceptional detail and smooth surface finishes.",
      advantages: ["High accuracy", "Smooth surface finish", "Fine details", "Clear or transparent options"],
      applications: ["Visual prototypes", "Jewelry patterns", "Dental applications", "Master patterns for molding"],
      materials: ["Standard resin", "Clear resin", "Tough resin", "Flexible resin", "Castable resin"],
    },
    {
      id: "metal",
      name: "Metal 3D Printing (DMLS and SLM)",
      description: "Metal 3D printing technologies like Direct Metal Laser Sintering (DMLS) and Selective Laser Melting (SLM) create fully dense metal parts from powdered metal materials.",
      advantages: ["Complex geometries", "Internal features", "Weight reduction", "Material efficiency"],
      applications: ["Aerospace components", "Medical implants", "Automotive parts", "Custom tooling"],
      materials: ["Aluminum alloys", "Titanium alloys", "Stainless steel", "Tool steel", "Inconel", "Cobalt chrome"],
    },
  ];

  return (
    <PageTemplate 
      title="3D Printing Services" 
      description="Our advanced 3D printing technologies offer unparalleled design freedom and rapid prototyping capabilities with a wide range of materials and finishes."
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Transforming Ideas into Reality</h2>
          <p className="text-lg text-foreground/80">
            3D printing technology has revolutionized the manufacturing industry by enabling rapid prototyping and production of complex geometries that would be difficult or impossible to create using traditional manufacturing methods. Our range of 3D printing technologies offers you access to the latest advancements in additive manufacturing.
          </p>
        </motion.div>
        
        <Tabs defaultValue="fdm" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {technologies.map((tech) => (
              <TabsTrigger key={tech.id} value={tech.id}>
                {tech.id.toUpperCase()}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {technologies.map((tech) => (
            <TabsContent key={tech.id} value={tech.id} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-morphism">
                  <CardHeader>
                    <CardTitle className="text-gradient text-2xl">{tech.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground/80">{tech.description}</p>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-primary">Key Advantages</h3>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                        {tech.advantages.map((advantage, i) => (
                          <li key={i}>{advantage}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-primary">Common Applications</h3>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                        {tech.applications.map((application, i) => (
                          <li key={i}>{application}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-primary">Available Materials</h3>
                      <div className="flex flex-wrap gap-2">
                        {tech.materials.map((material, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-muted text-sm">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Start Your 3D Printing Project?</h3>
          <p className="text-lg text-foreground/80 mb-6">
            Upload your CAD files today and get an instant quote for your 3D printing needs.
          </p>
          <a href="#" className="button-primary inline-flex mx-auto">Get an Instant Quote</a>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ThreeDPrinting;
