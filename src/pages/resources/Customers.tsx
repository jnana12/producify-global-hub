
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";

const Customers: React.FC = () => {
  return (
    <PageTemplate 
      title="Customer Success Stories" 
      description="Explore customer success stories and innovative products made possible through our manufacturing solutions."
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Coming Soon</h2>
        <p className="text-lg text-foreground/80">
          Our customer success stories are being gathered. Please check back later to read about innovative products and solutions we've helped create.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Customers;
