import { useState, useEffect } from "react";
import { AppUI } from "./AppUI";
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
function useLocalStorage({ itemName, initialValue }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);
  let parsedItem;

  useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    setTimeout(() => {
      try {
        if (!localStorageItem) {
          parsedItem = initialValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        // throw new Error("c murio");
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);
  /**
   *
   * @param {Array} newItemList
   */
  const saveItem = (newItemList) => {
    try {
      const stringifiedItem = JSON.stringify(newItemList);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItemList);
    } catch (error) {
      setError(true);
    }
  };
  /**
   * Cuando un hook retorna mas de dos elementos, esto se retornan en un objeto y no un array
   */
  return { item, saveItem, loading, error };
}
function App() {
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

  return (
    <AppUI
      error={error}
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
