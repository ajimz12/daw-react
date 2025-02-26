import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { router } from "./router";
import { EventProvider } from "./context/EventContext";

function App() {
  return (
    <>
      <AuthProvider>
        <EventProvider>
          <RouterProvider router={router} />
        </EventProvider>
      </AuthProvider>
    </>
  );
}

export default App;
