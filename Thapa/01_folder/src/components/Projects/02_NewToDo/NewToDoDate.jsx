import { useState } from "react";

const NewToDoDate = () => {
  const [dateTime, setDateTime] = useState(""); //used for changing date and time//

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

  return (
    <h2 className="flex items-center justify-center my-1 text-xl">
      {dateTime}
    </h2>
  );
};

export default NewToDoDate;
