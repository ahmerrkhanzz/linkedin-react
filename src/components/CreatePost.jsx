import React, { useState } from "react";
import PostModal from "../modal/PostModal.jsx";
import { PostStatus } from "../api/FirestoreAPIs.jsx";

function CreatePost() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const sendStatusToFirebase = async () => {
    await PostStatus(status);
    await setModalOpen(false);
  };
  return (
    <div className="flex flex-col justify-center bg-white rounded-lg p-4 shadow-sm">
      <div className="flex w-full space-x-4">
        <div className="shrink">
          <img
            src="../../public/user-avatar.jpg"
            className=" w-12 rounded-md"
            alt=""
          />
        </div>
        <div className=" flex grow">
          <input
            type="text"
            placeholder="start a post"
            onClick={() => setModalOpen(true)}
            className=" border border-gray-200 rounded-md text-md p-2 w-full"
          />
        </div>
      </div>
      <div className="flex justify-evenly items-center mt-4">
        <div className="flex items-center">
          <img src="../../public/photo.svg" className=" w-10 mr-2" alt="" />
          <span className=" text-sm">Photo</span>
        </div>
        <div className="flex items-center">
          <img src="../../public/play.svg" className=" w-10 mr-2" alt="" />
          <span className=" text-sm">Video</span>
        </div>
        <div className="flex items-center">
          <img src="../../public/calendar.svg" className=" w-10 mr-2" alt="" />
          <span className=" text-sm">Calendar</span>
        </div>
        <div className="flex items-center">
          <img src="../../public/article.svg" className=" w-10 mr-2" alt="" />
          <span className=" text-sm">Article</span>
        </div>
      </div>

      <PostModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        setStatus={setStatus}
        sendStatusToFirebase={sendStatusToFirebase}
      ></PostModal>
    </div>
  );
}

export default CreatePost;
