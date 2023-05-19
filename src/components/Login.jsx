// import { AuthAPI } from "../api/AuthAPI.jsx";

function Login() {
  const loginHander = () => {
    // let res = AuthAPI();
    // console.log(res);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center  ">
      <div className="flex flex-col shadow-lg p-4 rounded-md bg-white">
        <h2 className=" font-semibold">Sign In</h2>
        <p className=" text-xs text-gray-500 font-normal mb-4">
          Stay update on your professional world
        </p>
        <input
          type="text"
          placeholder="Email or Phone"
          className=" border border-gray-300 rounded-md text-xs p-2 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className=" border border-gray-300 rounded-md text-xs p-2"
        />
        <a href="javascript:;" className=" text-xs mt-2 font-bold text-sky-700">
          Forgot password?
        </a>
        <button
          onClick={loginHander}
          className="bg-sky-700 text-white border border-sky-700 py-1 px-4 text-sm rounded-md mt-5 text-sky-700 font-medium hover:bg-sky-800"
        >
          Sign In
        </button>
      </div>
      <p className=" mt-4 text-xs">
        <span className=" text-gray-900 font-medium">New to LinkedIn?</span> <a href="javascript:;" className=" text-xs mt-2 font-bold text-sky-700">
          Join Now
        </a>
      </p>
    </div>
  );
}

export default Login;
