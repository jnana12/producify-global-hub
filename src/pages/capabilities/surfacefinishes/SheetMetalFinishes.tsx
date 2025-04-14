
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Paintbrush } from "lucide-react";

const SheetMetalFinishes: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Sheet Metal Surface Finishes"
      description="Enhance the appearance and performance of your sheet metal parts with our comprehensive range of finishing options, including powder coating, plating, anodizing, and more."
      icon={<Paintbrush className="w-6 h-6 text-primary" />}
      features={[
        "Powder coating in various colors and textures",
        "Zinc plating for corrosion resistance",
        "Brushed or polished finishes",
        "Anodizing for aluminum parts",
        "Painted finishes with custom color matching",
        "Passivation for stainless steel"
      ]}
    />
  );
};

export default SheetMetalFinishes;
