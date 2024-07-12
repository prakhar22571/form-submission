import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { title, description },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setTitle("");
          setDescription("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container form-component message-form">
        <h2>FORM</h2>
        <form onSubmit={handleMessage}>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <textarea
            rows={7}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MessageForm;
