import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
export function TodoItem({ onComplete, onDelete, text, completed }) {
  return (
    <li
      className={`grid  grid-cols-8 my-3 
    items-center
    text-white font-poppins font-medium
    h-14 rounded-lg
    bg-gradient-to-r 
    ${completed ? "from-primary" : "from-secondary"} 
    ${completed ? "to-quaternary" : "to-tertiary"}
    ${completed ? "opacity-70" : "opacity-100"}`}
    >
      <span className=" mx-2 col-span-1" onClick={onComplete}>
        <BiCheckCircle
          className={`
          text-2xl 
          ${completed ? "text-quaternary" : "text-white"}`}
        />
      </span>
      <p
        className={`
          col-span-5 truncate mx-1 
          ${completed ? "line-through" : "no-underline"}
          `}
      >
        {text}
      </p>
      <span className="" onClick={onDelete}>
        <TiDelete className="text-2xl" />
      </span>
    </li>
  );
}
