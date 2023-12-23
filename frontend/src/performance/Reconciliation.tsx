import { useState } from "react";
const data = ["1", "2"];
const Reconciliation = () => {
  const [isShow, setIsShow] = useState(true);
  const [order, setOrder] = useState(false);
  const inputs = order ? [...data].reverse() : data;

  return (
    <div>
      <label>
        <input type="checkbox" onChange={() => setOrder(!order)} />
        Check to re-order
      </label>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      <div className="flex flex-col gap-5">
        {inputs.map((item) => (
          <input
            key={item}
            type="text"
            className="w-16 p-3 border border-pink-400 rounded outline-none"
            style={{
              border: item === "2" ? "1px solid red" : "1px solid blue",
            }}
          />
        ))}
        <Input />

        {isShow ? (
          <Input />
        ) : (
          <input
            className="p-3 border border-purple-400 rounded-lg shadow-sm outline-none"
            type="text"
            placeholder="Enter your content"
            key="search-content"
          ></input>
        )}
      </div>
    </div>
  );
};
function Input() {
  return (
    <input
      className="p-3 border border-blue-400 rounded-lg shadow-sm outline-none"
      type="text"
      placeholder="Search posts..."
      key="search-post"
    />
  );
}
const Component = () => {
  const Input = () => <input />;

  return <Input />;
};
export default Reconciliation;
