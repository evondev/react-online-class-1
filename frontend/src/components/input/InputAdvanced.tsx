import React, { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { IconEyeClose, IconEyeOpen } from "../icons";
type InputProps = (
  | {
      className: string;
      icon: React.ReactNode;
      dir: "left" | "right";
    }
  | {
      className?: string;
      icon?: undefined;
      dir?: undefined;
    }
) &
  (
    | {
        togglePassword?: boolean;
        onIconClick?: undefined;
        type: "password" | "text";
      }
    | {
        onIconClick?: () => void;
        togglePassword?: undefined;
      }
  ) &
  ComponentProps<"input">;
function InputAdvanced({
  className = "",
  icon = null,
  dir = undefined,
  onIconClick = undefined,
  togglePassword = false,
  ...props
}: InputProps) {
  const baseClassName =
    "p-4 transition-all border border-gray-300 rounded-lg outline-none focus:border-blue-500 leading-none";
  const isIconClassName = dir && (dir === "right" ? "pr-14" : "pl-14");
  const allClassNames = twMerge(baseClassName, isIconClassName, className);
  const buttonIconClass = dir && (dir === "right" ? "right-4" : "left-4");
  const icons = {
    password: <IconEyeOpen></IconEyeOpen>,
    text: <IconEyeClose></IconEyeClose>,
  };
  const { type, ...rest } = props;
  const [toggleType, setToggleType] = useState(type);
  return (
    <div className="relative">
      <input type={toggleType} className={allClassNames} {...rest}></input>
      {togglePassword && (
        <button
          className="absolute w-6 top-2/4 -translate-y-2/4 right-4"
          onClick={() => {
            setToggleType((prev) =>
              prev === "password" ? "text" : "password"
            );
          }}
        >
          <IconEyeClose></IconEyeClose>
        </button>
      )}
      {!togglePassword && icon && (
        <button
          className={classNames(
            "absolute w-6 top-2/4 -translate-y-2/4 flex items-center justify-center",
            buttonIconClass
          )}
          onClick={onIconClick}
        >
          {icon}
        </button>
      )}
    </div>
  );
}

export default InputAdvanced;
