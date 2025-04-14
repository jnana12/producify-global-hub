
import React, { useState } from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Materials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("cnc");
  
  const materials = {
    "cnc": [
      {
        name: "Aluminum",
        properties: "Lightweight, excellent thermal conductivity, good corrosion resistance",
        applications: "Aerospace components, consumer electronics, automotive parts"
      },
      {
        name: "Stainless Steel",
        properties: "High strength, excellent corrosion resistance, good temperature resistance",
        applications: "Medical devices, food processing equipment, marine applications"
      },
      {
        name: "Brass",
        properties: "Good machinability, electrical conductivity, and corrosion resistance",
        applications: "Electrical components, plumbing fixtures, decorative hardware"
      },
    ],
    "3d-printing": [
      {
        name: "PLA",
        properties: "Biodegradable, easy to print, rigid",
        applications: "Prototypes, display models, low-stress components"
      },
      {
        name: "ABS",
        properties: "Durable, impact-resistant, temperature resistant",
        applications: "Functional prototypes, end-use parts, automotive components"
      },
      {
        name: "Nylon",
        properties: "Strong, flexible, abrasion-resistant",
        applications: "Functional parts, gears, hinges, snap-fits"
      },
    ],
    "injection-moulding": [
      {
        name: "Polypropylene (PP)",
        properties: "Chemical resistant, tough, good fatigue resistance",
        applications: "Consumer products, packaging, automotive parts"
      },
      {
        name: "ABS",
        properties: "Impact resistant, rigid, good surface finish",
        applications: "Electronic housings, automotive components, consumer goods"
      },
      {
        name: "Polycarbonate (PC)",
        properties: "Extremely impact resistant, transparent, heat resistant",
        applications: "Safety equipment, medical devices, automotive components"
      },
    ],
    "sheet-metal": [
      {
        name: "Mild Steel",
        properties: "Economical, weldable, formable, magnetic",
        applications: "Structural components, brackets, enclosures"
      },
      {
        name: "Aluminum",
        properties: "Lightweight, corrosion-resistant, good thermal conductivity",
        applications: "Electronic enclosures, panels, automotive components"
      },
      {
        name: "Stainless Steel",
        properties: "Corrosion-resistant, aesthetic finish, high strength",
        applications: "Food processing equipment, medical devices, architectural elements"
      },
    ]
  };

  const renderMaterialList = () => {
    const selectedMaterials = materials[activeTab as keyof typeof materials] || [];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedMaterials.map((material, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full glass-morphism">
              <CardHeader>
                <CardTitle className="text-gradient">{material.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-primary mb-1">Properties</h3>
                  <p className="text-foreground/80">{material.properties}</p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-1">Common Applications</h3>
                  <p className="text-foreground/80">{material.applications}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <PageTemplate 
      title="Materials Library" 
      description="Explore our comprehensive range of materials for different manufacturing processes and find the perfect match for your application."
    >
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="cnc" onValueChange={setActiveTab} className="w-full mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            <TabsTrigger value="cnc">CNC Machining</TabsTrigger>
            <TabsTrigger value="3d-printing">3D Printing</TabsTrigger>
            <TabsTrigger value="injection-moulding">Injection Moulding</TabsTrigger>
            <TabsTrigger value="sheet-metal">Sheet Metal</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-8">
            {renderMaterialList()}
          </TabsContent>
        </Tabs>
      </div>
    </PageTemplate>
  );
};

export default Materials;
