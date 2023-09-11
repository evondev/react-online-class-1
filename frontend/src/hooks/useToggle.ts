import { useState } from "react";

export default function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = (value?: boolean) => {
    typeof value === "boolean" ? setValue(value) : setValue((prev) => !prev);
  };
  return {
    value,
    toggleValue,
  };
}
