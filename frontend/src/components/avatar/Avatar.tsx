import React from "react";
import { IconUser } from "../icons";
// type AvatarProps = {
//   title?: string;
//   image?: string;
// };
type AvatarProps =
  | {
      title?: string;
      image?: undefined;
    }
  | {
      title?: undefined;
      image?: string;
    };
function Avatar(props: AvatarProps) {
  const { title, image } = props;
  let child: React.ReactNode = <IconUser className="w-full h-full"></IconUser>;
  if (title) child = title.slice(0, 2);
  if (image)
    child = <img src={image} alt="" className="object-cover w-full h-full" />;
  return (
    <div className="flex items-center justify-center w-20 h-20 overflow-hidden font-bold text-white uppercase bg-purple-500 rounded-full">
      {child}
    </div>
  );
}

export default Avatar;
