import { useState } from "react";

const FormCardRight = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    passWord: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = () => {};

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="font-roboto flex justify-center items-center h-screen bg-gray-100"
      >
        <div className="flex flex-col border-white p-8 rounded-2xl gap-2 bg-white shadow-xl w-full max-w-md">
          <h1 className="text-4xl font-semibold mb-4">Sign up to register</h1>
          <p className="text-gray-600">
            Please fill this form to create your account.
          </p>

          <label htmlFor="firstname">First Name :-</label>
          <input
            value={user.firstName}
            onChange={handleInputChange}
            id="firstname"
            name="firstName"
            placeholder="enter first name"
            className=" p-1.5 border rounded-md bg-blue-200"
            type="text"
            required
          />

          <label htmlFor="lastname">Last Name :-</label>
          <input
            value={user.lastName}
            onChange={handleInputChange}
            id="lastname"
            name="lastName"
            placeholder="enter second name"
            className=" p-1.5 border rounded-md bg-blue-200"
            type="text"
            required
          />

          <label htmlFor="phonenumber">Phone Number :-</label>
          <input
            value={user.phoneNumber}
            onChange={handleInputChange}
            id="phonenumber"
            name="phoneNumber"
            placeholder=" enter phone number"
            className=" p-1.5 border rounded-md bg-blue-200"
            type="number"
            required
          />

          <label htmlFor="email">Email :-</label>
          <input
            value={user.email}
            onChange={handleInputChange}
            placeholder="enter email"
            className=" p-1.5 border rounded-md bg-blue-200"
            id="email"
            name="email"
            type="email"
            required
          />

          <label htmlFor="password">Password :-</label>
          <input
            value={user.passWord}
            onChange={handleInputChange}
            placeholder="enter passward"
            className=" p-1.5 border rounded-md bg-blue-200"
            id="password"
            name="passWord"
            type="password"
            required
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#" className="text-blue-400">
              Terms & Privacy
            </a>
          </p>

          <div className="flex justify-center mt-2 ">
            <button
              type="submit"
              className="border bg-blue-600 text-white text-xl rounded-2xl p-2 flex "
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormCardRight;
