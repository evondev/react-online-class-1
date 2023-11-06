"use client";
import React from "react";
import { ThemeProvider } from ".";

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default ThemeContextProvider;
