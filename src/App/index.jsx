import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
import { Container } from "./Container";

function App() {
  /**
   * Todo Componente dentro del provider puede acceder a las props
   */
  return (
    <TodoProvider>
      <Container>
        <AppUI />
      </Container>
    </TodoProvider>
  );
}

export default App;
