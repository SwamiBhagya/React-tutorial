import { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import NewToDoList from "./NewToDoList";
import NewToDoDate from "./NewToDoDate";

const NewToDo = () => {
  let [inputValue, setInputValue] = useState({});
  const [task, setTask] = useState([]);

  inputValue = inputValue.toLowerCase();

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  //this is to handle form submition event
  function handleFormSubmit(event) {
    event.preventDefault(); //to prevent from reloading

    //this is to prevent empty input values
    if (!inputValue || inputValue === " ") return;
    if (inputValue.trim() === "") return;
    setInputValue(inputValue);

    // this is to prevent dublicate value
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    //this is to create new tasks & to kept old tasks in arrays
    setTask((prev) => [...prev, inputValue]);
    setInputValue(""); //clear the current value after submission
  }

  // Function to handle delete in todo
  const handleDeleteToDo = (value) => {
    const updatedTask = task.filter((currElem) => currElem !== value);
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
        <NewToDoDate />
      </header>
      <NewToDoForm
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleFormSubmit={handleFormSubmit}
      />
      <section className="mt-6 w-full max-w-2xl">
        <ul className="space-y-4">
          {task.map((curElem, index) => {
            return (
              <NewToDoList
                key={index}
                curElem={curElem}
                handleDeleteToDo={handleDeleteToDo}
                handleCheckToDo={handleCheckToDo}
              />
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

export default NewToDo;
