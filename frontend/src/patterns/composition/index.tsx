import { useState } from "react";

function Composition() {
  const [userInfo, setUserInfo] = useState({
    name: "evondev",
  });
  return (
    <div>
      <CompositionWrapper
        left={<ComponentA userInfo={userInfo}></ComponentA>}
        center={<ComponentB userInfo={userInfo}></ComponentB>}
        right={<ComponentC userInfo={userInfo}></ComponentC>}
      />
    </div>
  );
}
function CompositionWrapper({
  left,
  center,
  right,
}: {
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div>
      <div>{left}</div>
      <div>{center}</div>
      <div>{right}</div>
    </div>
  );
}
function ComponentA({ userInfo }: { userInfo?: any }) {
  return <div></div>;
}
function ComponentB({ userInfo }: { userInfo?: any }) {
  return <div></div>;
}
function ComponentC({ userInfo }: { userInfo?: any }) {
  return <div></div>;
}

export default Composition;
