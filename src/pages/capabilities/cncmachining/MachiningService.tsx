
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Cog } from "lucide-react";

const MachiningService: React.FC = () => {
  return (
    <CapabilityTemplate
      title="CNC Machining Service"
      description="Our precision CNC machining service delivers high-quality parts with excellent dimensional accuracy and surface finishes for both prototyping and production applications."
      icon={<Cog className="w-6 h-6 text-primary" />}
      features={[
        "Precision machining with tight tolerances",
        "3, 4, and 5-axis CNC capabilities",
        "Wide range of materials (metals, plastics, composites)",
        "Prototype to production quantities",
        "Design for manufacturability (DFM) feedback",
        "Fast turnaround options available"
      ]}
    />
  );
};

export default MachiningService;
