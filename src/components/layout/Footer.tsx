
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Youtube, Mail, Phone, MapPin, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card/50 border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="font-bold text-xl md:text-2xl text-gradient flex items-center">
              <div className="h-8 w-8 mr-2 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white text-sm">DM</span>
              </div>
              Digital Manufacturing Hub
            </Link>
            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex items-center">
                <Award size={20} className="text-primary mr-2" />
                <span className="text-foreground/70">ISO9001 certificate</span>
              </div>
              <div className="flex items-center">
                <Award size={20} className="text-primary mr-2" />
                <span className="text-foreground/70">ISO13485 certificate</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* About & Capabilities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/resources/platform" className="text-foreground/70 hover:text-primary transition-colors">Our Platform</Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-6">Capabilities</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/capabilities/cnc-machining" className="text-foreground/70 hover:text-primary transition-colors">CNC Machining</Link>
              </li>
              <li>
                <Link to="/capabilities/injection-moulding" className="text-foreground/70 hover:text-primary transition-colors">Injection Moulding</Link>
              </li>
              <li>
                <Link to="/capabilities/sheet-metal-fabrication" className="text-foreground/70 hover:text-primary transition-colors">Sheet Metal</Link>
              </li>
              <li>
                <Link to="/capabilities/3d-printing" className="text-foreground/70 hover:text-primary transition-colors">3D Printing</Link>
              </li>
            </ul>
          </div>

          {/* Materials & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Materials</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/materials#cnc" className="text-foreground/70 hover:text-primary transition-colors">CNC Machining Materials</Link>
              </li>
              <li>
                <Link to="/materials#injection-moulding" className="text-foreground/70 hover:text-primary transition-colors">Injection Moulding Materials</Link>
              </li>
              <li>
                <Link to="/materials#sheet-metal" className="text-foreground/70 hover:text-primary transition-colors">Sheet Metal Materials</Link>
              </li>
              <li>
                <Link to="/materials#3d-printing" className="text-foreground/70 hover:text-primary transition-colors">3D Printing Materials</Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-6">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/guides" className="text-foreground/70 hover:text-primary transition-colors">Knowledgebase</Link>
              </li>
              <li>
                <Link to="/resources/guides" className="text-foreground/70 hover:text-primary transition-colors">CNC Design Guide</Link>
              </li>
              <li>
                <Link to="/resources/guides" className="text-foreground/70 hover:text-primary transition-colors">Injection Moulding Design Guide</Link>
              </li>
              <li>
                <Link to="/resources/guides" className="text-foreground/70 hover:text-primary transition-colors">Sheet Metal Design Guide</Link>
              </li>
              <li>
                <Link to="/resources/guides" className="text-foreground/70 hover:text-primary transition-colors">3D Printing Design Guide</Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/blog" className="text-foreground/70 hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Our Partners</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms & Conditions</a>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/resources/faq" className="text-foreground/70 hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                <span className="text-foreground/70">T: 020 3962 9020</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:support@geomiq.com" className="text-foreground/70 hover:text-primary transition-colors">E: support@geomiq.com</a>
              </li>
              <li className="text-foreground/70 mt-2">
                Vat number: GB258421205
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>© 2025 Digital Manufacturing Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
