"use client";
import React from "react";
type ButtonVariants = "primary" | "secondary" | "danger";
type ButtonSizes = "sm" | "md" | "lg";
const buttonVariants: Record<ButtonVariants, string> = {
  secondary: "bg-blue-500",
  danger: "bg-red-500",
  primary: "bg-green-500",
};
const buttonSizes: Record<ButtonSizes, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};
type ButtonProps = {
  title: string;
  variant: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
};
// props icon -> {title} {icon}
// props isLoading(boolean) true -> opacity-50 + circle loading
function Button(props: ButtonProps) {
  if (!props) return null;
  const { title, variant, size } = props;

  return (
    <button
      className={`inline-flex gap-5 items-center justify-center p-5 text-white rounded-lg ${
        buttonVariants[variant]
      } ${buttonSizes[size || "sm"]}`}
    >
      {title}
    </button>
  );
}

export default Button;
