/* eslint-disable react/display-name */
function withStyles(Component: any) {
  return (props: any) => {
    const className =
      "p-3 text-white bg-purple-500 border-none rounded-lg outline-none";
    return <Component className={className} {...props} />;
  };
}
function Button(props: any) {
  console.log("file: index.tsx:9 ~ Button ~ props:", props);
  return <button {...props}>Hello</button>;
}
export const ButtonWithStyles = withStyles(Button);
