import { memo, useCallback, useMemo, useState } from "react";
const largeData: any[] = [];
const ReRenders = () => {
  const [counter, setCounter] = useState(0);
  const dataSource = useMemo(() => {
    return largeData;
  }, []);
  const data = useMemo(
    () => ({
      name: "evondev",
    }),
    []
  );
  const handleCounter = useCallback(() => {
    setCounter(counter + 1);
  }, []);
  return (
    <div>
      {/* <Counter></Counter> */}
      <span>{counter}</span>

      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <OtherComponentMemo
        data={data}
        onClick={handleCounter}
      ></OtherComponentMemo>
    </div>
  );
};
function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </>
  );
}
const OtherComponentMemo = memo(OtherComponent);
function OtherComponent({ data, onClick }: { data: any; onClick: () => void }) {
  console.log(onClick);
  return <div>Other Component</div>;
}
export default ReRenders;
