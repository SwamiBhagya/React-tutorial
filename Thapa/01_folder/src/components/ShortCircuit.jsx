import { useState } from "react";

const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  return (
    <>
      <div className="flex justify-center">
        <h1 className="mt-5 text-4xl">
          Welcome to the ShortCircuit Evaluation!
        </h1>
      </div>

      <div className="ml-30">
        {isLoggedIn && <h3>User LoggedIn</h3>}
        <br />
        {user ? `hello ${user}` : "please login"}
      </div>

      <p className="mt-1 text-xl ml-30">Hello user logged in!</p>
      <div className="flex flex-row gap-10 mt-10 items-center justify-center">
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
          className="border p-1 m-2 bg-blue-400 "
        >
          Toggle login
        </button>
        <button
          onClick={() => {
            setUser("Bhagya");
          }}
          className="border p-1 m-2 bg-blue-400 "
        >
          Set User
        </button>
        <button
          onClick={() => {
            setUser("");
          }}
          className="border p-1 m-2 bg-blue-400 "
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default ShortCircuit;