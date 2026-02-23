import { useState } from "react";

const FormCard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "firstname":
        setFirstName(value);
        break;

      case "lastname":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phonenumber":
        setPhoneNumber(value);
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };
    console.log(formData);
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-center items-center h-screen bg-gray-100 font-sans "
      >
        <div className="flex flex-col border-white p-8 rounded-2xl gap-2 bg-white shadow-xl w-full max-w-md">
          <h1 className="text-4xl font-semibold mb-4">Sign up</h1>
          <p className="text-gray-600">
            Please fill this form to create your account.
          </p>

          <label htmlFor="firstname">First Name :-</label>
          <input
            value={firstName}
            onChange={handleInputChange}
            id="firstname"
            placeholder="enter first name"
            className=" p-1.5 border rounded-md bg-blue-200"
            type="text"
            required
          />

          <label htmlFor="secondname">Last Name :-</label>
          <input
            value={lastName}
            onChange={handleInputChange}
            id="lastname"
            placeholder="enter second name"
            className=" p-1.5 border rounded-md bg-blue-200"
            type="text"
            required
          />

          <label htmlFor="phonenumber">Phone Number :-</label>
          <input
            value={phoneNumber}
            disabled={phoneNumber < 0}
            onChange={handleInputChange}
            id="phonenumber"
            placeholder=" enter phone number"
            className=" p-1.5 border rounded-md bg-blue-200"
            type="number"
            required
          />

          <label htmlFor="email">Email :-</label>
          <input
            value={email}
            onChange={handleInputChange}
            placeholder="enter email"
            className=" p-1.5 border rounded-md bg-blue-200"
            id="email"
            type="email"
            required
          />

          <label htmlFor="password">Password :-</label>
          <input
            value={password}
            onChange={handleInputChange}
            placeholder="enter passward"
            className=" p-1.5 border rounded-md bg-blue-200"
            id="password"
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

export default FormCard;
