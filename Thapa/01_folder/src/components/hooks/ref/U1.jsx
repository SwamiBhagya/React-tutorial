import { useRef } from "react";

const U1 = () => {
  const handleIncreaseButton = () => {
    colorRef.current.style.color = "blue";
    // e.preventDefault();
    // const Data = inputDataRef.current.value;
    // console.log(Data);
  };

  const colorRef = useRef("red"); 
  // const inputFocusRef = useRef(null);
  const inputDataRef = useRef(null);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen text-4xl">
        <h1 ref={colorRef}>counter</h1>
        <div>
          <input ref={inputDataRef} className="border" type="" />
          <button
            onClick={handleIncreaseButton}
            className="border rounded-xl p-2 "
          >
            increase
          </button>
        </div>
      </div>
    </>
  );
};

export default U1;
