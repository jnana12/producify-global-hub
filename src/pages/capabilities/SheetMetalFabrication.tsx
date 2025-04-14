
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Wrench, Zap, Flame, Box } from "lucide-react";

const SheetMetalFabrication: React.FC = () => {
  const technologies = [
    {
      id: "overview",
      name: "Sheet Metal Fabrication",
      description: "Our sheet metal fabrication services include cutting, bending, assembly, and various finishing options for your metal parts with precision and quality.",
      advantages: [
        "Cost-effective for medium to high volumes",
        "Quick turnaround times",
        "Wide range of materials and thicknesses",
        "Variety of finishing options"
      ],
      applications: [
        "Enclosures and housings",
        "Brackets and supports",
        "Panels and faceplates",
        "HVAC components",
        "Automotive parts"
      ],
      materials: [
        "Mild steel",
        "Stainless steel",
        "Aluminum",
        "Copper",
        "Brass",
        "Galvanized steel"
      ],
      icon: <Scissors className="w-8 h-8 text-primary" />
    },
    {
      id: "assembly",
      name: "Assembly and Subassembly",
      description: "We offer comprehensive assembly services to transform your sheet metal parts into complete, functional products or subassemblies.",
      advantages: [
        "Simplified supply chain",
        "Quality-controlled assembly process",
        "Reduced logistics complexity",
        "Complete product testing"
      ],
      processes: [
        "Welding (TIG, MIG, spot)",
        "Riveting and fastening",
        "Adhesive bonding",
        "Hardware installation",
        "Component integration"
      ],
      applications: [
        "Electronic enclosures",
        "Control panels",
        "Machinery components",
        "Automotive assemblies",
        "Industrial equipment"
      ],
      icon: <Wrench className="w-8 h-8 text-primary" />
    },
    {
      id: "waterjet",
      name: "Waterjet Cutting",
      description: "Waterjet cutting uses a high-pressure jet of water and abrasive to cut through materials without heat, ideal for heat-sensitive materials.",
      advantages: [
        "No heat-affected zones",
        "Suitable for nearly any material",
        "Intricate cutting capability",
        "Minimal material waste"
      ],
      materials: [
        "Metals (all types)",
        "Stone and ceramic",
        "Composites",
        "Glass",
        "Rubber and plastics"
      ],
      specifications: [
        "Tolerance: ±0.1mm",
        "Material thickness: up to 150mm",
        "Maximum size: 3000mm x 1500mm"
      ],
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      id: "laser",
      name: "Laser Cutting",
      description: "Our precision laser cutting service offers fast, accurate cutting for sheet metal with exceptional edge quality and detail.",
      advantages: [
        "High precision (±0.1mm)",
        "Excellent edge quality",
        "Fast processing times",
        "Complex geometries possible"
      ],
      materials: [
        "Carbon steel (up to 25mm)",
        "Stainless steel (up to 20mm)",
        "Aluminum (up to 12mm)",
        "Brass and copper (up to 8mm)"
      ],
      specifications: [
        "Maximum sheet size: 3000mm x 1500mm",
        "Minimum feature size: 0.5mm",
        "Surface roughness: Ra 3.2-6.3"
      ],
      icon: <Flame className="w-8 h-8 text-primary" />
    },
    {
      id: "extrusions",
      name: "Extrusions",
      description: "Metal extrusion creates complex cross-sectional profiles that can be cut and machined to create customized components.",
      advantages: [
        "Complex profiles possible",
        "Consistent cross-section",
        "Good strength-to-weight ratio",
        "Cost-effective for high volumes"
      ],
      materials: [
        "Aluminum (6000 series)",
        "Brass",
        "Copper",
        "Steel"
      ],
      applications: [
        "Structural framing",
        "Heat sinks",
        "Furniture components",
        "Transportation parts",
        "Construction profiles"
      ],
      icon: <Box className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <PageTemplate 
      title="Sheet Metal Fabrication" 
      description="Our sheet metal fabrication services include cutting, bending, assembly, and various finishing options for your metal parts."
    >
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {technologies.map((tech) => (
              <TabsTrigger key={tech.id} value={tech.id}>
                <div className="flex items-center gap-2">
                  {tech.icon}
                  <span className="hidden md:inline">
                    {tech.id === "overview" ? "Overview" : 
                     tech.id === "assembly" ? "Assembly" : 
                     tech.id === "waterjet" ? "Waterjet" : 
                     tech.id === "laser" ? "Laser" : "Extrusions"}
                  </span>
                </div>
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
                    
                    {tech.applications && (
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-primary">Common Applications</h3>
                        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                          {tech.applications.map((application, i) => (
                            <li key={i}>{application}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {tech.materials && (
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
                    )}
                    
                    {tech.processes && (
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-primary">Assembly Processes</h3>
                        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                          {tech.processes.map((process, i) => (
                            <li key={i}>{process}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {tech.specifications && (
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-primary">Technical Specifications</h3>
                        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                          {tech.specifications.map((spec, i) => (
                            <li key={i}>{spec}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
              
              <div className="mt-8 text-center">
                <Link to="/upload-file" className="button-primary inline-flex items-center gap-2">
                  Get an Instant Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </PageTemplate>
  );
};

export default SheetMetalFabrication;
