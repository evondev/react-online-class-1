"use client";
import classNames from "classnames";
import React, { useState } from "react";
// type TTabs = "popular" | "recent" | "trending";
// type Example = { label: string; value: string };
type TabProps<T> = {
  children?: React.ReactNode;
  items: T[];
  renderItems: (item: T) => React.ReactNode;
};
function TabAdvanced<T>(props: TabProps<T>) {
  const { children, items, renderItems } = props;
  // const [value, setValue] = useState(true);
  // const value = state[0];
  // console.log("Tab ~ value:", value);
  // const updateValue = state[1];
  // console.log("Tab ~ updateValue:", updateValue);
  // let activeTab = "popular";

  // const handleClickTab = (tab: ETabList) => {
  //   if (activeTab === tab) return;
  //   setActiveTab(tab);
  //   // activeTab = tab;
  // };
  if (!items || items.length <= 0) return null;
  return (
    <div>
      <div className="flex gap-5 p-2 bg-white rounded-lg shadow-sm whitespace-nowrap">
        {items.map((item, index) => renderItems(item))}
        {/* {items.map((item, index) => (
          <div key={index}>{JSON.stringify(item)}</div>
        ))} */}
        {/* {items.map((tab, index: number) => (
          <div
            className={classNames(
              "p-2 rounded cursor-pointer",
              isActive ? "bg-orange-400 text-white" : "hover:bg-gray-100"
            )}
            onClick={onClick}
            key={index}
          >
            {tab.label}
          </div>
        ))} */}
      </div>
      <div className="p-2 mt-5 bg-white rounded-lg shadow-sm tab-content">
        {children}
        {/* {ETabList.POPULAR === activeTab && <div>Popular</div>}
        {ETabList.RECENT === activeTab && <div>Recent</div>}
        {ETabList.TRENDING === activeTab && <div>Trending</div>} */}
      </div>
    </div>
  );
}

export default TabAdvanced;
