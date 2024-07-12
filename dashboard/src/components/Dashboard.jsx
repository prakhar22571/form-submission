import React, { useContext, useEffect } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Messages from "./Messages";

const Dashboard = () => {

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <div className="content">
              <div>
                <p>Hello,</p>
                <h5>{admin && `${admin.username}`} </h5>
              </div>
            </div>
          </div>
        </div>
        <Messages />
      </section>
    </>
  );
};

export default Dashboard;
