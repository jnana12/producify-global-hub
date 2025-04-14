
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Scissors } from "lucide-react";

const LaserCutting: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Laser Cutting"
      description="Our precision laser cutting service uses focused high-powered lasers to cut sheet metal with exceptional accuracy, clean edges, and intricate detail for various metal types and thicknesses."
      icon={<Scissors className="w-6 h-6 text-primary" />}
      features={[
        "High precision cutting (±0.1mm tolerance)",
        "Clean edges requiring minimal finishing",
        "Intricate and detailed cuts possible",
        "Materials including steel, stainless steel, aluminum",
        "Thickness range from 0.5mm to 20mm",
        "Rapid production for short lead times"
      ]}
    />
  );
};

export default LaserCutting;
