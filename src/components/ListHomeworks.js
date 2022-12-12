import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";
import Item from "./Item";

function ListHomeworks() {
  const { items } = useContext(ItemsContext);

  return (
    <div className="list-homeworks">
      {items.map((el, i) => (
        <Item el={el} key={i} />
      ))}
    </div>
  );
}

export default ListHomeworks;
