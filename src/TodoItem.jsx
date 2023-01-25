import React from "react";
export function TodoItem(props) {
  return (
    <li
      key={props.id}
      className="grid  grid-cols-8 my-3 
    items-center
    text-white font-poppins font-medium
    h-14 rounded-lg
    bg-gradient-to-r 
    from-primary
    to-quaternary
    "
    >
      <span>C</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}
