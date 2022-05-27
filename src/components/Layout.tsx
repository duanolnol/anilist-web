import React from "react";
import { LayoutProps } from "./Layout.type";

const Layout = (props: LayoutProps) => {
  return (
    <main className="w-1/3 m-auto bg-white shadow-2xl shadow-gray-600">
      {props.children}
    </main>
  );
};

export default Layout;
