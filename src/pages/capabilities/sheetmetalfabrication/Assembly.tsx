
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Link } from "lucide-react";

const Assembly: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Assembly and Subassembly"
      description="Our assembly and subassembly services integrate components into complete functional units, reducing your supply chain complexity and ensuring quality throughout the manufacturing process."
      icon={<Link className="w-6 h-6 text-primary" />}
      features={[
        "Component integration into complete assemblies",
        "Welding, fastening, and adhesive bonding",
        "Quality control and testing of assemblies",
        "Reduced supply chain complexity",
        "Lower overall manufacturing costs",
        "Single point of accountability for quality"
      ]}
    />
  );
};

export default Assembly;
