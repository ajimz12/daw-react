import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const NavBar = () => {
  /**
   * NavLink se utiliza para moverse entre rutas
   * Añade "active" a className cuando la ruta es la actual
   * isActive --> Es una prop de react router dom que dice si la ruta esta activa
   */
  return (
    <>
      <nav className="bg-gradient-to-tr from-rose-500 to-pink-500 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="space-x-4">
            <NavLink
              to={ROUTES.HOME}
              className={({ isActive }) =>
                `text-white text-2xl font-bold hover:text-red-600 ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to={ROUTES.SEARCH}
              className="text-white text-2xl font-bold"
            >
              SEARCH
            </NavLink>
            <NavLink
              to={ROUTES.FAVORITES}
              className="text-white text-2xl font-bold"
            >
              FAVORITES
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
