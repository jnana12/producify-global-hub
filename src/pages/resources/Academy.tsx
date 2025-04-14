
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";

const Academy: React.FC = () => {
  return (
    <PageTemplate 
      title="Geomiq Academy" 
      description="Access educational and training resources designed to help engineers optimize their designs for manufacturing."
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Coming Soon</h2>
        <p className="text-lg text-foreground/80">
          Geomiq Academy is under development. Please check back later for educational resources and training materials to enhance your design and manufacturing knowledge.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Academy;
