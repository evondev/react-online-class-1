import classNames from "classnames";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
type ToggleProps = {
  isActive: boolean;
  onClick?: () => void;
};
function ToggleV2(props: ToggleProps) {
  const { isActive, onClick } = props;
  return (
    <label className="inline-block p-5 cursor-pointer">
      <input
        type="checkbox"
        onChange={() => {}}
        onClick={onClick}
        checked={isActive}
        className="hidden"
      />
      <div
        className={classNames(
          "w-16 h-8 rounded-full p-0.5",
          isActive ? "bg-orange-400" : "bg-gray-200"
        )}
      >
        <div
          className={twMerge(
            "transition-transform bg-gray-600 rounded-full w-7 aspect-square",
            isActive && "bg-white"
          )}
          style={{
            transform: isActive ? "translate3d(32px,0,0)" : "",
          }}
        ></div>
      </div>
    </label>
  );
}

export default ToggleV2;
