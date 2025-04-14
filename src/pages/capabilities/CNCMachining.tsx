
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";

const CNCMachining: React.FC = () => {
  return (
    <PageTemplate 
      title="CNC Machining" 
      description="Our precision CNC machining services deliver high-quality parts with tight tolerances using a wide range of materials."
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Coming Soon</h2>
        <p className="text-lg text-foreground/80">
          This page is under development. Please check back later for detailed information about our CNC machining capabilities.
        </p>
      </div>
    </PageTemplate>
  );
};

export default CNCMachining;
