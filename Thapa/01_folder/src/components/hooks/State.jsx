import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };

  return (
    <div className="flex items-center justify-center h-150 flex-col">
      <h1>{count}</h1>
      <button onClick={handleButtonClick} className="border-2 p-1 ">
        Increment
      </button>
      {console.log("parent component")}
      <Children counter={count} />
    </div>
  );
};

export default State;

export const Children = ({ counter }) => {
  return (
    <div>
      <h1>Childern component {counter}</h1>
      {console.log("child component")}
    </div>
  );
};

export const Sibling = () => {
  return (
    <div
      style={{ position: "relative", zIndex: 1, backgroundColor: "lightgray" }}
    >
      <p>Hii sibling </p>
      {console.log("sibling component")}
    </div>
  );
};

// export const Sibling = () => {
//   return (
//     <>
//       <h1 style={{ color: "red", visibility: "visible" }}>
//         Sibling component is visible!
//       </h1>
//       {console.log("sibling component")};
//     </>
//   );
// };