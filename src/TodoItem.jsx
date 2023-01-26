import React from "react";
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
      <span onClick={onComplete}>C</span>
      <p>{text}</p>
      <span onClick={onDelete}>X</span>
    </li>
  );
}
