import ListHomeworks from "./ListHomeworks";
import Search from "./Search";

function Container() {
  return (
    <div className="container">
      <h1>📘TAREAS</h1>
      <Search />
      <ListHomeworks />
    </div>
  );
}

export default Container;
