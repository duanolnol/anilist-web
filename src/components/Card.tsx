import React from "react";
import { CardProps } from "./Card.type";

const Card = (props: CardProps) => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex mb-5">
        <div className="w-1/3 h-1/3 mr-5">
          <img
            src={props.image}
            alt="Anime"
            className="object-cover w-40 h-40 rounded"
          />
        </div>
        <div className="w-2/3 h-2/3">
          <div
            title={props.title}
            className="text-lg text-black font-bold mb-2 overflow-hidden truncate w-80"
          >
            {props.title ? props.title : "Untitled"}
          </div>
          <div className="flex mb-1">
            {props.genres.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-max h-5 bg-gray-700 rounded p-1 mr-2"
              >
                <div className="text-xs text-white">{item}</div>
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-500 mb-4">
            {props.duration && `${props.duration} Minutes`}
          </div>
          <div className="flex">
            {props.score && (
              <div
                className={
                  props.score > 60
                    ? "justify-center items-center text-center w-max h-max bg-green-600 p-2 mr-2"
                    : "justify-center items-center text-center w-max h-max bg-red-600 p-2 mr-2"
                }
              >
                <div className="text-xs text-white font-bold">Score</div>
                <div className="text-xl text-white font-bold">
                  {props.score}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
