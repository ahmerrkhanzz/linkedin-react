import { AuthAPI } from "../api/AuthAPI.jsx";
import React, { useState } from "react";

function Register() {
  const loginHander = () => {
    let res = AuthAPI(credentials.email, credentials.password);
    console.log(res);
  };

  const [credentials, setCredentials] = useState({});
  return (
    <div className="h-full flex flex-col items-center justify-center  ">
      <h1 className="text-xl mb-5 font-medium">Make the most of your professional life</h1>
      <div className="flex flex-col shadow-lg p-4 rounded-md bg-white w-96">
        <label htmlFor="" className="font-medium mb-1">Email </label>
        <input
          type="text"
          placeholder="Email"
          className=" border border-gray-300 rounded-md text-xs p-2 mb-3"
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
        />
        <label htmlFor="" className="font-medium mb-1">Password: </label>
        <input
          type="password"
          placeholder="Password"
          className=" border border-gray-300 rounded-md text-xs p-2"
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
        />
        <p className=" text-xs text-gray-600 font-medium mt-5 text-center">
          <span>By clicking Agree & Join, you agree to the LinkedIn </span>{" "}
          <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a> and{" "}
          <a href="#">Cookie Ploicy</a>
        </p>
        <button
          onClick={loginHander}
          className="bg-sky-700 text-white border border-sky-700 py-1 px-4 text-sm rounded-md mt-5 text-sky-700 font-medium hover:bg-sky-800"
        >
          Agree & Join
        </button>
      </div>
      <p className=" mt-4 text-xs">
        <span className=" text-gray-900 font-medium">Already on LinkedIn?</span>{" "}
        <a href="#" className=" text-xs mt-2 font-bold text-sky-700">
          Sign In
        </a>
      </p>
    </div>
  );
}

export default Register;
