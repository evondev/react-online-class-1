"use client";
import Toggle from "@/components/toggle/Toggle";
import { useDebounce, useInputChange, useToggle } from "@/hooks";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

function Home() {
  const { value, toggleValue } = useToggle(true);
  const { value: filter, toggleValue: toggleFilter } = useToggle(false);
  const { value: displayPost, toggleValue: toggleDisplayPost } =
    useToggle(false);
  const [formValues, setFormValues] = useState({
    emailAddress: "",
  });
  const handleInputChange = useInputChange(formValues, setFormValues);
  const [query, setQuery] = useState("");
  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const queryDebounce = useDebounce<string>(query, 5000);
  return (
    <div>
      <Toggle value={value} onClick={toggleValue}></Toggle> Status
      <Toggle value={filter} onClick={toggleFilter}></Toggle> Filter
      <button onClick={() => toggleDisplayPost(true)}>Show post</button>
      {displayPost && <div>Your post here</div>}
      <div className="flex items-center max-w-lg p-3 m-5 bg-gray-100 rounded-lg gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-6 h-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <div className="w-full">
          <input
            type="text"
            className="w-full text-sm font-medium bg-transparent outline-none"
            placeholder="Your Email"
            value={formValues.emailAddress}
            name={"emailAddress"}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex items-center max-w-lg p-3 m-5 bg-gray-100 rounded-lg gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-6 h-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <div className="w-full">
          <input
            type="text"
            className="w-full text-sm font-medium bg-transparent outline-none"
            placeholder="Enter your query"
            name={"query"}
            onChange={handleChangeQuery}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
