
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Paintbrush, Layers, Hammer } from "lucide-react";

const SurfaceFinishes: React.FC = () => {
  const finishCategories = [
    {
      id: "sheet-metal",
      name: "Sheet Metal Finishes",
      description: "We offer a variety of finishes for sheet metal parts to enhance their appearance, durability, and performance.",
      icon: <Layers className="w-8 h-8 text-primary" />,
      finishes: [
        {
          name: "Powder Coating",
          description: "Provides a durable, high-quality finish with excellent resistance to corrosion, chemicals, and impact. Available in various colors and textures.",
          benefits: ["Excellent durability", "Wide color range", "Uniform coating", "Environmentally friendly"],
          applications: ["Furniture", "Automotive parts", "Appliances", "Architectural elements"],
        },
        {
          name: "Anodizing (for Aluminum)",
          description: "Creates a durable, corrosion-resistant oxide layer on aluminum surfaces. Can be dyed in various colors.",
          benefits: ["Enhanced corrosion resistance", "Increased wear resistance", "Decorative appearance", "Electrical insulation"],
          applications: ["Consumer electronics", "Architectural elements", "Aerospace components", "Sporting equipment"],
        },
        {
          name: "Zinc Plating",
          description: "Applies a thin layer of zinc to protect steel parts from corrosion. Available in clear, yellow, or black passivation.",
          benefits: ["Excellent corrosion protection", "Economical solution", "Suitable for threaded parts", "Good adhesion"],
          applications: ["Fasteners", "Automotive parts", "Electrical components", "Hardware items"],
        },
      ],
    },
    {
      id: "cnc",
      name: "CNC Surface Finishes",
      description: "Enhance the functionality and appearance of your CNC machined parts with our range of surface finishing options.",
      icon: <Hammer className="w-8 h-8 text-primary" />,
      finishes: [
        {
          name: "Bead Blasting",
          description: "Creates a uniform, matte surface texture by propelling small glass beads at high pressure against the part surface.",
          benefits: ["Removes tool marks", "Creates uniform appearance", "Improves paint adhesion", "Stress relief"],
          applications: ["Medical devices", "Aerospace components", "Consumer electronics", "Decorative items"],
        },
        {
          name: "Polishing",
          description: "Produces a smooth, reflective surface by progressively removing material with finer abrasives.",
          benefits: ["Mirror-like finish", "Reduced friction", "Improved corrosion resistance", "Enhanced appearance"],
          applications: ["Mold making", "Optical components", "Jewelry", "High-end consumer products"],
        },
        {
          name: "Hard Anodizing",
          description: "Creates a thick, hard oxide layer on aluminum parts for improved wear and corrosion resistance.",
          benefits: ["Exceptional hardness", "Excellent wear resistance", "Good dielectric properties", "Thermal resistance"],
          applications: ["Hydraulic components", "Firearm parts", "Sporting goods", "Electronic heat sinks"],
        },
      ],
    },
    {
      id: "3d-printing",
      name: "3D Printing Surface Finishes",
      description: "Transform the appearance and functionality of your 3D printed parts with our specialized post-processing options.",
      icon: <Paintbrush className="w-8 h-8 text-primary" />,
      finishes: [
        {
          name: "Vapor Smoothing",
          description: "Uses vaporized solvents to melt and smooth the outer surface of parts, reducing layer lines and creating a glossy finish.",
          benefits: ["Smooth surface", "Watertight parts", "Improved mechanical properties", "Enhanced appearance"],
          applications: ["Visual prototypes", "End-use parts", "Consumer products", "Fluid containers"],
        },
        {
          name: "Painting",
          description: "Application of primer and paint to enhance appearance and provide additional protection.",
          benefits: ["Custom colors", "Improved UV resistance", "Enhanced aesthetics", "Additional protection"],
          applications: ["Prototypes", "Display models", "Consumer products", "Architectural models"],
        },
        {
          name: "Dyeing",
          description: "Immersion of parts in colored dye solutions to add uniform color throughout the part.",
          benefits: ["Uniform coloration", "No added dimensional thickness", "Wide color range", "Good for flexible materials"],
          applications: ["Nylon parts", "TPU components", "Fashion accessories", "Consumer goods"],
        },
      ],
    },
  ];

  return (
    <PageTemplate 
      title="Surface Finishes" 
      description="Explore our wide range of surface finishing options for sheet metal, CNC machined parts, and 3D printed components."
    >
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="sheet-metal" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
            {finishCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {finishCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-gradient">{category.name}</h2>
                  <p className="text-lg text-foreground/80">{category.description}</p>
                </div>
                
                {category.finishes.map((finish, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card className="glass-morphism mb-6">
                      <CardHeader>
                        <CardTitle className="text-gradient text-2xl">{finish.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-foreground/80">{finish.description}</p>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-primary">Key Benefits</h3>
                          <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                            {finish.benefits.map((benefit, i) => (
                              <li key={i}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2 text-primary">Common Applications</h3>
                          <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                            {finish.applications.map((application, i) => (
                              <li key={i}>{application}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
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

export default SurfaceFinishes;
