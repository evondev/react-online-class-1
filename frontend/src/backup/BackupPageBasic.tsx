"use client";
const isRendered = false;
const numbers = [1, 2, 3, 4, 5];
export default function Home() {
  // if (!isRendered) {
  //   console.log("renderd");
  //   return null;
  // }

  const valuesGreaterThanTwo = numbers.filter((value) => value > 2);
  return (
    <>
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
    </>
  );
}
