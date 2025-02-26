import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import EventForm from "../components/EventForm";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "events/new",
        element: (
          <ProtectedRoute>
            <EventForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "events/edit/:id",
        element: (
          <ProtectedRoute>
            <EventForm />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
