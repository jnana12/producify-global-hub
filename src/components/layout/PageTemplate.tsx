
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent"></div>
            {backgroundImage && (
              <div 
                className="absolute inset-0 opacity-20 bg-cover bg-center" 
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
            )}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
            <div className="absolute left-1/3 bottom-1/3 w-80 h-80 bg-secondary/10 rounded-full filter blur-[90px]"></div>
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
                className="text-xl text-foreground/80 max-w-3xl mx-auto text-center mb-10 animate-on-scroll"
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
