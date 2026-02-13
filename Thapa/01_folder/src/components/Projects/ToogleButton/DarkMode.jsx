import { useState } from "react";
import { Power, PowerOff } from "lucide-react";

const DarkMode = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${isOn ? "bg-gray-600" : ""}`}
    >
      <div
        onClick={handleToggleClick}
        className={`w-25 h-12.5 rounded-[25px] bg-[#ccc] relative cursor-pointer p-1.25 mt-20 shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px]`}
      >
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transform border transition-all duration-250 ${
            isOn
              ? "bg-gray-600 translate-x-12.5 text-white "
              : "bg-white translate-x-0 text-black border-amber-50"
          }`}
        >
          <span className="flex items-center justify-center">
            {isOn ? (
              <>
                <Power size={16} />
              </>
            ) : (
              <PowerOff size={16} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
