import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-95 shadow-sm";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-md",
    secondary:
      "bg-primary-light text-primary hover:bg-primary/20 hover:text-primary-dark",
    accent: "bg-accent text-white hover:bg-accent-dark hover:shadow-lg shadow-accent/20",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const combined = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
