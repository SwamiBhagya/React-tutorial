// Initial State: isTimer = false, count = 0

// Component renders
//       |
//       v
// useEffect runs
//       |
//       v
// if (!isTimer) return → Early exit, no interval created
//       |
//       v
// Timer is idle

// ---------------------------------------------------
// Click START → setIsTimer(true)
// ---------------------------------------------------

// Component re-renders
//       |
//       v
// useEffect runs
//       |
//       v
// if (!isTimer) return → false (isTimer = true)
//       |
//       v
// setInterval created → runs every 1 second
//       |
//       v
// setCount(prev => prev + 1)
//       |
//       v
// count updates → triggers re-render → interval continues

// ---------------------------------------------------
// Click STOP → setIsTimer(false)
// ---------------------------------------------------

// Component re-renders
//       |
//       v
// useEffect runs
//       |
//       v
// CLEANUP function runs first: clearInterval(id) → stops interval
//       |
//       v
// if (!isTimer) return → true → exit effect, nothing happens
//       |
//       v
// Timer stopped, count frozen

// import { useEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [isTimer, setIsTimer] = useState(false);

  useEffect(() => {
    if (!isTimer) return;
    let id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isTimer]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white p-10 rounded-2xl shadow-xl text-center w-80">
        <h2 className="text-5xl font-bold mb-8">count : {count}</h2>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsTimer(!isTimer)}
            className={`px-5 py-2 border rounded-lg font-semibold transition w-20
            ${isTimer ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} `}
          >
            {isTimer ? "stop" : "start"}
          </button>

          <button
            onClick={() => {
              setCount(0);
            }}
            className="px-5 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition font-semibold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
