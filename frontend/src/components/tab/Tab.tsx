import classNames from "classnames";
import React, { useState } from "react";
type TTabs = "popular" | "recent" | "trending";
const tabList: {
  label: string;
  value: TTabs;
}[] = [
  {
    label: "Popular",
    value: "popular",
  },
  {
    label: "Recent",
    value: "recent",
  },
];
function Tab() {
  // const [value, setValue] = useState(true);
  // const value = state[0];
  // console.log("Tab ~ value:", value);
  // const updateValue = state[1];
  // console.log("Tab ~ updateValue:", updateValue);
  const [activeTab, setActiveTab] = useState<TTabs>("popular");
  const handleClickTab = (tab: TTabs) => {
    if (activeTab === tab) return;
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex gap-5 p-2 bg-white rounded-lg shadow-sm whitespace-nowrap">
        {tabList.map((tab, index: number) => (
          <div
            className={classNames(
              "p-4 rounded cursor-pointer",
              activeTab === tab.value
                ? "bg-orange-400 text-white"
                : "hover:bg-gray-100"
            )}
            onClick={() => handleClickTab(tab.value)}
            key={index}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="p-2 mt-5 bg-white rounded-lg shadow-sm tab-content">
        <div>Popular</div>
        <div>Recent</div>
        <div>Trending</div>
      </div>
    </div>
  );
}

export default Tab;
