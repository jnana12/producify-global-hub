
import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Award, LayoutDashboard, FileText, HelpCircle, Users, GraduationCap, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const Resources: React.FC = () => {
  const resources = [
    {
      title: "Guides",
      description: "Practical guides for designers and engineers to enhance your manufacturing knowledge and optimize your designs.",
      icon: <Book className="w-8 h-8 text-primary" />,
      link: "/resources/guides",
      delay: 0.1,
    },
    {
      title: "Quality Assurance",
      description: "Learn about our continuous improvement processes and industry certifications that ensure consistent quality.",
      icon: <Award className="w-8 h-8 text-primary" />,
      link: "/resources/quality-assurance",
      delay: 0.2,
    },
    {
      title: "Platform",
      description: "Discover our digital manufacturing platform designed specifically for engineers and procurement teams.",
      icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
      link: "/resources/platform",
      delay: 0.3,
    },
    {
      title: "Blog",
      description: "Stay updated with the latest Geomiq updates, platform features, and manufacturing industry news.",
      icon: <FileText className="w-8 h-8 text-primary" />,
      link: "/resources/blog",
      delay: 0.4,
    },
    {
      title: "FAQ",
      description: "Find answers to the most commonly asked questions about our services, processes, and platform.",
      icon: <HelpCircle className="w-8 h-8 text-primary" />,
      link: "/resources/faq",
      delay: 0.5,
    },
    {
      title: "Customers",
      description: "Explore customer success stories and innovative products made possible through our manufacturing solutions.",
      icon: <Users className="w-8 h-8 text-primary" />,
      link: "/resources/customers",
      delay: 0.6,
    },
    {
      title: "Geomiq Academy",
      description: "Access educational and training resources designed to help engineers optimize their designs for manufacturing.",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      link: "/resources/academy",
      delay: 0.7,
    },
    {
      title: "Injection Moulded Phone Stand",
      description: "Request a free tangible example to experience the quality of our injection moulding service firsthand.",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      link: "/resources/phone-stand",
      delay: 0.8,
    },
  ];

  return (
    <PageTemplate 
      title="Resources" 
      description="Explore our collection of useful resources, guides, and tools to optimize your manufacturing processes and expand your knowledge."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: resource.delay }}
          >
            <Card className="h-full glass-morphism overflow-hidden hover-glow group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-gradient text-2xl">{resource.title}</CardTitle>
                  <div className="bg-background/30 p-2 rounded-full backdrop-blur-sm">
                    {resource.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80">{resource.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={resource.link} className="button-outline w-full">
                  Explore
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Resources;
