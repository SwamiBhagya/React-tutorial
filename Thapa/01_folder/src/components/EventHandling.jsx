export const EventHandling = () => {
  function handleButtonClick() {
    alert(`hey welcome`);
  }

  return (
    // main tutorial list
    // <>
    //   <button onClick={handleButtonClick} className="border-2 m-20">
    //     click Me!
    //   </button>

    //   <button
    //     onClick={function handleClick() {
    //       alert("you clicked me righted now");
    //     }}
    //     className="border-2"
    //   >
    //     click me2
    //   </button>

    //   <button onClick={() => {handleButtonClick("bhagya")}} className="border-2">
    //     click 3
    //   </button>
    // </>

    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleButtonClick}
        className="border-2"
      >
        click 1
      </button>
    </div>
  );
};
