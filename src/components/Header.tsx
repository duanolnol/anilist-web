import React from "react";
import { HeaderProps } from "./Header.type";

const Header = (props: HeaderProps) => {
  return (
    <div className="flex items-center w-full h-16 bg-black p-4">
      <div className="text-lg text-white">{props.title}</div>
    </div>
  );
};

export default Header;
