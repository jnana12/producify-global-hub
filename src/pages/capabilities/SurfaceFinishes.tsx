
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";

const SurfaceFinishes: React.FC = () => {
  return (
    <PageTemplate 
      title="Surface Finishes" 
      description="Explore our wide range of surface finishing options for sheet metal, CNC machined parts, and 3D printed components."
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Coming Soon</h2>
        <p className="text-lg text-foreground/80">
          This page is under development. Please check back later for detailed information about our surface finishing capabilities.
        </p>
      </div>
    </PageTemplate>
  );
};

export default SurfaceFinishes;
