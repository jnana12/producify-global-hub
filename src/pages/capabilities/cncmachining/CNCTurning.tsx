
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { RotateCcw } from "lucide-react";

const CNCTurning: React.FC = () => {
  return (
    <CapabilityTemplate
      title="CNC Turning"
      description="CNC turning creates cylindrical parts by rotating the material against cutting tools, ideal for producing precise shafts, bushings, and other round components with excellent concentricity."
      icon={<RotateCcw className="w-6 h-6 text-primary" />}
      features={[
        "Highly accurate circular components",
        "Excellent concentricity and roundness",
        "Multi-axis capabilities for complex profiles",
        "Wide range of materials (metals, plastics)",
        "Tolerances down to ±0.025mm",
        "Ideal for components up to 300mm diameter"
      ]}
    />
  );
};

export default CNCTurning;
