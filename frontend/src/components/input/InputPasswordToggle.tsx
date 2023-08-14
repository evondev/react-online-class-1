import React, { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconEyeClose, IconEyeOpen } from "../icons";
type InputProps = {
  className?: string;
  showIcon?: boolean;
  type: "password" | "text";
} & ComponentProps<"input">;
function InputPasswordToggle({
  className = "",
  showIcon = false,
  type = "password",
  ...props
}: InputProps) {
  const baseClassName =
    "p-4 transition-all border border-gray-300 rounded-lg outline-none focus:border-blue-500 leading-none";
  const isIconClassName = showIcon && "pr-14";
  const allClassNames = twMerge(baseClassName, isIconClassName, className);
  const [inputType, setInputType] = useState<"password" | "text">(type);
  const handleTogglePassword = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };
  const icons = {
    password: <IconEyeOpen></IconEyeOpen>,
    text: <IconEyeClose></IconEyeClose>,
  };
  return (
    <div className="relative">
      <input type={inputType} className={allClassNames} {...props}></input>
      {showIcon && (
        <button
          className="absolute w-6 top-2/4 -translate-y-2/4 right-4"
          onClick={handleTogglePassword}
        >
          {icons[inputType]}
        </button>
      )}
    </div>
  );
}

export default InputPasswordToggle;
