
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTemplate from "../../../components/layout/PageTemplate";
import { Router, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";

const CNCMilling: React.FC = () => {
  return (
    <CapabilityTemplate
      title="CNC Milling"
      description="Our CNC milling services provide precise material removal using rotary cutters to machine complex 3D shapes with excellent surface finishes and tight tolerances."
      icon={<Router className="w-6 h-6 text-primary" />}
      features={[
        "3, 4, and 5-axis machining capabilities",
        "Complex geometries and pocket features",
        "Wide range of materials (metals, plastics, composites)",
        "Tolerances down to ±0.025mm",
        "Surface finishes to 0.8 Ra or better",
        "Parts up to 1000mm × 500mm × 300mm"
      ]}
    />
  );
};

export default CNCMilling;
