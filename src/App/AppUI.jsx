import { CreateTodoButton } from "../CreateTodoButtom";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

export function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodos,
  deleteTodos,
}) {
  const todoListIsEmpty = !loading && !searchedTodos.length && !error;
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>error en carga datos</p>}
        {loading && <p>Cargando datos</p>}
        {todoListIsEmpty && <p>Crea tu primer Todo</p>}
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
      <CreateTodoButton />
    </>
  );
}
