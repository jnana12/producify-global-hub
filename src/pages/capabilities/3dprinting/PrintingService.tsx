
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Printer } from "lucide-react";

const PrintingService: React.FC = () => {
  return (
    <CapabilityTemplate
      title="3D Printing Service"
      description="Our comprehensive 3D printing service offers fast, accurate, and cost-effective production of complex parts with customizable material properties and finishes."
      icon={<Printer className="w-6 h-6 text-primary" />}
      features={[
        "Fast turnaround times from 24 hours",
        "Wide range of materials including plastics, resins, and metals",
        "Complex geometries and internal structures",
        "Highly accurate surface detail",
        "Functional prototypes or end-use parts",
        "Various post-processing and finishing options"
      ]}
    />
  );
};

export default PrintingService;
