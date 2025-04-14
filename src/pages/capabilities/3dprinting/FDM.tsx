
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Layers } from "lucide-react";

const FDM: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Fused Deposition Modeling (FDM)"
      description="FDM technology builds parts layer-by-layer from the bottom up by heating and extruding thermoplastic filament, creating strong functional prototypes and production parts."
      icon={<Layers className="w-6 h-6 text-primary" />}
      features={[
        "Cost-effective for prototypes and low-volume production",
        "Good mechanical properties for functional testing",
        "Various thermoplastic materials (ABS, PLA, PETG, Nylon)",
        "Layer resolution from 0.1mm to 0.3mm",
        "Large build volumes available",
        "Quick production times for rapid prototyping"
      ]}
    />
  );
};

export default FDM;
