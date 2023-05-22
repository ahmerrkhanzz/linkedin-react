import React from "react";

function Topbar() {
  return (
    <div className="bg-white p-3.5 flex justify-center items-center">
      <div className="xl:container flex justify-between">
        <div className="flex items-center justify-center">
          <img src="../../public/logo_mini.svg" className=" w-7" alt="" />
          <input
            type="text"
            placeholder="search ..."
            className=" border border-gray-300 rounded-md text-xs p-2 ml-2 w-52"
          />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <a href="#" className=" cursor-pointer">
            <img src="../../public/home.svg" className=" w-6" alt="" />
          </a>
          <a href="#" className=" cursor-pointer">
            <img src="../../public/people.svg" className=" w-6" alt="" />
          </a>
          <a href="#" className=" cursor-pointer">
            <img src="../../public/job.svg" className=" w-6" alt="" />
          </a>
          <a href="#" className=" cursor-pointer">
            <img src="../../public/chat.svg" className=" w-6" alt="" />
          </a>
          <a href="#" className=" cursor-pointer">
            <img src="../../public/bell.svg" className=" w-6" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
