
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Droplets } from "lucide-react";

const WaterjetCutting: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Waterjet Cutting"
      description="Our waterjet cutting service uses high-pressure water mixed with abrasive particles to precisely cut various materials without heat-affected zones, ideal for heat-sensitive materials."
      icon={<Droplets className="w-6 h-6 text-primary" />}
      features={[
        "No heat-affected zone or thermal distortion",
        "Suitable for virtually any material",
        "Thickness up to 150mm depending on material",
        "Precision cutting with tight tolerances",
        "Minimal material waste with narrow kerf",
        "Complex shapes and intricate details possible"
      ]}
    />
  );
};

export default WaterjetCutting;
