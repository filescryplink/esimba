'use client';

import { ReactNode } from "react";
import { Link } from '@/lib/navigation';

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  onClick,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full transform hover:-translate-y-1 active:translate-y-0";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-md hover:shadow-lg",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-md",
  };
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5",
    lg: "px-9 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
