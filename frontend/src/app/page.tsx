"use client";
import HackerNews from "@/features/HackerNews";
import TimerComponent from "@/features/TimerComponent";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  return (
    <div>
      <HackerNews></HackerNews>
      {/* <TimerComponent></TimerComponent> */}
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Home;
