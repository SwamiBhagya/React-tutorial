import { useEffect } from "react";
import { useState } from "react";

const UseEffects = () => {
  // this is for date time using useEffect

  const [date, setDate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const newDate = new Date();
      setDate(newDate.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-2xl">timer : {date}</h1>
      <div className="flex gap-5 text-xl ">
        <button
          onClick={() => {}}
          className="border p-1 rounded-xl bg-green-300 "
        >
          Start
        </button>
        <button className="border p-1 rounded-xl bg-red-300 ">End</button>
      </div>
    </div>
  );
};

//   const [count, setCount] = useState(0);

//   useEffect;
//   return (
//     <div className="flex flex-col justify-center items-center h-screen">
//       <h1 className="text-2xl">Count : {count}</h1>
//       <button
//         onClick={() => {
//           setCount((curCount) => curCount + 1);
//         }}
//         className="border p-3 rounded-2xl"
//       >
//         +1
//       </button>
//     </div>
//   );
// };

export default UseEffects;
