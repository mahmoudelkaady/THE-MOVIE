import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <div className=" w-100">
        <div className="col-2 vh-100 fixed-top side">
          <Sidebar />
        </div>
        <div className="col-10  float-end">
          <div className="navvv">
            <Navbar />
          </div>
          <div className="mt-5">
            <div className="p-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
