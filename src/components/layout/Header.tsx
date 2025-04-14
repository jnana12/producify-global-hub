
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Services", href: "/services" },
  { text: "How It Works", href: "/how-it-works" },
  { text: "Testimonials", href: "/testimonials" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Updated capabilities with all the new options
  const capabilities = [
    { text: "Overview", href: "/capabilities" },
    { 
      text: "3D Printing", 
      href: "/capabilities/3d-printing",
      subItems: [
        { text: "3D Printing Service", href: "/capabilities/3d-printing/service" },
        { text: "Fused Deposition Modelling (FDM)", href: "/capabilities/3d-printing/fdm" },
        { text: "Multi-Jet Fusion (MJF)", href: "/capabilities/3d-printing/mjf" },
        { text: "Selective Laser Sintering (SLS)", href: "/capabilities/3d-printing/sls" },
        { text: "Stereolithography (SLA)", href: "/capabilities/3d-printing/sla" },
        { text: "Metal 3D Printing (DMLS and SLM)", href: "/capabilities/3d-printing/metal" },
      ]
    },
    { 
      text: "Injection Moulding", 
      href: "/capabilities/injection-moulding",
      subItems: [
        { text: "Injection Moulding Service", href: "/capabilities/injection-moulding/service" },
        { text: "Overmoulding", href: "/capabilities/injection-moulding/overmoulding" },
        { text: "Insert Moulding", href: "/capabilities/injection-moulding/insert-moulding" },
      ]
    },
    { 
      text: "Surface Finishes", 
      href: "/capabilities/surface-finishes",
      subItems: [
        { text: "Sheet Metal Surface Finishes", href: "/capabilities/surface-finishes/sheet-metal" },
        { text: "CNC Surface Finishes", href: "/capabilities/surface-finishes/cnc" },
        { text: "3D Printing Surface Finishes", href: "/capabilities/surface-finishes/3d-printing" },
      ]
    },
    { 
      text: "CNC Machining", 
      href: "/capabilities/cnc-machining",
      subItems: [
        { text: "CNC Machining Service", href: "/capabilities/cnc-machining/service" },
        { text: "CNC Milling", href: "/capabilities/cnc-machining/milling" },
        { text: "CNC Turning", href: "/capabilities/cnc-machining/turning" },
      ]
    },
    { 
      text: "Sheet Metal Fabrication", 
      href: "/capabilities/sheet-metal-fabrication",
      subItems: [
        { text: "Sheet Metal", href: "/capabilities/sheet-metal-fabrication/sheet-metal" },
        { text: "Assembly and Subassembly", href: "/capabilities/sheet-metal-fabrication/assembly" },
        { text: "Waterjet Cutting", href: "/capabilities/sheet-metal-fabrication/waterjet" },
        { text: "Laser Cutting", href: "/capabilities/sheet-metal-fabrication/laser" },
        { text: "Extrusions", href: "/capabilities/sheet-metal-fabrication/extrusions" },
        { text: "Die Casting", href: "/capabilities/sheet-metal-fabrication/die-casting" },
      ]
    },
  ];

  const resources = [
    { text: "Overview", href: "/resources" },
    { text: "Guides", href: "/resources/guides" },
    { text: "Quality Assurance", href: "/resources/quality-assurance" },
    { text: "Platform", href: "/resources/platform" },
    { text: "Blog", href: "/resources/blog" },
    { text: "FAQ", href: "/resources/faq" },
    { text: "Customers", href: "/resources/customers" },
    { text: "Geomiq Academy", href: "/resources/academy" },
    { text: "Phone Stand", href: "/resources/phone-stand" },
  ];

  const materials = [
    { text: "All Materials", href: "/materials" },
    { text: "CNC Machining Materials", href: "/materials#cnc" },
    { text: "3D Printing Materials", href: "/materials#3d-printing" },
    { text: "Injection Moulding Materials", href: "/materials#injection-moulding" },
    { text: "Sheet Metal Materials", href: "/materials#sheet-metal" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16 md:h-20">
        <Link
          to="/"
          className="font-bold text-xl md:text-2xl text-gradient flex items-center"
        >
          <div className="h-8 w-8 mr-2 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white text-sm">DM</span>
          </div>
          Digital Manufacturing Hub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/" ? "text-primary font-medium" : ""
                  )}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link
                  to="/services"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/services" ? "text-primary font-medium" : ""
                  )}
                >
                  Services
                </Link>
              </NavigationMenuItem>
              
              {/* Capabilities Dropdown - Updated with new structure */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={location.pathname.includes("/capabilities") ? "text-primary font-medium" : ""}>
                  Capabilities
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[800px] md:grid-cols-3 lg:w-[800px]">
                    {capabilities.map((category) => (
                      <li key={category.href} className="mb-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to={category.href}
                            className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-medium"
                          >
                            {category.text}
                          </Link>
                        </NavigationMenuLink>
                        
                        {category.subItems && (
                          <ul className="ml-2 mt-1 space-y-1">
                            {category.subItems.map((subItem) => (
                              <li key={subItem.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={subItem.href}
                                    className="block select-none rounded-md p-1 pl-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    {subItem.text}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={location.pathname.includes("/resources") ? "text-primary font-medium" : ""}>
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.text}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Materials Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={location.pathname.includes("/materials") ? "text-primary font-medium" : ""}>
                  Materials
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {materials.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.text}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link
                  to="/how-it-works"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/how-it-works" ? "text-primary font-medium" : ""
                  )}
                >
                  How It Works
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link
                  to="/testimonials"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/testimonials" ? "text-primary font-medium" : ""
                  )}
                >
                  Testimonials
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/about" ? "text-primary font-medium" : ""
                  )}
                >
                  About Us
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/contact" ? "text-primary font-medium" : ""
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link
            to="/sign-in"
            className="button-primary ml-2"
          >
            Sign In
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Updated with new structure */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg shadow-lg transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-3 rounded-md transition-all duration-300 ${
                location.pathname === link.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/80 hover:bg-muted hover:text-foreground"
              }`}
            >
              {link.text}
            </Link>
          ))}
          
          {/* Mobile Capabilities Dropdown - Updated */}
          <div className="relative py-2">
            <button 
              className="w-full text-left px-4 py-3 rounded-md flex justify-between items-center bg-background/80 text-foreground/80 hover:bg-muted hover:text-foreground"
              onClick={(e) => {
                e.preventDefault();
                const dropdown = document.getElementById("mobile-capabilities-dropdown");
                dropdown?.classList.toggle("hidden");
              }}
            >
              <span>Capabilities</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div id="mobile-capabilities-dropdown" className="hidden px-4 py-2 space-y-1">
              {capabilities.map((category) => (
                <div key={category.href} className="mb-2">
                  <Link
                    to={category.href}
                    className="block px-4 py-2 rounded-md font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                  >
                    {category.text}
                  </Link>
                  
                  {category.subItems && (
                    <div className="ml-4 space-y-1 mt-1">
                      {category.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-1 rounded-md text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Resources Dropdown */}
          <div className="relative py-2">
            <button 
              className="w-full text-left px-4 py-3 rounded-md flex justify-between items-center bg-background/80 text-foreground/80 hover:bg-muted hover:text-foreground"
              onClick={(e) => {
                e.preventDefault();
                const dropdown = document.getElementById("mobile-resources-dropdown");
                dropdown?.classList.toggle("hidden");
              }}
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div id="mobile-resources-dropdown" className="hidden px-4 py-2 space-y-1">
              {resources.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 rounded-md text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Materials Dropdown */}
          <div className="relative py-2">
            <button 
              className="w-full text-left px-4 py-3 rounded-md flex justify-between items-center bg-background/80 text-foreground/80 hover:bg-muted hover:text-foreground"
              onClick={(e) => {
                e.preventDefault();
                const dropdown = document.getElementById("mobile-materials-dropdown");
                dropdown?.classList.toggle("hidden");
              }}
            >
              <span>Materials</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div id="mobile-materials-dropdown" className="hidden px-4 py-2 space-y-1">
              {materials.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 rounded-md text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          
          <Link
            to="/sign-in"
            className="button-primary mt-2"
          >
            Sign In
            <ChevronRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
