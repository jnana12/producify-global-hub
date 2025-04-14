
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { ArrowRightFromLine } from "lucide-react";

const Extrusions: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Extrusions"
      description="Our extrusion services produce parts with constant cross-sections by forcing material through a die, creating custom profiles ideal for structural framing, enclosures, and heat sinks."
      icon={<ArrowRightFromLine className="w-6 h-6 text-primary" />}
      features={[
        "Custom aluminum profiles and shapes",
        "Consistent cross-section throughout length",
        "High strength-to-weight ratio",
        "Various finishes including anodizing",
        "Secondary operations including cutting and machining",
        "Cost-effective for medium to high volumes"
      ]}
    />
  );
};

export default Extrusions;
