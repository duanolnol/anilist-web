import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <img src="/images/spinner.gif" className="w-4 h-4" alt="Spinner" />
      <div className="text-sm text-gray-500 ml-1">Loading</div>
    </div>
  );
};

export default Loading;
