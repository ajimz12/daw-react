import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  const getLinkClass = ({ isActive }) =>
    `text-lg font-medium py-8 px-4 hover:bg-sky-900 transition-colors ${
      isActive ? "border-b-2 border-white" : ""
    }`;

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-sky-950 text-white shadow-lg mb-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-1">
                <NavLink to="/" className={getLinkClass}>
                  Videoclub
                </NavLink>
                <NavLink to="/movies" className={getLinkClass}>
                  Películas
                </NavLink>
                <NavLink to="/search" className={getLinkClass}>
                  Búsqueda
                </NavLink>
                <NavLink to="/reviews" className={getLinkClass}>
                  Reseñas
                </NavLink>
                <NavLink to="/favorites" className={getLinkClass}>
                  Favoritos
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <main className="pb-16">
          <Outlet />
        </main>
        <footer className="bg-sky-950 text-white   w-full">
          <div className="max-h-7xl mx-auto px-4 py-4 text-center">
            <p>&copy; 2025 Videoclub. Todos los derechos reservados.</p>
            <p>Hecho con &hearts; por Álvaro</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RootLayout;
