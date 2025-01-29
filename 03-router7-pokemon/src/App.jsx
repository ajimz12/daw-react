import React from "react";
import { RouterProvider } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";
import { router } from "./routes/Router";
import { Toaster } from "sonner";

const App = () => {
  // cuando usemos REACT ROUTER DOM App sólo debería tener el ROUTER PROVIDER
  // Y el resto de cosas deberían de estar en RootLayout
  return (
    <PokemonProvider>
      <Toaster />
      <RouterProvider router={router} />
    </PokemonProvider>
  );
};

export default App;
