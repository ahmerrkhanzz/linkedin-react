import React from "react";
import Topbar from "../components/Topbar.jsx";
import CreatePost from "../components/CreatePost.jsx";

function Home() {
  return (
    <div className="home">
      <Topbar></Topbar>
      <div className="flex items-center justify-center">
        <div className="container grid grid-cols-5 gap-4 mt-8">
          <div>left sidebar</div>
          <div className=" col-span-3">
            <CreatePost></CreatePost>
          </div>
          <div> right sidebar</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
