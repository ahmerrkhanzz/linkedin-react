import React from "react";

function NotFound() {
  return (
    <div className=" w-full">
      <div className="flex mx-24">
        <div className="w-28">
          <img src="../../public/logo.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center w-1/3 ">
          <h1 className=" font-thin text-slate-700 mb-6">Page not found</h1>
          <p className=" font-thin text-gray-700">
            Uh oh, we can’t seem to find the page you’re looking for. Try going
            back to the previous page or see our <a href="javascript:;" className=" text-cyan-700 hover:underline hover:text-cyan-700">Help Center</a> for more
            information
          </p>
          <button className="bg-transparent border border-sky-700 py-1 px-4 text-sm rounded-sm mt-5 text-sky-700 font-medium hover:bg-sky-100">Go to your feed</button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
