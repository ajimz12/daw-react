import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header className="w-full bg-blue-400 p-3 mb-5">Ejercicio 01</header>
      <Outlet />
    </>
  );
};

export default RootLayout;
