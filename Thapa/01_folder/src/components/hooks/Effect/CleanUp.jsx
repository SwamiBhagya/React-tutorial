import { useEffect, useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(670000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((curCount) => curCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white text-3xl ">
        <h1>This is My real time Counting going on</h1>
        <div className="flex m-5 ">{count}</div>
        <h3 className="flex">
          Subscribers <br /> Realtime Count
        </h3>
      </div>
    </div>
  );
};

export default CleanUp;