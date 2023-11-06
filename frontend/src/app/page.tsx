/* eslint-disable react/no-unescaped-entities */
"use client";

import ButtonComposition from "@/patterns/composition/ButtonComposition";
import Dropdown from "@/patterns/compound-components";
import { useTheme } from "@/patterns/context";
import useToggle from "@/patterns/custom-hooks";
import TableData from "@/patterns/render-props";
import { useState } from "react";

export default function Page() {
  // const [userInfo, setUserInfo] = useState({
  //   name: "evondev",
  //   job: "Frontend Developer",
  // });
  const theme = useTheme();
  const countries = ["Viet Nam", "Japan", "Korea", "China"];
  const [selectedCountry, setSelectedCountry] = useState("Select country");
  return (
    <div>
      <ButtonComposition
        onClick={() => theme?.setMode("light")}
        icon={<IconUser></IconUser>}
      >
        Toggle Darkmode
      </ButtonComposition>
      <div className="mb-5"></div>
      <Dropdown>
        <Dropdown.Select>{selectedCountry}</Dropdown.Select>
        <Dropdown.List>
          <Dropdown.Search placeholder="Search..."></Dropdown.Search>
          {countries.map((country) => (
            <Dropdown.Item
              key={country}
              onClick={() => setSelectedCountry(country)}
            >
              {country}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
      {/* <Page2>
        <VeryExpensiveComponent></VeryExpensiveComponent>
      </Page2> */}
    </div>
  );
}
function IconUser() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
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
