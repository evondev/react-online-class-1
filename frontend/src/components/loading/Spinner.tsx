import React from "react";
type SpinnerProps = "xs" | "sm" | "lg";
const spinnerSize = {
  xs: "w-5 h-5 border-2",
  sm: "w-8 h-8 border-2",
  lg: "w-10 h-10 border-4",
};
function Spinner({ size }: { size: SpinnerProps }) {
  return (
    <div
      className={`border-white rounded-full border-t-transparent border-b-transparent animate-spin ${spinnerSize[size]}`}
    ></div>
  );
}

export default Spinner;
