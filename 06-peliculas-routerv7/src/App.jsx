import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ToastProvider } from "./contexts/ToastContext";
import { ReviewProvider } from "./contexts/ReviewContext";

const App = () => {
  return (
    <ReviewProvider>
      <ToastProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </ToastProvider>
    </ReviewProvider>
  );
};

export default App;
