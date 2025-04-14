
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Brush } from "lucide-react";

const PrintingFinishes: React.FC = () => {
  return (
    <CapabilityTemplate
      title="3D Printing Surface Finishes"
      description="Transform your 3D printed parts with our professional finishing options that can achieve smooth surfaces, custom colors, and enhanced mechanical properties."
      icon={<Brush className="w-6 h-6 text-primary" />}
      features={[
        "Vapor smoothing for SLS and MJF parts",
        "Layer removal for SLA and FDM parts",
        "Custom painting and color matching",
        "Metallization and chrome-like finishes",
        "Dyeing for consistent coloration",
        "Tumble polishing for smooth surfaces"
      ]}
    />
  );
};

export default PrintingFinishes;
