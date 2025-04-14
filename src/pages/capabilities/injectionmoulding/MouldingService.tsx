
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Box } from "lucide-react";

const MouldingService: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Injection Moulding Service"
      description="Our injection moulding service delivers high-quality, repeatable plastic parts with excellent surface finishes and tight tolerances, ideal for high-volume production runs."
      icon={<Box className="w-6 h-6 text-primary" />}
      features={[
        "Cost-effective for high-volume production",
        "Excellent surface finish and detail",
        "Fast production cycles after tooling",
        "Wide range of thermoplastic materials",
        "Tight tolerances and dimensional stability",
        "Bridge-to-production and full-scale manufacturing"
      ]}
    />
  );
};

export default MouldingService;
