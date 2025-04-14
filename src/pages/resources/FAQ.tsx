
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";

const FAQ: React.FC = () => {
  return (
    <PageTemplate 
      title="Frequently Asked Questions" 
      description="Find answers to the most commonly asked questions about our services, processes, and platform."
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Coming Soon</h2>
        <p className="text-lg text-foreground/80">
          Our FAQ section is being compiled. Please check back later for answers to common questions about our services and processes.
        </p>
      </div>
    </PageTemplate>
  );
};

export default FAQ;
