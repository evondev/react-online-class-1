import { useState } from "react";

function TableData({
  children,
}: {
  children?: React.ReactNode | ((...args: any) => any);
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {typeof children === "function"
        ? children({
            isOpen,
            setIsOpen,
          })
        : children}
    </div>
  );
}

export default TableData;
