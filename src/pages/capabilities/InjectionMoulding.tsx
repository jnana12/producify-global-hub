
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const InjectionMoulding: React.FC = () => {
  const technologies = [
    {
      id: "standard",
      name: "Standard Injection Moulding",
      description: "Our standard injection moulding service provides high-quality parts with excellent repeatability and consistency, perfect for medium to high-volume production runs.",
      advantages: ["Cost-effective for high volumes", "Excellent part consistency", "Good surface finish", "Wide material selection"],
      applications: ["Consumer products", "Automotive components", "Medical devices", "Electronic enclosures"],
      materials: ["ABS", "Polypropylene", "Polycarbonate", "Nylon", "PEEK", "Acetal"],
    },
    {
      id: "overmoulding",
      name: "Overmoulding",
      description: "Overmoulding is a process where two or more materials are combined in a single part, often to create soft-touch elements, improve ergonomics, or add functionality.",
      advantages: ["Combines multiple materials", "Improved ergonomics", "Enhanced aesthetics", "Reduced assembly costs"],
      applications: ["Tool handles", "Electronic devices", "Medical devices", "Automotive components"],
      materials: ["Rigid substrate: ABS, PC, Nylon", "Overmould: TPE, TPU, Silicone"],
    },
    {
      id: "insert",
      name: "Insert Moulding",
      description: "Insert moulding involves placing a pre-formed component into a mould before injection of the plastic material, creating a strong bond between the two parts.",
      advantages: ["Reduced assembly steps", "Improved part strength", "Enhanced functionality", "Combines metal and plastic"],
      applications: ["Electrical connectors", "Threaded inserts", "Metal-plastic hybrid parts", "Complex assemblies"],
      materials: ["ABS", "Polycarbonate", "Nylon", "PPS", "Various metals for inserts"],
    },
  ];

  return (
    <PageTemplate 
      title="Injection Moulding Services" 
      description="Our injection moulding capabilities provide cost-effective, high-quality parts for medium to high volume production with a wide range of materials and finishing options."
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Precision Injection Moulding Solutions</h2>
          <p className="text-lg text-foreground/80">
            Injection moulding is the ideal manufacturing process for producing high volumes of identical parts with excellent consistency and quality. Our advanced injection moulding capabilities include rapid tooling, a wide range of thermoplastic materials, and specialized techniques like overmoulding and insert moulding.
          </p>
        </motion.div>
        
        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            {technologies.map((tech) => (
              <TabsTrigger key={tech.id} value={tech.id}>
                {tech.id === "standard" ? "Standard" : tech.id === "overmoulding" ? "Overmoulding" : "Insert Moulding"}
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
          <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Start Your Injection Moulding Project?</h3>
          <p className="text-lg text-foreground/80 mb-6">
            Upload your CAD files today to receive a quote for your injection moulding project.
          </p>
          <a href="#" className="button-primary inline-flex mx-auto">Get a Quote</a>
        </div>
      </div>
    </PageTemplate>
  );
};

export default InjectionMoulding;
