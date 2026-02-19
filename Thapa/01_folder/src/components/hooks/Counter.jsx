import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + step);
  };

  const handleDecrementClick = () => {
    setCount(count - step);
  };

  const handleClearAllClick = () => {
    setCount(0);
  };

  return (
    <section className="flex justify-center items-center h-screen ">
      <div className="flex  flex-col h-[35%] gap-3 border-2  border-black pl-4 rounded-2xl">
        <h1 className="text-4xl px-20  pt-2">useState Challenge</h1>
        <h1>Count: {count}</h1>
        <div className="flex flex-row gap-1">
          <h4> Steps: </h4>
          <input
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="border rounded pl-1"
            type="number"
            placeholder="type number!"
          />
        </div>
        <footer className="flex flex-row gap-2">
          <button
            disabled={count >= 100}
            onClick={handleIncrementClick}
            className="px-4 py-2 mt-3 w-30  rounded-2xl border bg-black text-white"
          >
            Increment
          </button>
          <button
            disabled={count <= 0}
            onClick={handleDecrementClick}
            className="px-4 py-2 mt-3 w-30  rounded-2xl border bg-black text-white"
          >
            Decrement
          </button>
          <button
            onClick={handleClearAllClick}
            className="px-4 py-2 mt-3 w-30  rounded-2xl border bg-black text-white"
          >
            Clear All
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Counter;
