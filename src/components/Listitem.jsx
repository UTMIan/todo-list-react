import { useState } from "react";

function ListItem({ text, checked, onDelete }) {
  const [isChecked, setChecked] = useState(checked);

  const handleCheck = () => {
    setChecked(!isChecked);
  };

  return (
    <li className={`p-2 bg-[#2e2e2e86] rounded-md flex justify-between items-center ${isChecked ? 'line-through' : ''}`}>
      <div>
        <input className="m-2" type="checkbox" checked={isChecked} onChange={handleCheck} />
        {text}
      </div>
      <div>
        <button onClick={onDelete} className="rounded-md bg-[#b81d1d] px-2 py-1">
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;
