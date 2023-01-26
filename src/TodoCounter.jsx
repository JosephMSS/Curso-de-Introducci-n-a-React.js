import React from "react";

export function TodoCounter({ total, completed }) {
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
        Has completado {completed} de {total} todos
      </h1>
    </>
  );
}
