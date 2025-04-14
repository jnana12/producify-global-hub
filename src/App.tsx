
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

// 3D Printing sub-capabilities
import PrintingService from "./pages/capabilities/3dprinting/PrintingService";
import FDM from "./pages/capabilities/3dprinting/FDM";
import MJF from "./pages/capabilities/3dprinting/MJF";
import SLS from "./pages/capabilities/3dprinting/SLS";
import SLA from "./pages/capabilities/3dprinting/SLA";
import MetalPrinting from "./pages/capabilities/3dprinting/MetalPrinting";

// Injection Moulding sub-capabilities
import MouldingService from "./pages/capabilities/injectionmoulding/MouldingService";
import Overmoulding from "./pages/capabilities/injectionmoulding/Overmoulding";
import InsertMoulding from "./pages/capabilities/injectionmoulding/InsertMoulding";

// Surface Finishes sub-capabilities
import SheetMetalFinishes from "./pages/capabilities/surfacefinishes/SheetMetalFinishes";
import CNCFinishes from "./pages/capabilities/surfacefinishes/CNCFinishes";
import PrintingFinishes from "./pages/capabilities/surfacefinishes/PrintingFinishes";

// CNC Machining sub-capabilities
import MachiningService from "./pages/capabilities/cncmachining/MachiningService";
import CNCMilling from "./pages/capabilities/cncmachining/CNCMilling";
import CNCTurning from "./pages/capabilities/cncmachining/CNCTurning";

// Sheet Metal Fabrication sub-capabilities
import SheetMetal from "./pages/capabilities/sheetmetalfabrication/SheetMetal";
import Assembly from "./pages/capabilities/sheetmetalfabrication/Assembly";
import WaterjetCutting from "./pages/capabilities/sheetmetalfabrication/WaterjetCutting";
import LaserCutting from "./pages/capabilities/sheetmetalfabrication/LaserCutting";
import Extrusions from "./pages/capabilities/sheetmetalfabrication/Extrusions";
import DieCasting from "./pages/capabilities/sheetmetalfabrication/DieCasting";

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
            
            {/* 3D Printing Routes */}
            <Route path="/capabilities/3d-printing" element={<ThreeDPrinting />} />
            <Route path="/capabilities/3d-printing/service" element={<PrintingService />} />
            <Route path="/capabilities/3d-printing/fdm" element={<FDM />} />
            <Route path="/capabilities/3d-printing/mjf" element={<MJF />} />
            <Route path="/capabilities/3d-printing/sls" element={<SLS />} />
            <Route path="/capabilities/3d-printing/sla" element={<SLA />} />
            <Route path="/capabilities/3d-printing/metal" element={<MetalPrinting />} />
            
            {/* Injection Moulding Routes */}
            <Route path="/capabilities/injection-moulding" element={<InjectionMoulding />} />
            <Route path="/capabilities/injection-moulding/service" element={<MouldingService />} />
            <Route path="/capabilities/injection-moulding/overmoulding" element={<Overmoulding />} />
            <Route path="/capabilities/injection-moulding/insert-moulding" element={<InsertMoulding />} />
            
            {/* Surface Finishes Routes */}
            <Route path="/capabilities/surface-finishes" element={<SurfaceFinishes />} />
            <Route path="/capabilities/surface-finishes/sheet-metal" element={<SheetMetalFinishes />} />
            <Route path="/capabilities/surface-finishes/cnc" element={<CNCFinishes />} />
            <Route path="/capabilities/surface-finishes/3d-printing" element={<PrintingFinishes />} />
            
            {/* CNC Machining Routes */}
            <Route path="/capabilities/cnc-machining" element={<CNCMachining />} />
            <Route path="/capabilities/cnc-machining/service" element={<MachiningService />} />
            <Route path="/capabilities/cnc-machining/milling" element={<CNCMilling />} />
            <Route path="/capabilities/cnc-machining/turning" element={<CNCTurning />} />
            
            {/* Sheet Metal Fabrication Routes */}
            <Route path="/capabilities/sheet-metal-fabrication" element={<SheetMetalFabrication />} />
            <Route path="/capabilities/sheet-metal-fabrication/sheet-metal" element={<SheetMetal />} />
            <Route path="/capabilities/sheet-metal-fabrication/assembly" element={<Assembly />} />
            <Route path="/capabilities/sheet-metal-fabrication/waterjet" element={<WaterjetCutting />} />
            <Route path="/capabilities/sheet-metal-fabrication/laser" element={<LaserCutting />} />
            <Route path="/capabilities/sheet-metal-fabrication/extrusions" element={<Extrusions />} />
            <Route path="/capabilities/sheet-metal-fabrication/die-casting" element={<DieCasting />} />
            
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
