
import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, Check } from "lucide-react";
import { motion } from "framer-motion";

const PhoneStand: React.FC = () => {
  return (
    <PageTemplate 
      title="Free Injection Moulded Phone Stand" 
      description="Get a free tangible example of our injection moulding capabilities delivered straight to your hands."
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gradient">Experience Our Quality Firsthand</h2>
              
              <p className="text-foreground/80">
                We're proud of our injection moulding capabilities and want to give you the opportunity to experience the quality for yourself. Request a free injection moulded phone stand and feel the precision, surface finish, and durability we deliver on every project.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Compact and functional design for everyday use</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">High-quality injection moulded ABS plastic</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Compatible with most smartphone models</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Completely free, including delivery</p>
                </div>
              </div>
              
              <div className="py-4">
                <div className="h-64 w-full bg-muted rounded-lg flex items-center justify-center">
                  <Smartphone className="h-20 w-20 text-primary/50" />
                  <span className="text-foreground/50 ml-4">[Phone Stand Image]</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle className="text-gradient text-2xl">Request Your Free Phone Stand</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" placeholder="Enter your work email" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input id="jobTitle" placeholder="Enter your job title" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Shipping Address</Label>
                      <Input id="address" placeholder="Enter your shipping address" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Enter your city" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" placeholder="Enter postal code" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" placeholder="Enter country" />
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full button-primary">
                    Request Phone Stand
                  </Button>
                  
                  <p className="text-xs text-foreground/60 text-center mt-4">
                    By requesting a free phone stand, you agree to our privacy policy and terms of service.
                    Limited to one phone stand per company while supplies last.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default PhoneStand;
