"use client";
import Button from "@/components/button/Button";
import { IconLongArrowLeft, IconLongArrowRight } from "@/components/icons";
import RenderLoading from "@/features/loading/RenderLoading";
import { Fragment } from "react";
const isRendered = false;
const numbers = [1, 2, 3, 4, 5];
export default function Home() {
  // if (!isRendered) {
  //   console.log("renderd");
  //   return null;
  // }

  const valuesGreaterThanTwo = numbers.filter((value) => value > 2);
  return (
    <Fragment>
      <Button className="h-14" variant="secondary" size="lg">
        <span>Learn more</span>
        <IconLongArrowRight></IconLongArrowRight>
      </Button>
      {/* <div className="hidden">
        {isRendered ? (
          <h3>This is h3</h3>
        ) : (
          <>
            <h1>Welcome to ReactJS course 1</h1>
            <h2>Welcome to ReactJS course 2</h2>
          </>
        )}
      </div> */}
      {/* <RenderLoading></RenderLoading> */}
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
      {/* {valuesGreaterThanTwo.map((value: number, index: number) => {
        return <div key={index}>{value}</div>;
      })} */}
    </Fragment>
  );
}
