import { useState, useRef } from "react";
import ListItem from "../components/Listitem";


function Todo(){
    // useState -> [state, setState]
    const [todos, setTodos] = useState([]);

    const inputRef = useRef(null);
    
    // Add new ToDo
    const addTodo = () => {
        const todoValue = inputRef.current.value;
        console.log(todoValue);
        setTodos([...todos, todoValue]);
    };

    return (
    <div className="flex flex-col gap-3">
        <div className="">
            <input ref={inputRef} type="text" className="rounded-md bg-[#424242] px-4 py-2 mt-3" />
            <button onClick={addTodo} className="rounded-md bg-[#3fc516] ml-4 px-4 py-2">Add task</button>
        </div>
        <ul className="flex flex-col gap-3">
            {
                todos.map((value, index)=> {
                    return <ListItem key={index} text={value} />
                })
            }
        </ul>
    </div>
    
    )
    

}
export default Todo;