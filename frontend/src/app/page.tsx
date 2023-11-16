/* eslint-disable react/no-unescaped-entities */
"use client";

import { useGlobalStore } from "@/store";
import { twMerge } from "tailwind-merge";

export default function Page() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
    </div>
  );
}
function Navigation() {
  const { openNav, setOpenNav } = useGlobalStore();
  return (
    <nav
      className={twMerge(
        "fixed top-0 left-0 z-50 bg-white border-r w-[300px] border-r-gray-100 p-3 transition-all",
        openNav ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <button
        className="absolute z-10 flex items-center justify-center w-10 h-10 right-2 top-2"
        onClick={() => setOpenNav(false)}
      >
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
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <ul className="flex flex-col gap-3 pt-10">
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <li
              className="p-3 rounded-lg cursor-pointer hover:bg-gray-100"
              key={index}
            >
              Home
            </li>
          ))}
      </ul>
    </nav>
  );
}
function Header() {
  const { openNav, setOpenNav } = useGlobalStore();
  return (
    <button onClick={() => setOpenNav(true)}>
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
