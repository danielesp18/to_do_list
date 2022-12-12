import { createContext, useState } from "react";

const ItemsContext = createContext();

const initialItems = [];

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(initialItems);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const data = { items, addItem };

  return <ItemsContext.Provider value={data}>{children}</ItemsContext.Provider>;
};

export { ItemsProvider };
export default ItemsContext;
