
import React, { useState } from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Materials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("cnc");
  
  // CNC Machining materials
  const cncMaterials = [
    {
      material: "ALUMINIUM",
      materialGroup: "Stainless Steel – Grey (303), Stainless Steel – Grey (304), Stainless Steel – Grey (304L), Stainless Steel – Grey (316), Stainless Steel – Grey (316L)",
      cost: "£"
    },
    {
      material: "STAINLESS STEEL",
      materialGroup: "Stainless Steel – Grey (303), Stainless Steel – Grey (304), Stainless Steel – Grey (304L), Stainless Steel – Grey (316), Stainless Steel – Grey (316L)",
      cost: "££££"
    },
    {
      material: "COPPER",
      materialGroup: "Copper – Red/ Bronze",
      cost: "££"
    },
    {
      material: "BRASS",
      materialGroup: "Brass – Yellow (CZ 121), Brass – Yellow (CZ 131)",
      cost: "££"
    },
    {
      material: "MAGNESIUM",
      materialGroup: "Magnesium – Grey (Magnesium AZ31)",
      cost: "££££"
    },
    {
      material: "STEEL ALLOY",
      materialGroup: "Steel Alloy – Grey (Allow 4140)",
      cost: "£££"
    },
    {
      material: "TITANIUM",
      materialGroup: "Titanium – Grey (Grade 5 Ti6AI4V)",
      cost: "£££££"
    }
  ];
  
  // 3D Printing materials
  const printingMaterials = [
    {
      technology: "SLS",
      material: "PA2200 Nylon",
      code: "Carbon Black, Brilliant White",
      cost: "£"
    },
    {
      technology: "MFJ",
      material: "PA12 Nylon",
      code: "Black",
      cost: "£"
    },
    {
      technology: "FDM",
      material: "ABS",
      code: "Orange, Black, Grey, Red, White, Yellow, Blue, Green",
      cost: "£"
    },
    {
      technology: "FDM",
      material: "PLA",
      code: "Orange, Black, Grey, Red, White, Yellow, Blue, Green",
      cost: "£"
    }
  ];
  
  // Injection moulding materials
  const injectionMaterials = [
    {
      materialName: "Acetal",
      abbreviation: "POM",
      availableMaterials: "Copolymer, Grey\nCopolymer, Natural\nHomopolymer, Black\nHomopolymer, Natural\nHomopolymer, Black 20% glass fibre-UV\nHomopolymer, Black UV stabilisted"
    },
    {
      materialName: "Acrylic",
      abbreviation: "PMMA",
      availableMaterials: "PMMA, Clear\nPMMA, Frosted"
    },
    {
      materialName: "Acrylonitrile Butadiene Styrene",
      abbreviation: "ABS",
      availableMaterials: "ABS, Black\nABS, White\nABS, Natural\nABS, Clear\nABS/PC, Black"
    },
    {
      materialName: "Polyamide 6 (Nylon)",
      abbreviation: "PA6",
      availableMaterials: "PA6, Natural\nPA6, Black 30% Glass Fibre\nPA6, Natural 30% Glass Fibre"
    },
    {
      materialName: "Polyamide 6/6 (Nylon)",
      abbreviation: "PA6/6",
      availableMaterials: "PA6/6, Natural 20% Glass\nPA6/6, Black 25% Glass\nPA6/6, Black 30% Glass Fibre"
    },
    {
      materialName: "Polycarbonate",
      abbreviation: "PC",
      availableMaterials: "PC, Clear\nPC, Black\nPC, Black 20% Glass Fibre\nPC, Black 40% Glass Fibre"
    },
    {
      materialName: "Polyester – Thermoplastic",
      abbreviation: "PBT/PET",
      availableMaterials: "PBT, Black\nPBT, Natural\nPBT, Black 15% Glass Fibre"
    },
    {
      materialName: "Polyetheretherketone",
      abbreviation: "PEEK",
      availableMaterials: "(On Request)"
    },
    {
      materialName: "Polyetherimide",
      abbreviation: "PEI",
      availableMaterials: "PEI, Black\nPEI, Natural"
    },
    {
      materialName: "Polyethylene – Low Density",
      abbreviation: "LDPE",
      availableMaterials: "LDPE, Natural"
    },
    {
      materialName: "Polyethylene – High Density",
      abbreviation: "HDPE",
      availableMaterials: "HDPE, Natural"
    },
    {
      materialName: "Polyphenylene Sulphide",
      abbreviation: "PPS",
      availableMaterials: "Black 40% Glass Fibre"
    },
    {
      materialName: "Polypropylene",
      abbreviation: "PP",
      availableMaterials: "PP, Natural\nPP, Natural 20% Glass"
    },
    {
      materialName: "Polystyrene – General purpose",
      abbreviation: "PS(GPPS)",
      availableMaterials: "PS (GPPS), Clear"
    },
    {
      materialName: "Thermoplastic Elastomer",
      abbreviation: "TPE",
      availableMaterials: "TPE, Black\nTPE, Translucent"
    },
    {
      materialName: "Ether-Ester Elastomers",
      abbreviation: "TPC-ET",
      availableMaterials: "TPC-ET, Natural"
    },
    {
      materialName: "Polyurethane",
      abbreviation: "TPU",
      availableMaterials: "TPU, Natural"
    },
    {
      materialName: "Thermoplastic Vulcanizates",
      abbreviation: "TPV",
      availableMaterials: "TPV, Black\nTPV, Natural"
    },
    {
      materialName: "Liquid Silicone Rubber Materials\nPolysiloxanes",
      abbreviation: "Silicone",
      availableMaterials: "Silicone, Clear\nSilicone, Transparent"
    }
  ];
  
  // Sheet metal materials
  const sheetMetalMaterials = [
    {
      material: "MILD STEEL",
      accreditation: "ISO 9001, AS 9100, AS 9110, AS 9120, ISO 13485, Jaguar Land Rover",
      thickness: "0.9, 1.2, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20"
    },
    {
      material: "STAINLESS STEEL",
      accreditation: "ISO 9001, AS 9100, AS 9110, AS 9120, ISO 13485, Jaguar Land Rover",
      thickness: "0.9, 1.2, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20"
    },
    {
      material: "ALUMINIUM",
      accreditation: "ISO 9001, AS 9100, AS 9110, AS 9120, ISO 13485, Jaguar Land Rover",
      thickness: "0.9, 1.2, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20"
    }
  ];

  const renderCNCMaterialsList = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-gradient">Available Materials and Material Grades</h2>
        <h3 className="text-xl font-semibold mb-3">Metals</h3>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="text-left p-3">Material</th>
              <th className="text-left p-3">Material Group</th>
              <th className="text-left p-3">Cost</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {cncMaterials.map((material, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50">
                <td className="p-3 font-medium">{material.material}</td>
                <td className="p-3">{material.materialGroup}</td>
                <td className="p-3">{material.cost}</td>
                <td className="p-3 text-right">
                  <Link to="/upload-file" className="button-outline inline-flex items-center gap-1 text-sm px-3 py-1">
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const render3DPrintingMaterialsList = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-gradient">Available 3D Printing Materials and Material Options</h2>
        <h3 className="text-xl font-semibold mb-3">Plastics/Resins</h3>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="text-left p-3">Technology</th>
              <th className="text-left p-3">Material</th>
              <th className="text-left p-3">Color Options</th>
              <th className="text-left p-3">Cost</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {printingMaterials.map((material, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50">
                <td className="p-3 font-medium">{material.technology}</td>
                <td className="p-3">{material.material}</td>
                <td className="p-3">{material.code}</td>
                <td className="p-3">{material.cost}</td>
                <td className="p-3 text-right">
                  <Link to="/upload-file" className="button-outline inline-flex items-center gap-1 text-sm px-3 py-1">
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderInjectionMouldingMaterialsList = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-gradient">Plastic Injection Moulding Materials</h2>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="text-left p-3">Material Name</th>
              <th className="text-left p-3">Abbreviation</th>
              <th className="text-left p-3">Available Materials</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {injectionMaterials.map((material, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50">
                <td className="p-3 font-medium">{material.materialName}</td>
                <td className="p-3">{material.abbreviation}</td>
                <td className="p-3 whitespace-pre-line">{material.availableMaterials}</td>
                <td className="p-3 text-right">
                  <Link to="/upload-file" className="button-outline inline-flex items-center gap-1 text-sm px-3 py-1">
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderSheetMetalMaterialsList = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-gradient">Available Materials and Material Grades</h2>
        <h3 className="text-xl font-semibold mb-3">Metals</h3>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="text-left p-3">Material</th>
              <th className="text-left p-3">Accreditation</th>
              <th className="text-left p-3">Thickness (mm)</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sheetMetalMaterials.map((material, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/50">
                <td className="p-3 font-medium">{material.material}</td>
                <td className="p-3">{material.accreditation}</td>
                <td className="p-3">{material.thickness}</td>
                <td className="p-3 text-right">
                  <Link to="/upload-file" className="button-outline inline-flex items-center gap-1 text-sm px-3 py-1">
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderMaterialList = () => {
    switch(activeTab) {
      case "cnc":
        return renderCNCMaterialsList();
      case "3d-printing":
        return render3DPrintingMaterialsList();
      case "injection-moulding":
        return renderInjectionMouldingMaterialsList();
      case "sheet-metal":
        return renderSheetMetalMaterialsList();
      default:
        return renderCNCMaterialsList();
    }
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
