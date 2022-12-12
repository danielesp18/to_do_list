import "./App.css";
import Container from "./components/Container";
import { ItemsProvider } from "./context/ItemsContext";

function App() {
  return (
    <main className="App">
      <ItemsProvider>
        <Container />
      </ItemsProvider>
    </main>
  );
}

export default App;
