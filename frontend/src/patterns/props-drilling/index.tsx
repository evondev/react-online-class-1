interface ComponentAProps {
  userInfo: any;
}

export default function ComponentA({ userInfo }: ComponentAProps) {
  return (
    <div>
      <ComponentAChild userInfo={userInfo}></ComponentAChild>
    </div>
  );
}

interface ComponentAChildProps {
  userInfo: any;
}

function ComponentAChild({ userInfo }: ComponentAChildProps) {
  return (
    <div>
      <ComponentAChildChild userInfo={userInfo}></ComponentAChildChild>
    </div>
  );
}

interface ComponentAChildChildProps {
  userInfo: any;
}

function ComponentAChildChild({ userInfo }: ComponentAChildChildProps) {
  console.log(userInfo);
  return <div></div>;
}
