import { useEffect, useState } from "react";

const ChallengeEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `count:${count}`;
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="flex flex-col text-3xl gap-4 justify-center items-center bg-gray-400 h-screen">
      <h1>UseEffect Challenge</h1>
      <p>count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border text-xl p-2 rounded-2xl bg-white"
      >
        Increase
      </button>
      <div>
        <h1>{name}</h1>
        Name :
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded text-xl p-2"
          type="text"
        />
      </div>
    </div>
  );
};

export default ChallengeEffect;