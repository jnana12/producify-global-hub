
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Capabilities from "./pages/capabilities/Capabilities";
import Resources from "./pages/resources/Resources";
import Materials from "./pages/materials/Materials";
import UploadFile from "./pages/UploadFile";
import SignIn from "./pages/SignIn";

// Capabilities subpages
import ThreeDPrinting from "./pages/capabilities/3DPrinting";
import InjectionMoulding from "./pages/capabilities/InjectionMoulding";
import SurfaceFinishes from "./pages/capabilities/SurfaceFinishes";
import CNCMachining from "./pages/capabilities/CNCMachining";
import SheetMetalFabrication from "./pages/capabilities/SheetMetalFabrication";

// Resources subpages
import Guides from "./pages/resources/Guides";
import QualityAssurance from "./pages/resources/QualityAssurance";
import Platform from "./pages/resources/Platform";
import Blog from "./pages/resources/Blog";
import FAQ from "./pages/resources/FAQ";
import Customers from "./pages/resources/Customers";
import Academy from "./pages/resources/Academy";
import PhoneStand from "./pages/resources/PhoneStand";

// Initialize the query client for React Query
const queryClient = new QueryClient();

const App = () => {
  // Add a script to run animation observers after the component mounts
  useEffect(() => {
    // Function to initialize intersection observers for animations
    const initAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 }
      );

      // Get all elements that should animate on scroll
      const animateElements = document.querySelectorAll(".animate-on-scroll");
      animateElements.forEach((el) => observer.observe(el));

      return () => {
        animateElements.forEach((el) => observer.unobserve(el));
      };
    };

    // Initialize animations after a short delay
    const timer = setTimeout(() => {
      initAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/upload-file" element={<UploadFile />} />
            <Route path="/sign-in" element={<SignIn />} />
            
            {/* Capabilities Routes */}
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/capabilities/3d-printing" element={<ThreeDPrinting />} />
            <Route path="/capabilities/injection-moulding" element={<InjectionMoulding />} />
            <Route path="/capabilities/surface-finishes" element={<SurfaceFinishes />} />
            <Route path="/capabilities/cnc-machining" element={<CNCMachining />} />
            <Route path="/capabilities/sheet-metal-fabrication" element={<SheetMetalFabrication />} />
            
            {/* Resources Routes */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/guides" element={<Guides />} />
            <Route path="/resources/quality-assurance" element={<QualityAssurance />} />
            <Route path="/resources/platform" element={<Platform />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/faq" element={<FAQ />} />
            <Route path="/resources/customers" element={<Customers />} />
            <Route path="/resources/academy" element={<Academy />} />
            <Route path="/resources/phone-stand" element={<PhoneStand />} />
            
            {/* Materials Route */}
            <Route path="/materials" element={<Materials />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
