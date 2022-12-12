import { useContext, useState } from "react";
import { IoIosSend } from "react-icons/io";
import ItemsContext from "../context/ItemsContext";

let i = 0;

function Search() {
  const [inputItem, setInputItem] = useState("");

  const { addItem } = useContext(ItemsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    i++;
    const myObj = { idNum: i, text: inputItem };
    addItem(myObj);
    setInputItem("");
  };

  const handleChange = (e) => {
    setInputItem(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar tarea..."
        onChange={handleChange}
        value={inputItem}
        maxLength={26}
        required
      />
      <button>
        <IoIosSend />
      </button>
    </form>
  );
}

export default Search;
