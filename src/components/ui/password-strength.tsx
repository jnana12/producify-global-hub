
import React from "react";
import { Progress } from "./progress";

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const calculateStrength = (pwd: string): number => {
    if (!pwd) return 0;
    
    let strength = 0;
    // Length check
    if (pwd.length >= 8) strength += 25;
    // Uppercase check
    if (/[A-Z]/.test(pwd)) strength += 25;
    // Lowercase check
    if (/[a-z]/.test(pwd)) strength += 25;
    // Numbers or special characters check
    if (/[0-9!@#$%^&*]/.test(pwd)) strength += 25;
    
    return strength;
  };

  const getStrengthLabel = (strength: number): string => {
    if (strength === 0) return "Empty";
    if (strength <= 25) return "Weak";
    if (strength <= 50) return "Fair";
    if (strength <= 75) return "Good";
    return "Strong";
  };

  const getStrengthColor = (strength: number): string => {
    if (strength <= 25) return "destructive";
    if (strength <= 50) return "secondary";
    if (strength <= 75) return "primary";
    return "primary";
  };

  const strength = calculateStrength(password);

  return (
    <div className="space-y-2">
      <Progress value={strength} className={`h-2 ${getStrengthColor(strength)}`} />
      <p className="text-sm text-muted-foreground">
        Password strength: {getStrengthLabel(strength)}
      </p>
    </div>
  );
};
