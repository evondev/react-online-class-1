"use client";
import DropdownReducer from "@/components/dropdown/DropdownReducer";
import InputPasswordToggleReducer from "@/components/input/InputPasswordToggleReducer";
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
      <InputPasswordToggleReducer></InputPasswordToggleReducer>
    </div>
  );
}

export default home;
