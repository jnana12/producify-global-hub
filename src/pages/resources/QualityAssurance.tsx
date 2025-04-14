
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";

const QualityAssurance: React.FC = () => {
  return (
    <PageTemplate 
      title="Quality Assurance" 
      description="Learn about our continuous improvement processes and industry certifications that ensure consistent quality."
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Coming Soon</h2>
        <p className="text-lg text-foreground/80">
          Details about our quality assurance processes and certifications are being compiled. Please check back later for information about how we maintain and improve quality.
        </p>
      </div>
    </PageTemplate>
  );
};

export default QualityAssurance;
