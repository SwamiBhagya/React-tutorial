import { useState } from "react";
import { Check, X } from "lucide-react";

const ToDo = () => {
  let [inputValue, setInputValue] = useState({});
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState(""); //used for changing date and time//

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  //this is to handle form submition event
  const handleFormSubmit = (event) => {
    const { id, content, checked } = inputValue;
    event.preventDefault(); //to prevent from reloading

    //this is to prevent empty input values
    if (!content || content === " ") return;
    if (content.trim() === "") return;
    setInputValue(content);

    // this is to prevent dublicate value
    const ifToDoContentMatched = task.find(
      (curTask) => curTask.content === inputValue.content,
    );
    if (ifToDoContentMatched) return;

    //this is to create new tasks & to kept old tasks in arrays
    setTask((prev) => [...prev, { id, content, checked }]);
    setInputValue({ id: "", checked: false, content: "" }); //clear the current value after submission
  };

  // storing new date and Updating setDateTime State
  let interval = setInterval(() => {
    const currDate = new Date();
    const todaysDate = currDate.toLocaleDateString();
    const todaysTime = currDate.toLocaleTimeString();
    setDateTime(`${todaysDate} - ${todaysTime}`);
  }, 1000);

  // adding setTimeout function
  setTimeout(() => {
    clearInterval(interval);
  }, 20000);

  // Function to handle delete in todo
  // ohk vaalue is parameter from the onclick function and
  // vaalue is CurrentElement Click and then it will compare it to currElem
  const handleDeleteToDo = (vaalue) => {
    const updatedTask = task.filter((currElem) => currElem.content !== vaalue);
    setTask(updatedTask);
  };

  // Function to handle check button in todo
  const handleCheckToDo = () => {};

  // function to handle clear all button
  const handleClearAllButton = () => {
    setTask([]);
  };

  return (
    <section className="flex flex-col items-center min-h-screen pt-12 bg-linear-to-r from-[#001214] to-[#001f29] text-white transition-all duration-300 ease-linear overflow-hidden">
      <header className="mb-4 flex-row ">
        <h1 className="text-6xl font-bold tracking-wide ml-3">Todo List</h1>
        <h2 className="flex items-center justify-center my-1 text-xl">
          {dateTime}
        </h2>
      </header>
      <section className="flex flex-col items-center justify-around border-2 border-gray-600 rounded-xl text-3xl mx-4 my-0 min-h-[25vh] w-full max-w-2xl p-6 bg-gray-900/20 backdrop-blur-md">
        <form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-row items-center gap-3"
        >
          <input
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
            className="w-full border-2 border-gray-500 rounded-lg p-6 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-all"
            type="text"
            placeholder="Type your task..."
          />
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:bg-blue-800 focus:outline-none"
          >
            Add Task
          </button>
        </form>
      </section>
      <section className="mt-6 w-full max-w-2xl">
        <ul className="space-y-4">
          {task.map((curElem) => {
            return (
              <li
                key={curElem.id}
                className="flex justify-between items-center bg-gray-800/70 rounded-lg p-4 hover:bg-gray-700 transition-all"
              >
                <span className="text-3xl ml-10">{curElem.content}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCheckToDo(curElem)}
                    className="text-green-500 hover:text-green-600 mx-2 border-2 border-green-500 rounded-full p-2 transition-all transform hover:scale-105 focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                  >
                    <Check />
                  </button>
                  <button
                    onClick={() => handleDeleteToDo(curElem.content)}
                    className="text-red-500 hover:text-red-600 mx-2 border-2 border-red-500 rounded-full p-2 transition-all transform hover:scale-105 focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                  >
                    <X />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <footer className="mt-3 flex items-center justify-center">
          <button
            onClick={handleClearAllButton}
            className="border-black p-4 bg-red-500 text-2xl hover:bg-red-700 transition-normal rounded-2xl"
          >
            Clear All
          </button>
        </footer>
      </section>
    </section>
  );
};

export default ToDo;
