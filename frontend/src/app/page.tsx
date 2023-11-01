/* eslint-disable react/no-unescaped-entities */
"use client";

import useToggle from "@/patterns/custom-hooks";
import TableData from "@/patterns/render-props";

export default function Page() {
  // const [userInfo, setUserInfo] = useState({
  //   name: "evondev",
  //   job: "Frontend Developer",
  // });

  return (
    <div>
      <Page2>
        <VeryExpensiveComponent></VeryExpensiveComponent>
      </Page2>
    </div>
  );
}
function Page2({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <ButtonToggle></ButtonToggle>
      <TableData>
        {({ isOpen, setIsOpen }) => (
          <>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 text-white rounded-lg ${
                isOpen ? "bg-pink-500" : "bg-blue-500"
              }`}
            >
              Toggle purple
            </button>
            <div className="mb-5"></div>
            {isOpen && <div className="p-5 bg-purple-400 rounded-md"></div>}
          </>
        )}
      </TableData>
      {children}
    </div>
  );
}

function ButtonToggle() {
  const { isOpen: isOpen2, setIsOpen: setIsOpen2 } = useToggle();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen2(!isOpen2)}
        className={`p-3 text-white rounded-lg ${
          isOpen2 ? "bg-pink-500" : "bg-blue-500"
        }`}
      >
        Toggle purple
      </button>
      <div className="mb-5"></div>
      {isOpen2 && <div className="p-5 bg-purple-400 rounded-md"></div>}
    </>
  );
}

function VeryExpensiveComponent() {
  console.log("render expensive component");
  // render 1000 rows with for loop
  const rows = [];
  for (let i = 0; i < 10000; i++) {
    rows.push(
      <div key={i} className="p-2 my-2 bg-orange-300">
        Row {i}
      </div>
    );
  }
  return <div>{rows}</div>;
}
