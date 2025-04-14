
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Hammer } from "lucide-react";

const MetalPrinting: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Metal 3D Printing (DMLS and SLM)"
      description="Our metal 3D printing services use Direct Metal Laser Sintering (DMLS) and Selective Laser Melting (SLM) technologies to produce complex, high-performance metal parts with outstanding mechanical properties."
      icon={<Hammer className="w-6 h-6 text-primary" />}
      features={[
        "High-strength functional metal parts",
        "Complex internal geometries impossible with traditional manufacturing",
        "Wide range of metals (aluminum, titanium, stainless steel, Inconel)",
        "Reduced assembly requirements with consolidated designs",
        "Lightweight lattice structures and topology optimization",
        "Ideal for aerospace, automotive, and medical applications"
      ]}
    />
  );
};

export default MetalPrinting;
