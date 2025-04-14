
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Router, RotateCcw } from "lucide-react";

const CNCMachining: React.FC = () => {
  const technologies = [
    {
      id: "milling",
      name: "CNC Milling",
      description: "CNC milling uses rotating cutting tools to remove material from a workpiece. This versatile process can create complex 3D shapes with excellent precision.",
      advantages: [
        "Multiple axis machining (3-5 axis)",
        "Complex 3D geometries",
        "High precision and repeatability",
        "Variety of finishes possible"
      ],
      applications: [
        "Molds and dies",
        "Custom enclosures",
        "Structural components",
        "Aerospace parts",
        "Prototype development"
      ],
      capabilities: [
        "3-axis vertical milling",
        "5-axis simultaneous milling",
        "Micro-milling",
        "High-speed machining",
        "Custom fixtures and tooling"
      ],
      icon: <Router className="w-8 h-8 text-primary" />
    },
    {
      id: "turning",
      name: "CNC Turning",
      description: "CNC turning creates cylindrical parts by rotating the workpiece against a cutting tool. It's ideal for shafts, pins, and other cylindrical or conical components.",
      advantages: [
        "Excellent concentricity",
        "High surface quality",
        "Cost-effective for round parts",
        "Live tooling options available"
      ],
      applications: [
        "Shafts and axles",
        "Bushings and spacers",
        "Fasteners and fittings",
        "Custom hardware",
        "Precision components"
      ],
      capabilities: [
        "CNC lathes with live tooling",
        "Multi-spindle turning",
        "Swiss-type turning",
        "Thread cutting and knurling",
        "Precision boring and grooving"
      ],
      icon: <RotateCcw className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <PageTemplate 
      title="CNC Machining" 
      description="Our precision CNC machining services deliver high-quality parts with tight tolerances using a wide range of materials."
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Precision CNC Machining Services</h2>
          <p className="text-lg text-foreground/80">
            Our CNC machining services deliver high-quality parts with tight tolerances using a wide range of materials including metals, plastics, and composites. With advanced multi-axis capabilities, we can produce complex geometries with excellent surface finishes for prototypes to production quantities.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-md">
              <span className="font-medium">Tolerance:</span>
              <span>±0.025mm</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-md">
              <span className="font-medium">Materials:</span>
              <span>Metals, Plastics, Composites</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-md">
              <span className="font-medium">Lead time:</span>
              <span>From 3 days</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/upload-file" className="button-primary inline-flex items-center gap-2">
              Get an Instant Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
        
        <Tabs defaultValue="milling" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-2 mb-8">
            {technologies.map((tech) => (
              <TabsTrigger key={tech.id} value={tech.id}>
                <div className="flex items-center gap-2">
                  {tech.icon}
                  <span>{tech.id === "milling" ? "CNC Milling" : "CNC Turning"}</span>
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
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-primary">Common Applications</h3>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                        {tech.applications.map((application, i) => (
                          <li key={i}>{application}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-primary">
                        Key Capabilities
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tech.capabilities.map((item, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-muted text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default CNCMachining;
