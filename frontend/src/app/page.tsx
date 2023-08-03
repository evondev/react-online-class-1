"use client";
import { LoadingState, RenderLoadingStateValue } from "@/types/general.types";
import { Fragment } from "react";
const isRendered = false;
const loading: LoadingState = "successfully";
const numbers = [1, 2, 3, 4, 5];
export default function Home() {
  // if (!isRendered) {
  //   console.log("renderd");
  //   return null;
  // }
  const renderLoadingValue: RenderLoadingStateValue = {
    fetching: <div>Loading</div>,
    successfully: <div>Successfully</div>,
    error: <div>Error</div>,
  };
  const valuesGreaterThanTwo = numbers.filter((value) => value > 2);
  return (
    <Fragment>
      <div className="flex">
        {isRendered ? (
          <h3>This is h3</h3>
        ) : (
          <>
            <h1>Welcome to ReactJS course 1</h1>
            <h2>Welcome to ReactJS course 2</h2>
          </>
        )}
      </div>
      {renderLoadingValue[loading]}
      {/* {loading === "fetching" && <div>Loading</div>}
      {loading === "successfully" && <div>Successfully</div>}
      {loading === "error" && <div>Error</div>} */}
      {/* {loading === "fetching" ? (
        <div>Loading</div>
      ) : loading === "successfull" ? (
        <div>Sucessfull</div>
      ) : loading === "error" ? (
        <div>Error</div>
      ) : (
        <></>
      )} */}
      {valuesGreaterThanTwo.map((value: number, index: number) => {
        return <div key={index}>{value}</div>;
      })}
    </Fragment>
  );
}
function Button() {
  // body code
  return null;
}
const AnotherButton = () => <h1></h1>;
