import React from "react";
import { HeaderProps } from "./Header.type";

const Header = (props: HeaderProps) => {
  return (
    <div className="flex w-full h-14 bg-black transition duration-300 ease-in-out drop-shadow-x p-4">
      {props.isGoback && (
        <div className="mr-2 hover: cursor-pointer" onClick={props.onGoback}>
          <img src="/images/chevronLeft.svg" alt="Chevron left icon" />
        </div>
      )}
      <div className="text-lg text-white">{props.title}</div>
    </div>
  );
};

export default Header;
