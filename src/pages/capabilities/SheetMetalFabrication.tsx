
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";

const SheetMetalFabrication: React.FC = () => {
  return (
    <PageTemplate 
      title="Sheet Metal Fabrication" 
      description="Our sheet metal fabrication services include cutting, bending, assembly, and various finishing options for your metal parts."
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Coming Soon</h2>
        <p className="text-lg text-foreground/80">
          This page is under development. Please check back later for detailed information about our sheet metal fabrication capabilities.
        </p>
      </div>
    </PageTemplate>
  );
};

export default SheetMetalFabrication;
