
import React, { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
      setLoading(false);
    }, 1500);
    
    // In a real application, you would connect this to a backend API
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   
    //   if (response.ok) {
    //     toast.success("Message sent successfully! We'll be in touch soon.");
    //     setFormData({
    //       name: "",
    //       email: "",
    //       company: "",
    //       subject: "",
    //       message: ""
    //     });
    //   } else {
    //     toast.error("Failed to send message. Please try again.");
    //   }
    // } catch (error) {
    //   toast.error("An error occurred. Please try again later.");
    //   console.error('Error submitting form:', error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="glass-morphism rounded-lg p-6 md:p-8 animate-on-scroll">
      <h3 className="text-2xl font-semibold mb-6 text-gradient">Get in Touch</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-foreground/80 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-muted border border-border/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-foreground/80 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-muted border border-border/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-foreground/80 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-muted border border-border/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
            placeholder="Your company"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-foreground/80 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-muted border border-border/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
            placeholder="How can we help you?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-foreground/80 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-muted border border-border/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 resize-none"
            placeholder="Please provide details about your inquiry..."
          />
        </div>
        
        <div>
          <button
            type="submit"
            disabled={loading}
            className="button-primary w-full py-3 text-lg"
          >
            {loading ? (
              <span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="inline-flex items-center">
                Submit Inquiry
                <Send className="ml-2 w-5 h-5" />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
