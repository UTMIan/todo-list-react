import { useState, useRef } from "react";
import ListItem from "../components/Listitem";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // Agregar nueva tarea
  const addTodo = () => {
    const todoValue = inputRef.current.value;
    setTodos([todoValue, ...todos]);
  };

  // Borrar tarea
  const deleteTodo = (id) => {
    // Filtra la lista de tareas y actualiza el estado
    const updatedTodos = todos.filter((_, i) => i !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="">
        <input ref={inputRef} type="text" className="rounded-md bg-[#424242] px-4 py-2 mt-3" />
        <button onClick={addTodo} className="rounded-md bg-[#13cf33] ml-4 px-4 py-2 hover:bg-green-600">
          Add task
        </button>
      </div>
      <ul className="flex flex-col gap-3">
        {todos.map((value, id) => (
          <ListItem key={id} text={value} onDelete={() => deleteTodo(id)} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
