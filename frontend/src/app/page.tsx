"use client";
import HackerNews from "@/features/HackerNews";
import HackerNewsQuery from "@/features/HackerNewsQuery";
import PropertyList from "@/features/PropertyList";
import TimerComponent from "@/features/TimerComponent";
import UserList from "@/features/UserList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();

function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <HackerNews></HackerNews> */}
      {/* <HackerNewsQuery></HackerNewsQuery> */}
      {/* <TimerComponent></TimerComponent> */}
      {/* <UserList></UserList> */}
      <PropertyList></PropertyList>
      <ToastContainer></ToastContainer>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default Home;
