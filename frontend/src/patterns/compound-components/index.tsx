"use client";
import { ComponentProps, createContext, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
const DropdownContext = createContext<
  | {
      isOpen: boolean;
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);
function Dropdown({ children }: { children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative w-[300px]">{children}</div>
    </DropdownContext.Provider>
  );
}
function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a Dropdown");
  }
  return context;
}
function Item({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  const { setIsOpen } = useDropdown();
  const handleItemClick = () => {
    onClick?.();
    setIsOpen(false);
  };
  return (
    <li
      className="p-3 rounded cursor-pointer hover:bg-slate-200"
      onClick={handleItemClick}
    >
      {children}
    </li>
  );
}
function List({ children }: { children?: React.ReactNode }) {
  const { isOpen } = useDropdown();
  return (
    <ul
      className={twMerge(
        "absolute w-full mt-1 overflow-hidden border border-gray-200 rounded-lg top-full l-0",
        isOpen ? "" : "opacity-0 invisible"
      )}
    >
      {children}
    </ul>
  );
}
function Select({ children }: { children?: React.ReactNode }) {
  const { isOpen, setIsOpen } = useDropdown();
  return (
    <div
      className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </div>
  );
}
function Search(props: ComponentProps<"input">) {
  return (
    <input
      type="text"
      className="w-full p-3 border border-gray-200 outline-none"
      {...props}
    />
  );
}
Dropdown.Item = Item;
Dropdown.List = List;
Dropdown.Select = Select;
Dropdown.Search = Search;

export default Dropdown;
