import { useTodos } from "./useTodos";
import { Container } from "./Container";
import { CreateTodoButton } from "../CreateTodoButtom";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import TodoHeader from "../TodoHeader";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodos,
    setOpenModal,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    saveTodo,
  } = useTodos();

  const todoListIsEmpty = !loading && !searchedTodos.length && !error;

  return (
    <>
      <Container>
        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <CreateTodoButton setOpenModal={setOpenModal} label="Crear Tarea" />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
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
            <TodoForm setOpenModal={setOpenModal} saveTodo={saveTodo} />
          </Modal>
        )}
      </Container>
    </>
  );
}

export default App;
