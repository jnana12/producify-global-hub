
import React from "react";
import CapabilityTemplate from "../../../components/capabilities/CapabilityTemplate";
import { Printer } from "lucide-react";

const MJF: React.FC = () => {
  return (
    <CapabilityTemplate
      title="Multi-Jet Fusion (MJF)"
      description="Multi-Jet Fusion is an advanced powder-based 3D printing technology that delivers exceptional detail, dimensional accuracy, and consistent mechanical properties with high productivity."
      icon={<Printer className="w-6 h-6 text-primary" />}
      features={[
        "Superior surface quality compared to SLS",
        "Excellent dimensional accuracy and repeatability",
        "Isotropic mechanical properties",
        "High-detail complex geometries",
        "Cost-effective for medium batch production",
        "Primarily nylon-based materials with various properties"
      ]}
    />
  );
};

export default MJF;
