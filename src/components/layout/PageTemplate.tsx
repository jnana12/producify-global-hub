
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import AnimatedBackground from "../home/AnimatedBackground";

interface PageTemplateProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  backgroundImage?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  description,
  children,
  backgroundImage,
}) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global animated background */}
      <AnimatedBackground />
      
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {backgroundImage && (
              <div 
                className="absolute inset-0 opacity-15 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
            )}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient animate-on-scroll"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p 
                className="text-xl text-primary max-w-3xl mx-auto text-center mb-10 animate-on-scroll"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {description}
              </motion.p>
            )}
          </div>
        </section>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 pb-16">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PageTemplate;
