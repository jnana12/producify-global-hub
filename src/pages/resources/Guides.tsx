
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";

const Guides: React.FC = () => {
  return (
    <PageTemplate 
      title="Design & Manufacturing Guides" 
      description="Practical guides for designers and engineers to enhance your manufacturing knowledge and optimize your designs."
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Coming Soon</h2>
        <p className="text-lg text-foreground/80">
          Our comprehensive design and manufacturing guides are being developed. Please check back later for valuable resources to help optimize your designs for manufacturing.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Guides;
