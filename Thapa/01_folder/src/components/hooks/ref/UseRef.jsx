import { useRef } from "react";

const UseRef = () => {
  const handleFormSubmit = () => {
    // e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  // when ever using useRef we get an object with
  // current value key with asigned value //
  const username = useRef(null);
  const password = useRef(null);

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-center items-center h-screen "
      >
        <div className="border rounded-2xl p-5 gap-2 flex flex-col">
          <h1 className="text-2xl ">Sign Up Please</h1>
          <label htmlFor="username">Username :</label>
          <input
            ref={username}
            type="text"
            id="username"
            placeholder="type here"
            className="border p-1 rounded-lg "
          />
          <label htmlFor="password">password :</label>
          <input
            ref={password}
            type="password"
            id="password"
            placeholder="type here"
            className="border p-1 rounded-lg "
          />
          <div>
            <button className="border flex bg-gray-400 p-1 rounded-xl mx-auto">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UseRef;
