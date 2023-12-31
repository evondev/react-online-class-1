"use client";
import React, { ComponentProps } from "react";
import Spinner from "../loading/Spinner";
import classNames from "classnames";
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
  variant: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
} & ComponentProps<"button">;
function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "sm",
    isLoading = false,
    className = "",
    children,
    ...rest
  } = props;
  const child = isLoading ? <Spinner size="sm"></Spinner> : children;
  const baseClassName =
    "inline-flex gap-5 items-center justify-center p-5 text-white rounded-lg disabled:opacity-50";
  const allClassNames = classNames(
    baseClassName,
    className,
    buttonVariants[variant],
    buttonSizes[size]
  );
  return (
    <button className={allClassNames} {...rest}>
      {child}
    </button>
  );
}

export default Button;
