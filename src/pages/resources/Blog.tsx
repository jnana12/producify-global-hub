
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";

const Blog: React.FC = () => {
  return (
    <PageTemplate 
      title="Blog" 
      description="Stay updated with the latest Geomiq updates, platform features, and manufacturing industry news."
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Coming Soon</h2>
        <p className="text-lg text-foreground/80">
          Our blog content is being developed. Please check back later for insightful articles and industry updates.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Blog;
