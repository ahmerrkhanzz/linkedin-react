import { Button, Modal } from "antd";
import { useState } from "react";

const PostModal = ({ modalOpen, setModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const sendStatusToFirebase = () => { console.log(status);};
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
            disabled={status.length > 0 ? false : true}
            onClick={sendStatusToFirebase}
            className="bg-sky-600 text-white border border-sky-600 py-1 px-4 text-sm rounded-md mt-5 font-medium hover:bg-sky-800"
          >
            Post
          </Button>,
        ]}
      >
        <input
          type="text"
          placeholder="What do you want to talk about?"
          className="text-md p-2 w-full"
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        />
      </Modal>
    </>
  );
};
export default PostModal;
