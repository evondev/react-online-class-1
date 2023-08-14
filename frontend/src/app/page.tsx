"use client";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import Dropdown from "@/components/dropdown/Dropdown";
import DropdownComplex from "@/components/dropdown/DropdownComplex";
import { IconLongArrowRight, IconUser } from "@/components/icons";
import InputAdvanced from "@/components/input/InputAdvanced";
import InputPasswordToggle from "@/components/input/InputPasswordToggle";
import { TabAdvanced } from "@/components/tab";
import Toggle from "@/components/toggle/Toggle";
import ToggleV2 from "@/components/toggle/ToggleV2";
import { postTabList } from "@/constants/general.const";
import { EPostTabList } from "@/types/general.types";
import classNames from "classnames";
import { Fragment, useState } from "react";
let a = 100;
type TTabs = "Trending" | "Recent";
export default function Home() {
  const handleDangerClick = (value: number) => {
    console.log("danger clicked");
  };
  const tabs: TTabs[] = ["Trending", "Recent"];
  const [activeTab, setActiveTab] = useState<TTabs>("Trending");
  const [isShowButton, setIsShowButton] = useState<boolean>(false);
  const handleToggleButton = () => {
    setIsShowButton((prev) => !prev);
  };
  // const [toggles, setToggles] = useState({
  //   showButton: false,
  //   showAccount: true,
  //   showSettings: true,
  // });
  // const handleUpdateToggles = () => {
  //   setToggles((prev) => ({
  //     ...prev,
  //     showAccount: false,
  //   }));
  // };
  // const [isShowButton2, setIsShowButton2] = useState<boolean>(false);
  // const handleToggleButton2 = () => {
  //   setIsShowButton2((prev) => !prev);
  // };
  // const [isShowButton3, setIsShowButton3] = useState<boolean>(false);
  // const handleToggleButton3 = () => {
  //   setIsShowButton3((prev) => !prev);
  // };
  const [inputPasswordType, setInputPasswordType] = useState<
    "text" | "password"
  >("password");
  return (
    <Fragment>
      <div className="flex flex-wrap items-start gap-10">
        <Button className="h-14" variant="secondary" size="lg">
          <span>Learn more</span>
          <IconLongArrowRight></IconLongArrowRight>
        </Button>
        <Button
          onClick={() => handleDangerClick(a)}
          type="button"
          className="h-14"
          variant="danger"
          size="sm"
        >
          <span>Danger mode</span>
          <IconUser></IconUser>
        </Button>
        <Avatar title="Evondev"></Avatar>
        <TabAdvanced
          items={tabs}
          renderItems={(item) => (
            <div
              className={classNames(
                "p-2 rounded cursor-pointer",
                activeTab === item
                  ? "bg-orange-400 text-white"
                  : "hover:bg-gray-100"
              )}
              onClick={() => setActiveTab(item)}
              key={item}
            >
              {item}
            </div>
          )}
        >
          <div>Trending posts</div>
          <div>Latest posts</div>
        </TabAdvanced>
        <ToggleV2
          isActive={isShowButton}
          onClick={handleToggleButton}
        ></ToggleV2>
        {isShowButton && <Button variant="primary">Github copilot</Button>}
        <DropdownComplex
          items={[
            {
              name: "Evondev",
              avatar: "https://avatars.githubusercontent.com/u/25105806?v=4",
            },
          ]}
          selectedText={"Select member"}
        ></DropdownComplex>
        <InputPasswordToggle
          placeholder="Enter your password"
          className="w-[300px]"
          type="password"
          showIcon
        ></InputPasswordToggle>
        <InputAdvanced
          placeholder="Enter your password"
          className="w-[300px]"
          type="text"
          // onIconClick={() => {
          //   setInputPasswordType((prev) =>
          //     prev === "password" ? "text" : "password"
          //   );
          // }}
          // togglePassword
        ></InputAdvanced>
      </div>
    </Fragment>
  );
}
