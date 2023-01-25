import React from "react";
export function TodoItem(props) {
  const onComplete = (event) => {
    event.preventDefault;
    alert("Todo Completado!");
  };
  const onDelete = (event) => {
    event.preventDefault;
    alert("Todo eliminado");
  };
  return (
    <li
      className="grid  grid-cols-8 my-3 
    items-center
    text-white font-poppins font-medium
    h-14 rounded-lg
    bg-gradient-to-r 
    from-primary
    to-quaternary
    "
    >
      <span onClick={onComplete}>C</span>
      <p>{props.text}</p>
      <span onClick={onDelete}>X</span>
    </li>
  );
}
