"use client";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { IconLongArrowRight, IconUser } from "@/components/icons";
import { Tab } from "@/components/tab";
import { Fragment } from "react";
let a = 100;
export default function Home() {
  const handleDangerClick = (value: number) => {
    console.log("danger clicked");
  };
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
        <Tab></Tab>
      </div>
    </Fragment>
  );
}
