import React from "react";
import { SearchProps } from "./Search.type";

const Search = (props: SearchProps) => {
  return (
    <>
      <input
        value={props.value}
        onChange={props.onSearch}
        placeholder={props.placeholder}
        className="w-full h-12 flex justify-center items-center bg-slate-100 focus:outline-none rounded-xl px-11"
      />
      <img
        src="/images/search.svg"
        className="w-6 h-6 absolute mr-3 -mt-9 ml-3"
        alt="Search icon"
      />
      {props.value && (
        <div
          onClick={props.onDelete}
          className="absolute right-6 -mt-9"
        >
          <img src="images/cross.svg" alt="Close icon" />
        </div>
      )}
    </>
  );
};

export default Search;
