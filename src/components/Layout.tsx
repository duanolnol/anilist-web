import React from "react";
import { LayoutProps } from "./Layout.type";

const Layout = (props: LayoutProps) => {
  return (
    <main className="relative max-w-lg m-auto bg-white shadow-2xl shadow-gray-600">
      {props.children}
    </main>
  );
};

export default Layout;
