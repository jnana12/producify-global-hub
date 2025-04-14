
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/layout/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileType, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

const UploadFile: React.FC = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const acceptedFormats = [".step", ".stp", ".stl", ".iges", ".igs", ".obj", ".sldprt", ".x_t", ".dxf", ".dwg"];
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      validateAndSetFile(files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      validateAndSetFile(files[0]);
    }
  };
  
  const validateAndSetFile = (file: File) => {
    const extension = "." + file.name.split('.').pop()?.toLowerCase();
    
    if (!acceptedFormats.includes(extension)) {
      toast({
        title: "Invalid file format",
        description: `Please upload a file in one of these formats: ${acceptedFormats.join(", ")}`,
        variant: "destructive"
      });
      return;
    }
    
    setFile(file);
    toast({
      title: "File selected",
      description: `${file.name} is ready to upload`,
    });
  };
  
  const handleUpload = () => {
    if (!file) return;
    
    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Upload successful",
        description: "Redirecting to sign in...",
      });
      
      // Redirect to sign in after a delay
      setTimeout(() => {
        navigate("/sign-in");
      }, 1500);
    }, 2000);
  };
  
  return (
    <PageTemplate
      title="Upload Your Design File"
      description="Upload your CAD file to get an instant quote for your manufacturing project."
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-morphism mb-8">
            <CardHeader>
              <CardTitle className="text-gradient text-2xl">File Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">
                For the most accurate quote, please ensure your file meets the following requirements:
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-foreground/80">
                    <span className="font-medium">Accepted formats:</span> {acceptedFormats.join(", ")}
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-foreground/80">
                    <span className="font-medium">Maximum file size:</span> 100MB
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-foreground/80">
                    <span className="font-medium">Models should be:</span> Water-tight, properly scaled in mm, and contain all necessary components
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <p className="text-foreground/80">
                    <span className="font-medium">Note:</span> After uploading, you'll need to sign in or create an account to receive your quote
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card 
            className={`glass-morphism border-dashed ${isDragging ? "border-primary" : "border-border"} transition-colors`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  {file ? (
                    <FileType className="w-10 h-10 text-primary" />
                  ) : (
                    <Upload className="w-10 h-10 text-primary" />
                  )}
                </div>
                
                <div className="space-y-2">
                  {file ? (
                    <>
                      <h3 className="text-xl font-medium">File Selected</h3>
                      <p className="text-foreground/80">{file.name} ({(file.size / (1024 * 1024)).toFixed(2)}MB)</p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-medium">Drag & Drop Your File Here</h3>
                      <p className="text-foreground/80">or click the button below to browse files</p>
                    </>
                  )}
                </div>
                
                <div>
                  {!file ? (
                    <label className="button-primary inline-flex cursor-pointer">
                      Browse Files
                      <input 
                        type="file" 
                        accept={acceptedFormats.join(",")} 
                        onChange={handleFileChange}
                        className="sr-only" 
                      />
                    </label>
                  ) : uploading ? (
                    <Button disabled className="gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Uploading...
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <Button onClick={handleUpload} className="w-full gap-2">
                        <Upload className="w-4 h-4" />
                        Upload and Get Quote
                      </Button>
                      
                      <div>
                        <Button 
                          variant="outline" 
                          onClick={() => setFile(null)}
                          className="text-sm"
                        >
                          Select Different File
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default UploadFile;
