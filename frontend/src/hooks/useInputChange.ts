import { ChangeEvent } from "react";

export default function useInputChange(
  values: Record<string, any>,
  callback: (...args: any) => any
) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    callback({
      ...values,
      [name]: value,
    });
  };
  return handleInputChange;
}
