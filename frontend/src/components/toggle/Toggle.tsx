import classNames from "classnames";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
// function callback(value: boolean) {}
type ToggleProps = {
  value: boolean;
  onClick?: (value: boolean) => void;
};
function Toggle(props: ToggleProps) {
  const { value, onClick } = props;
  const [isActive, setIsActive] = useState<boolean>(value);
  const handleToggle = () => {
    // !false -> true
    setIsActive((prev) => !prev);
    onClick?.(!isActive);
    // !true -> false
    // setIsActive((prev) => !prev);
    // !false -> true
    // setIsActive(!isActive);
    // setIsActive(!isActive);
    // setIsActive(!isActive);
    // setIsActive(!isActive);
    // - setIsActive(prev => {
    //   ...prev,
    //   newValue: "abc"
    // })
  };
  return (
    <label className="inline-block p-5 cursor-pointer">
      <input
        type="checkbox"
        onChange={() => {}}
        onClick={handleToggle}
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

export default Toggle;
