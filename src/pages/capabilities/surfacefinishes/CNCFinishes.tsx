
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Paintbrush } from "lucide-react";

const CNCFinishes: React.FC = () => {
  return (
    <CapabilityTemplate
      title="CNC Surface Finishes"
      description="Our CNC machined parts can be enhanced with a wide range of surface finishes to improve aesthetics, corrosion resistance, and wear properties tailored to your specific requirements."
      icon={<Paintbrush className="w-6 h-6 text-primary" />}
      features={[
        "Anodizing for aluminum (Type II & Type III)",
        "Powder coating for durability and color options",
        "Bead blasting for uniform matte finish",
        "Polishing for mirror or satin finish",
        "Electroplating for enhanced appearance and wear",
        "Custom painting and color matching"
      ]}
    />
  );
};

export default CNCFinishes;
