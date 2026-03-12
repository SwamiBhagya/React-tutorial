import { useEffect, useState } from "react";

const NotToApi = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, []);

  //  this is to use when their is an array of objects //

  return (
    <div>
      <ul>
        Data :
        {apiData.map((curElem) => (
          <li key={curElem.id}>{curElem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotToApi;

// how not to call Api in react
//
//
//
// import { useState } from "react";

// const NotToApi = () => {
//   const [apiData, setApiData] = useState([]);

//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => setApiData(data))
//     .catch((error) => console.log(error));
//   return (
//     <div>
//       <ul>
//         Data :
//         {apiData.map((curElem) => (
//           <li key={curElem.id}>{curElem.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NotToApi;
