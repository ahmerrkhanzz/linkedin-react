import { LoginAPI } from "../api/AuthAPI.jsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  let navigate = useNavigate();
  const loginHander = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Logged In Successfully");
    } catch (error) {
      console.log(error.code);
      toast.error(mapAuthCodeToMessage(error.code));
    }
  };

  const mapAuthCodeToMessage = (authCode) => {
    switch (authCode) {
      case "auth/wrong-password":
        return "Password provided is incorrect";
      case "auth/invalid-email":
        return "Invalid Email";
      case "auth/email-already-in-use":
        return "Email-already-in-use";
      default:
        return "User not found";
    }
  };

  const [credentials, setCredentials] = useState({});
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <img src="../../public/logo_mini.svg" className=" w-24 mb-10" alt="" />
      <div className="flex flex-col shadow-lg p-4 rounded-md bg-white w-96">
        <h2 className=" font-semibold">Sign In</h2>
        <p className=" text-xs text-gray-500 font-normal mb-4">
          Stay update on your professional world
        </p>
        <input
          type="text"
          placeholder="Email or Phone"
          className=" border border-gray-300 rounded-md text-xs p-2 mb-3"
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className=" border border-gray-300 rounded-md text-xs p-2"
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
        />
        <a href="#" className=" text-xs mt-2 font-semibold text-sky-600">
          Forgot password?
        </a>
        <button
          onClick={loginHander}
          className="bg-sky-600 text-white border border-sky-600 py-1 px-4 text-sm rounded-md mt-5 font-medium hover:bg-sky-800"
        >
          Sign In
        </button>
      </div>
      <p className=" mt-4 text-xs">
        <span className=" text-gray-900 font-medium">New to LinkedIn?</span>{" "}
        <a
          href="#"
          onClick={() => navigate("/register")}
          className=" text-xs mt-2 font-bold text-sky-600"
        >
          Join Now
        </a>
      </p>
    </div>
  );
}

export default Login;
