import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>2024 Ejercicio 03. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
