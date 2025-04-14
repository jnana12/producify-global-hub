
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Lightbulb } from "lucide-react";

const SLA: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Stereolithography (SLA)"
      description="Stereolithography uses a laser to cure liquid photopolymer resin layer-by-layer, creating highly detailed parts with smooth surface finishes ideal for visual prototypes and detailed components."
      icon={<Lightbulb className="w-6 h-6 text-primary" />}
      features={[
        "Highest resolution and surface quality",
        "Exceptional detail for small features",
        "Smooth surface finish requires minimal post-processing",
        "Transparent and translucent material options",
        "Wide range of specialty resins (flexible, castable, dental)",
        "Ideal for visual prototypes and jewelry"
      ]}
    />
  );
};

export default SLA;
