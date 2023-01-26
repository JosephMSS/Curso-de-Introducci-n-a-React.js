import { useState } from "react";
import { CreateTodoButton } from "./CreateTodoButtom";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const randomId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
const createTodo = ({ text, completed = false }) => {
  return {
    id: randomId(),
    text,
    completed,
  };
};
const defaultTodoList = [
  createTodo({ text: "Cortar cebolla" }),
  createTodo({ text: "Estudiar" }),
  createTodo({ text: "Dormir", completed: true }),
];
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(defaultTodoList);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => {
          return (
            <TodoItem
              text={todo.text}
              id={todo.id}
              completed={todo.completed}
              key={todo.id}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
