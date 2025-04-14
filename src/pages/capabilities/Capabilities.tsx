
import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Box, Layers, Cog, Scissors } from "lucide-react";
import { motion } from "framer-motion";

const Capabilities: React.FC = () => {
  const capabilities = [
    {
      title: "3D Printing",
      description: "Explore our range of 3D printing technologies including FDM, MJF, SLS, SLA, and metal 3D printing options.",
      icon: <Printer className="w-8 h-8 text-primary" />,
      link: "/capabilities/3d-printing",
      delay: 0.1,
    },
    {
      title: "Injection Moulding",
      description: "Discover our injection moulding services including standard injection moulding, overmoulding, and insert moulding.",
      icon: <Box className="w-8 h-8 text-primary" />,
      link: "/capabilities/injection-moulding",
      delay: 0.2,
    },
    {
      title: "Surface Finishes",
      description: "Learn about our various surface finishing options for sheet metal, CNC machined parts, and 3D printed components.",
      icon: <Layers className="w-8 h-8 text-primary" />,
      link: "/capabilities/surface-finishes",
      delay: 0.3,
    },
    {
      title: "CNC Machining",
      description: "See how our state-of-the-art CNC machining capabilities including CNC milling and turning can bring your designs to life.",
      icon: <Cog className="w-8 h-8 text-primary" />,
      link: "/capabilities/cnc-machining",
      delay: 0.4,
    },
    {
      title: "Sheet Metal Fabrication",
      description: "Explore our sheet metal fabrication options including assembly and subassembly, waterjet cutting, laser cutting, extrusions, and die casting.",
      icon: <Scissors className="w-8 h-8 text-primary" />,
      link: "/capabilities/sheet-metal-fabrication",
      delay: 0.5,
    },
  ];

  return (
    <PageTemplate 
      title="Manufacturing Capabilities" 
      description="Discover our comprehensive range of manufacturing technologies and processes that can bring your designs to reality with precision and quality."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: capability.delay }}
          >
            <Card className="h-full glass-morphism overflow-hidden hover-glow group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-gradient text-2xl">{capability.title}</CardTitle>
                  <div className="bg-background/30 p-2 rounded-full backdrop-blur-sm">
                    {capability.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80">{capability.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={capability.link} className="button-outline w-full">
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Capabilities;
