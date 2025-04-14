
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { CornerDownRight } from "lucide-react";

const InsertMoulding: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Insert Moulding"
      description="Insert moulding embeds pre-formed components into a plastic injection-moulded part during the manufacturing process, creating complex assemblies in a single step for improved strength and functionality."
      icon={<CornerDownRight className="w-6 h-6 text-primary" />}
      features={[
        "Integration of metal inserts for added strength",
        "Reduced assembly requirements",
        "Better electrical conductivity when needed",
        "Improved wear resistance in high-stress areas",
        "Cost savings in manufacturing complex parts",
        "Ideal for electronic housings and connectors"
      ]}
    />
  );
};

export default InsertMoulding;
