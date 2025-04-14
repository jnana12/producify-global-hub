
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cog, Printer, Box, Scissors } from "lucide-react";
import { motion } from "framer-motion";

const Materials: React.FC = () => {
  const categories = [
    {
      id: "all",
      name: "All Materials",
      icon: <div className="flex space-x-1">
              <Cog className="w-5 h-5" />
              <Printer className="w-5 h-5" />
              <Box className="w-5 h-5" />
              <Scissors className="w-5 h-5" />
            </div>,
    },
    {
      id: "cnc",
      name: "CNC Machining",
      icon: <Cog className="w-5 h-5" />,
    },
    {
      id: "3d-printing",
      name: "3D Printing",
      icon: <Printer className="w-5 h-5" />,
    },
    {
      id: "injection-moulding",
      name: "Injection Moulding",
      icon: <Box className="w-5 h-5" />,
    },
    {
      id: "sheet-metal",
      name: "Sheet Metal",
      icon: <Scissors className="w-5 h-5" />,
    },
  ];

  const materials = {
    cnc: [
      { name: "Aluminum 6061", properties: "Excellent strength-to-weight ratio, good corrosion resistance", applications: "Aerospace, automotive, consumer products" },
      { name: "Aluminum 7075", properties: "High strength, good fatigue resistance", applications: "Aircraft components, military equipment" },
      { name: "Brass C360", properties: "Good machinability, corrosion resistant", applications: "Electrical components, decorative hardware" },
      { name: "Carbon Steel 1045", properties: "Good strength, can be heat treated", applications: "Shafts, gears, fasteners" },
      { name: "Stainless Steel 303", properties: "Good corrosion resistance, excellent machinability", applications: "Food processing equipment, marine applications" },
      { name: "Stainless Steel 304", properties: "Excellent corrosion resistance, good formability", applications: "Medical devices, kitchen equipment" },
      { name: "Delrin (Acetal)", properties: "Low friction, good dimensional stability", applications: "Gears, bearings, bushings" },
      { name: "Nylon 6/6", properties: "Good wear resistance, self-lubricating", applications: "Bearings, gears, machine parts" },
    ],
    "3d-printing": [
      { name: "PLA", properties: "Easy to print, biodegradable", applications: "Prototypes, display models" },
      { name: "ABS", properties: "Good impact strength, heat resistant", applications: "Functional prototypes, end-use parts" },
      { name: "PETG", properties: "Strong, chemical resistant", applications: "Water tanks, mechanical parts" },
      { name: "TPU", properties: "Flexible, abrasion resistant", applications: "Gaskets, protective cases" },
      { name: "Nylon", properties: "Strong, durable, self-lubricating", applications: "Functional parts, living hinges" },
      { name: "PA 12 (SLS)", properties: "Good mechanical properties, biocompatible", applications: "Functional prototypes, end-use parts" },
      { name: "Aluminum-filled", properties: "Metallic appearance, good thermal conductivity", applications: "Heat sinks, decorative items" },
      { name: "Carbon Fiber-filled", properties: "High stiffness, lightweight", applications: "Aerospace, motorsport components" },
    ],
    "injection-moulding": [
      { name: "ABS", properties: "Impact resistant, good surface finish", applications: "Automotive parts, consumer goods" },
      { name: "Polypropylene (PP)", properties: "Chemical resistant, good fatigue resistance", applications: "Living hinges, food containers" },
      { name: "Polycarbonate (PC)", properties: "Impact resistant, transparent", applications: "Safety equipment, medical devices" },
      { name: "Nylon 6/6", properties: "Strong, abrasion resistant", applications: "Gears, bearings, automotive components" },
      { name: "PEEK", properties: "High temperature resistance, chemically resistant", applications: "Aerospace, medical implants" },
      { name: "TPE", properties: "Flexible, soft touch", applications: "Grips, seals, gaskets" },
      { name: "POM (Acetal)", properties: "Good dimensional stability, low friction", applications: "Precision parts, gears, bearings" },
    ],
    "sheet-metal": [
      { name: "Mild Steel", properties: "Good formability, weldability", applications: "General purpose, structural" },
      { name: "Stainless Steel 304", properties: "Corrosion resistant, formable", applications: "Food processing, medical" },
      { name: "Stainless Steel 316", properties: "Superior corrosion resistance", applications: "Marine, chemical processing" },
      { name: "Aluminum 5052", properties: "Good formability, corrosion resistant", applications: "Marine applications, signage" },
      { name: "Aluminum 6061", properties: "Good strength, weldable", applications: "Structural applications, frames" },
      { name: "Brass", properties: "Good conductivity, formable", applications: "Electrical components, decorative" },
      { name: "Copper", properties: "Excellent conductivity", applications: "Electrical components, heat exchangers" },
    ],
  };

  // Combine all materials for the "all" tab
  materials.all = [
    ...materials.cnc,
    ...materials["3d-printing"],
    ...materials["injection-moulding"],
    ...materials["sheet-metal"],
  ];

  return (
    <PageTemplate 
      title="Materials Library" 
      description="Explore our extensive range of materials for CNC machining, 3D printing, injection moulding, and sheet metal fabrication to find the perfect match for your application."
    >
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Choose the Right Material for Your Application</h2>
          <p className="text-lg text-foreground/80">
            Material selection is a critical aspect of the manufacturing process that directly impacts the performance, durability, and cost of your parts. Our extensive materials library offers options across multiple manufacturing processes to ensure you can find the perfect material for your specific requirements.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden md:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {materials[category.id].map((material, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="h-full glass-morphism hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-gradient">{material.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-primary mb-1">Key Properties</h4>
                          <p className="text-sm text-foreground/80">{material.properties}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-primary mb-1">Common Applications</h4>
                          <p className="text-sm text-foreground/80">{material.applications}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Not Sure Which Material to Choose?</h3>
          <p className="text-lg text-foreground/80 mb-6">
            Our engineering team can help you select the right material for your specific application and requirements.
          </p>
          <a href="/contact" className="button-primary inline-flex mx-auto">Get Expert Advice</a>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Materials;
