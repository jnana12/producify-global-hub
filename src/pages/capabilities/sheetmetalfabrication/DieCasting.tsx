
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Boxes } from "lucide-react";

const DieCasting: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Die Casting"
      description="Our die casting services create highly accurate metal parts by injecting molten metal into reusable molds under high pressure, ideal for complex geometries and high-volume production."
      icon={<Boxes className="w-6 h-6 text-primary" />}
      features={[
        "Excellent dimensional stability and repeatability",
        "High production rates for large volumes",
        "Complex geometries with fine details possible",
        "Aluminum, zinc, and magnesium alloys available",
        "Excellent surface finishes requiring minimal post-processing",
        "Cost-effective for medium to high volumes"
      ]}
    />
  );
};

export default DieCasting;
