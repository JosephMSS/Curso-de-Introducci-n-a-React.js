import { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButtom";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
export function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodos,
    setOpenModal,
    openModal,
  } = useContext(TodoContext);

  const todoListIsEmpty = !loading && !searchedTodos.length && !error;
  return (
    <>
      <TodoCounter />
      <CreateTodoButton setOpenModal={setOpenModal} label="Crear Tarea" />
      <TodoSearch />
      <TodoList>
        {error && <p className="text-red-600">{error.message}</p>}
        {loading && <p className="text-green-500">Cargando datos...</p>}
        {todoListIsEmpty && (
          <p className="text-green-500">Crea tu primer Todo</p>
        )}
        {searchedTodos.map((todo) => {
          return (
            <TodoItem
              text={todo.text}
              id={todo.id}
              completed={todo.completed}
              key={todo.id}
              onComplete={() => {
                completeTodos({ id: todo.id });
              }}
              onDelete={() => {
                deleteTodos({ id: todo.id });
              }}
            />
          );
        })}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}
