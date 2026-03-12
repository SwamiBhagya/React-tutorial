import { useState } from "react";

const ButtonSwitch = () => {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex justify-center items-end h-screen"
    >
      <footer className="flex gap-3">
        <button
          onClick={() => setBgColor("red")}
          className="border bg-red-600 p-2 rounded-2xl w-25"
        >
          Red
        </button>
        <button
          onClick={() => setBgColor("blue")}
          className="border bg-blue-600 p-2 rounded-2xl w-25"
        >
          blue
        </button>
        <button
          onClick={() => setBgColor("yellow")}
          className="border bg-yellow-600 p-2 rounded-2xl w-25"
        >
          yellow
        </button>
        <button
          onClick={() => setBgColor("green")}
          className="border bg-green-600 p-2 rounded-2xl w-25"
        >
          green
        </button>
      </footer>
    </div>
  );
};

export default ButtonSwitch;
