import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RootLayout from "../layout/RootLayout";
import ProductList from "../components/ProductList";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
