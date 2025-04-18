import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid" | "ghost"; // Add supported variants here
}

const Button: React.FC<ButtonProps> = ({ variant = "solid", children, className, ...props }) => {
  // Add logic to apply different styles based on the `variant` prop
  const baseStyles = "px-4 py-2 rounded-md"; // Base button styles
  const variantStyles = {
    outline: "border-2 border-gray-300 text-gray-800 bg-transparent",
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-100"
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} // Apply the variant styles
    >
      {children}
    </button>
  );
};

export { Button };
