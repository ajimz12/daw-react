import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-sky-950 text-white shadow-lg mb-6">
          <div className="max-h-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <NavLink to="/" className="text-xl font-bold py-8">
                  Videoclub
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
        <footer className="bg-sky-950 text-white fixed bottom-0 w-full">
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
