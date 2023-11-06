"use client";
import React, { ComponentProps } from "react";

function ButtonComposition({
  icon,
  children,
  ...rest
}: {
  icon?: React.ReactNode;
  children?: React.ReactNode;
} & ComponentProps<"button">) {
  return (
    <button
      className="flex items-center justify-center gap-2 p-3 bg-orange-400 rounded"
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}

export default ButtonComposition;
