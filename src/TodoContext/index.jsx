import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
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

export const TodoContext = createContext();
/**
 * Son los valores que vamos a compartir con context
 */

export function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage({
    itemName: "TODOS_V1",
    initialValue: [],
  });
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  const searchValueIsEmpty = !searchValue.length >= 1;
  if (searchValueIsEmpty) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = ({ id }) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    const todo = newTodos[todoIndex];
    todo.completed = !todo.completed;
    saveTodos(newTodos);
  };
  const deleteTodos = ({ id }) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const valuesProvided = {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos,
  };
  return (
    <TodoContext.Provider value={valuesProvided}>
      {children}
    </TodoContext.Provider>
  );
}
