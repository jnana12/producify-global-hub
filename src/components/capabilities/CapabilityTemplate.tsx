
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTemplate from "../layout/PageTemplate";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload } from "lucide-react";

interface CapabilityTemplateProps {
  title: string;
  description: string;
  features?: string[];
  imageUrl?: string;
  icon?: React.ReactNode;
}

const CapabilityTemplate: React.FC<CapabilityTemplateProps> = ({
  title,
  description,
  features = [],
  imageUrl,
  icon,
}) => {
  return (
    <PageTemplate
      title={title}
      description={description}
      backgroundImage={imageUrl}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-morphism p-6 rounded-lg shadow-lg mb-10"
        >
          <div className="flex items-center gap-4 mb-6">
            {icon && <div className="p-3 bg-primary/10 rounded-full">{icon}</div>}
            <h2 className="text-3xl font-bold text-gradient">{title}</h2>
          </div>
          
          <p className="text-foreground/80 mb-6 leading-relaxed">{description}</p>
          
          {features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="bg-primary/20 p-1 rounded-full mt-1">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/upload-file" className="button-primary flex items-center justify-center gap-2">
              <Upload className="w-4 h-4" />
              Get an Instant Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Button variant="outline" className="gap-2">
              Learn More About Materials
            </Button>
          </div>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default CapabilityTemplate;
