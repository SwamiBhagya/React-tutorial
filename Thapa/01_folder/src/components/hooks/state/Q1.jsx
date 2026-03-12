import React, { useState } from "react";

const Q1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div>{count}</div>
      <button onClick={handleClick} className="border-2 p-1 ">
        Increase
      </button>
    </div>
  );
};

export default Q1;

// const users = [
//   { name: "alice", age: 22 },
//   { name: "ram", age: 29 },
//   { name: "raju", age: 27 },
//   { name: "saurav", age: 23 },
// ];

// const Q1 = () => {
//   return (
//     <>
//       <ul>
//         <li>
//           {users.map(({ name, age }) => {
//             return (
//               <p>
//                 {name}-{age}
//               </p>
//             );
//           })}
//         </li>
//       </ul>
//       {/*
//       <div>
//         {users.map(({ name, age }, index) => {
//           return (
//             <div key={index}>
//               name: {name}
//               age: {age}
//             </div>
//           );
//         })}
//       </div> */}
//     </>
//   );
// };

// export default Q1;