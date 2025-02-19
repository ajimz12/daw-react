import ProtectedRoute from "../components/ProtectedRoute";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import ProductPage from "../pages/ProductPage";
import Register from "../pages/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products",
        element: <div>Products</div>,
      },
      {
        path: "products/:id",
        element: <div>Product Detail</div>,
      },
      {
        path: "products/:id/edit",
        element: (
          <ProtectedRoute>
            <ProductPage action="edit" />
          </ProtectedRoute>
        ),
      },
      {
        path: "products/create",
        element: (
          <ProtectedRoute>
            <ProductPage action="create" />
          </ProtectedRoute>
        ),
      },
      {
        path: "products/:id/delete",
        element: (
          <ProtectedRoute>
            <ProductPage action="delete" />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
