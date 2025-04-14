
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Zap } from "lucide-react";

const SLS: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Selective Laser Sintering (SLS)"
      description="Selective Laser Sintering uses a high-powered laser to fuse small particles of polymer powder into a solid structure, producing durable parts with complex geometries without support structures."
      icon={<Zap className="w-6 h-6 text-primary" />}
      features={[
        "No support structures required",
        "Excellent for complex geometries",
        "Good mechanical properties and durability",
        "Variety of nylon-based materials available",
        "Suitable for functional prototypes and end-use parts",
        "Cost-effective for medium production runs"
      ]}
    />
  );
};

export default SLS;
