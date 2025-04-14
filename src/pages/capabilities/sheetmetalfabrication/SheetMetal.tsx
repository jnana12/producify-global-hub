
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Square } from "lucide-react";

const SheetMetal: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Sheet Metal"
      description="Our sheet metal fabrication services provide precision-cut, formed, and finished metal parts for a wide range of applications across industries, from prototypes to production runs."
      icon={<Square className="w-6 h-6 text-primary" />}
      features={[
        "Materials including aluminum, steel, stainless steel",
        "Thickness ranging from 0.5mm to 10mm",
        "Precision cutting, bending, and forming",
        "Various surface finish options",
        "Tight tolerances and dimensional stability",
        "Fast prototyping and production capabilities"
      ]}
    />
  );
};

export default SheetMetal;
