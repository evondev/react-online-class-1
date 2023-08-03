import { LoadingState, RenderLoadingStateValue } from "@/types/general.types";
import React from "react";
const loading: LoadingState = "successfully";

function RenderLoading() {
  const renderLoadingValue: RenderLoadingStateValue = {
    fetching: <div>Loading</div>,
    successfully: <div>Successfully</div>,
    error: <div>Error</div>,
  };
  return <div>{renderLoadingValue[loading]}</div>;
}

export default RenderLoading;
