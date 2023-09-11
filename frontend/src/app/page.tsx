"use client";
import React, { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const ref = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // const input = document.querySelector(".input") as HTMLInputElement;
    // if (input) {
    //   input.focus();
    // }
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  const listRef = useRef<HTMLUListElement>(null);
  const scrollToIndex = (index: number) => {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode?.querySelectorAll("li > img")[
      index
    ] as HTMLImageElement;
    imgNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  const counterRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState<number>(10);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      {/* <div className="aspect-video h-[500px]">
        <video
          src="/bai-4-array-type.mp4"
          controls
          ref={videoRef}
          className="object-fill w-full h-full"
        ></video>
      </div>
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }}
      >
        Pause
      </button> */}
      <input
        type="text"
        placeholder="Enter your content"
        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent input"
        ref={ref}
      />
      <div
        aria-label="counter"
        className="inline-flex overflow-hidden border rounded-lg border-slate-200"
      >
        <button className="flex items-center justify-center w-10 h-10 cursor-pointer hover:bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>
        <span
          className="flex items-center justify-center w-20 h-10 text-2xl font-bold"
          ref={counterRef}
        >
          0
        </span>
        <button
          className="flex items-center justify-center w-10 h-10 cursor-pointer hover:bg-slate-100"
          // onClick={() => {
          //   if (counterRef.current && counterRef.current.textContent) {
          //     counterRef.current.textContent =
          //       parseInt(counterRef.current.textContent) + 1;
          //   }
          // }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
      <div>Timer: {timer}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <Input ref={inputRef} value={inputVal} onChange={setInputVal}></Input>
      <button
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        Focus
      </button>
      <button
        onClick={() => {
          setInputVal("");
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }}
      >
        Clear input
      </button>
    </div>
  );
}

const Input = React.forwardRef(function Input(
  props: any,
  ref: React.LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <input
      type="text"
      placeholder="Default placeholder"
      className="p-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500"
      ref={ref}
      defaultValue={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
});

export default Home;
