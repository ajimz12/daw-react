import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLayout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar de movil */}
      <div>
        <aside className="fixed lg:static w-64 bg-gray-800 h-full lg:block transition-transform flex flex-col">
          <nav className="flex-1 p-4 space-y-2">
            <NavLink
              to="/admin"
              className="block p-2 text-white hover:text-gray-400"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/admin/users"
              className="block p-2 text-white hover:text-gray-400"
            >
              Users
            </NavLink>
            <NavLink
              to="/admin/products"
              className="block p-2 text-white hover:text-gray-400"
            >
              Products
            </NavLink>
            <NavLink
              to="/admin/settings"
              className="block p-2 text-white hover:text-gray-400"
            >
              Settings
            </NavLink>
          </nav>
          <div className="p-4 border-top border-gray-700">
            <button
              onClick={handleLogout}
              className="transition-colors bg-red-500 w-full text-white p-2 rounded cursor-pointer hover:bg-red-600"
            >
              Cerrar Sesión
            </button>
          </div>
        </aside>
      </div>
      {/* <main>
        <Outlet />
      </main> */}
    </div>
  );
};

export default AdminLayout;
