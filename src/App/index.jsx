import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
  /**
   * Todo Componente dentro del provider puede acceder a las props
   */
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
