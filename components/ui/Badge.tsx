import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "primary" | "accent" | "neutral";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variants = {
    primary: "bg-primary-light text-primary border-primary/20",
    success: "bg-success-light text-success border-success/20",
    accent: "bg-accent-light text-accent-dark border-accent/20",
    neutral: "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
