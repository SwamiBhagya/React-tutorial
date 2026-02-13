const EventProps = () => {
  return (
    <div>
      <WelcomeUser
        buttonclick={() => {
          alert("button click");
        }}
        childern={"Alert button"}
      />
    </div>
  );
};

export default EventProps;

const WelcomeUser = ({ buttonclick, childern }) => {
  return (
    <>
      <button onClick={buttonclick}>{childern}</button>
    </>
  );
};

// const EventProps = () => {
//   return (
//     <>
//       <WelcomeUser
//         buttonclick={() => console.log("Hey you click")}
//         mousemove={() => console.log("hey you just hovered")}
//       />
//     </>
//   );
// };

// export default EventProps;

// const WelcomeUser = ({ buttonclick, mousemove }) => {
//   return (
//     <>
//       <button onClick={buttonclick} className="border-2">
//         Click me
//       </button>
//       <button onMouseEnter={mousemove} className="border-2">
//         Hover
//       </button>
//     </>
//   );
// };