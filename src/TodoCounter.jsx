import React from "react";

export function TodoCounter(props) {
  return (
    <>
      <h1
        className="
            flex
            justify-center
            justify-self-auto
            mb-4 mt-3
            text-primary
            xs:text-base
            font-poppins font-semibold
            sm:text-lg"
      >
        Has completado 2 de 3 todos
      </h1>
    </>
  );
}