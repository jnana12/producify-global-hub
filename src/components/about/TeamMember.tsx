
import React from "react";
import { Linkedin, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image,
  social,
}) => {
  return (
    <div className="glass-morphism rounded-lg overflow-hidden hover-glow transition-all duration-300 hover:translate-y-[-5px] animate-on-scroll">
      <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 relative">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
              {name.split(" ").map(part => part[0]).join("")}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gradient">{name}</h3>
        <p className="text-foreground/60 mb-4">{role}</p>
        <p className="text-foreground/80 mb-4">{bio}</p>
        
        {social && (
          <div className="flex gap-3">
            {social.linkedin && (
              <a 
                href={social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            {social.twitter && (
              <a 
                href={social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
