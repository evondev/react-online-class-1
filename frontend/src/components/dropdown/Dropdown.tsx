import React, { useState } from "react";
type DropdownProps = {
  items?: string[];
  selectedText?: string;
};
function Dropdown({
  items = [],
  selectedText = "Select option",
}: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(selectedText);
  const handleClickItem = (value: string) => {
    setSelected(value);
    setShowDropdown(false);
  };
  return (
    <div className="w-[346px] relative">
      <div
        aria-label="dropdown-select"
        className="flex items-center justify-between px-3 py-4 border border-gray-300 rounded-lg cursor-pointer"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        {selected}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
          style={{
            transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {showDropdown && (
        <ul
          aria-label="dropdown-list"
          className="absolute left-0 w-full translate-y-3 bg-white rounded-lg shadow top-full"
        >
          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <div
                className="px-3 py-4 cursor-pointer hover:text-purple-400"
                onClick={() => handleClickItem(item)}
                key={index}
              >
                {item}
              </div>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
