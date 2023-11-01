import { useState } from "react";

export default function useToggle(init: boolean = false) {
  const [isOpen, setIsOpen] = useState(init);
  return {
    isOpen,
    setIsOpen,
  };
}
