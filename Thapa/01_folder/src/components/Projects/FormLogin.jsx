import { useState } from "react";

const FormLogin = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userName,
      passWord,
    };
    console.log(formData);
  };
 
  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100 font-roboto">
      <form
        action=""
        onSubmit={handleFormSubmit}
        className="flex flex-col bg-white shadow-xl text-xl rounded-2xl p-8 w-full gap-3  max-w-md "
      >
        <h1 className="text-3xl font-semibold text-center">Login First</h1>
        <label htmlFor="username">User name :- </label>
        <input
          placeholder="Enter Username"
          className="border-white  p-1.5 rounded-md bg-gray-200"
          id="username"
          name="userName"
          type="text"
          required
          autoComplete="on"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="password">Password :- </label>
        <input
          placeholder="Enter Username"
          className="border-white  p-1.5 rounded-md bg-gray-200"
          id="password"
          name="passWord"
          type="password"
          required
          autoComplete="on"
          value={passWord}
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-400 p-2 flex text-white rounded-2xl text-center"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
