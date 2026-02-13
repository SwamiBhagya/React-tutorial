import React, { useState } from "react";

const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

export default LiftingState;

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Text"
        className="border-2 p-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") console.log(inputValue);
        }}
      />
    </div>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return (
    <div>
      <h2>current input is: {inputValue}</h2>
    </div>
  );
};