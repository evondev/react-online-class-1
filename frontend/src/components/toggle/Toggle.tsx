import classNames from "classnames";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
type ToggleProps = {
  value: boolean;
  onClick?: () => void;
};
function Toggle(props: ToggleProps) {
  const { value, onClick } = props;
  return (
    <label className="inline-block p-5 cursor-pointer">
      <input
        type="checkbox"
        onChange={() => {}}
        onClick={onClick}
        className="hidden"
      />
      <div
        className={classNames(
          "w-16 h-8 rounded-full p-0.5",
          value ? "bg-orange-400" : "bg-gray-200"
        )}
      >
        <div
          className={twMerge(
            "transition-transform bg-gray-600 rounded-full w-7 aspect-square",
            value && "bg-white"
          )}
          style={{
            transform: value ? "translate3d(32px,0,0)" : "",
          }}
        ></div>
      </div>
    </label>
  );
}

export default Toggle;
