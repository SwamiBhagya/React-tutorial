import { Check, Key, X } from "lucide-react";

const NewToDoList = ({ curElem, handleCheckToDo, handleDeleteToDo, key }) => {

  return (
    <li
      key={key}
      className="flex justify-between items-center bg-gray-800/70 rounded-lg p-4 hover:bg-gray-700 transition-all"
    >
      <span className="text-3xl ml-10">{curElem}</span>
      <div className="flex gap-2">
        <button
          onClick={() => handleCheckToDo(curElem)}
          className="text-green-500 hover:text-green-600 mx-2 border-2 border-green-500 rounded-full p-2 transition-all transform hover:scale-105 focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          <Check />
        </button>
        <button
          onClick={() => handleDeleteToDo(curElem)}
          className="text-red-500 hover:text-red-600 mx-2 border-2 border-red-500 rounded-full p-2 transition-all transform hover:scale-105 focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          <X />
        </button>
      </div>
    </li>
  );
};

export default NewToDoList;