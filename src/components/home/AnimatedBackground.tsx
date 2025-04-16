
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"></div>
      
      {/* Animated glowing orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 filter blur-[100px]"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse" as const,
        }}
        style={{ top: '10%', right: '5%' }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-secondary/20 filter blur-[80px]"
        animate={{
          x: [0, -50, -100, 0],
          y: [0, 100, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse" as const,
        }}
        style={{ bottom: '5%', left: '10%' }}
      />
      
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-accent/10 filter blur-[90px]"
        animate={{
          x: [0, 80, 40, 0],
          y: [0, -50, -100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse" as const,
        }}
        style={{ top: '30%', left: '5%' }}
      />
      
      {/* Mouse follow effect - subtle glow that follows cursor */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 filter blur-[50px] pointer-events-none"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      {/* Animated particles */}
      <div className="particles"></div>
    </div>
  );
};

export default AnimatedBackground;
