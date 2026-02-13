import { useState } from "react";

const ToogleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleClick = () => {
    setIsOn(!isOn);
  };
  return (
    <div className=" w-full h-screen flex justify-center">
      <div
        onClick={handleToggleClick}
        className={` w-25 h-12.5 rounded-[25px] bg-[#ccc] relative cursor-pointer p-1.25 mt-20 shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px] ${isOn ? "bg-green-400" : "bg-red-400"}`}
      >
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transform border-2 transition-all duration-300 ${
            isOn
              ? "bg-green-400 translate-x-12.5 text-white "
              : "bg-red-400 translate-x-0 text-white"
          } font-medium text-sm`}
        >
          <span>{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>
    </div>
  );
};

export default ToogleSwitch;
