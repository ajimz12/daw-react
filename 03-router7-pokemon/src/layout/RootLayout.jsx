import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
