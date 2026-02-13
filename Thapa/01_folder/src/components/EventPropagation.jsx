const EventPropagation = () => {
  return (
    <div
      onClickCapture={(event) => {
        console.log("This is grandparent");
        event.stopPropagation();
      }}
      className="text-6xl m-50 w-130 h-130 border-2"
    >
      Grandparent div
      <div
        onClickCapture={(event) => {
          console.log("This is parent");
          event.stopPropagation();
        }}
        className="text-3xl m-20 w-90 h-70 border-2"
      >
        parent
        <button
          onClickCapture={(event) => {
            console.log("this is child");
            event.stopPropagation();
          }}
          className="gap-10 mx-30 my-10 border-2"
        >
          child
        </button>
      </div>
    </div>
  );
};

export default EventPropagation;