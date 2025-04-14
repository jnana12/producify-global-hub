
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Layers } from "lucide-react";

const Overmoulding: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Overmoulding"
      description="Overmoulding is a multi-step injection moulding process that combines multiple materials into a single part, creating components with complex geometries, integrated soft-touch areas, or improved ergonomics."
      icon={<Layers className="w-6 h-6 text-primary" />}
      features={[
        "Combining hard and soft materials in one part",
        "Improved ergonomics and grip",
        "Enhanced aesthetics with multiple colors",
        "Reduced assembly requirements",
        "Improved part durability and functionality",
        "Sealing, dampening, and insulation options"
      ]}
    />
  );
};

export default Overmoulding;
