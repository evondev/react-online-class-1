"use client";
import Counter from "@/features/Counter";
import LoginForm from "@/features/auth/LoginForm";
import LoginFormReducer from "@/features/auth/LoginFormWithReducer";
import React from "react";

function home() {
  return (
    <div>
      {/* <LoginForm></LoginForm> */}
      {/* <LoginFormReducer></LoginFormReducer> */}
      <Counter></Counter>
    </div>
  );
}

export default home;
