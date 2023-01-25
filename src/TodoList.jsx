import {Children} from "react";
export function TodoList({ children }) {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
}
