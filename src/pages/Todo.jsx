import { useState, useRef } from "react";
import ListItem from "../components/Listitem";

function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    const todoValue = inputRef.current.value;
    setTodos([...todos, todoValue]);
  };

  const deleteTodo = (index) => {
    // Filtrar la lista de tareas y actualizar el estado
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="">
        <input ref={inputRef} type="text" className="rounded-md bg-[#424242] px-4 py-2 mt-3" />
        <button onClick={addTodo} className="rounded-md bg-[#13cf33] ml-4 px-4 py-2">
          Add task
        </button>
      </div>
      <ul className="flex flex-col gap-3">
        {todos.map((value, index) => (
          <ListItem key={index} text={value} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
