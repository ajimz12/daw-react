import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

const App = () => {
  /**
   * Cuando se use react router dom solo deberia estar el router provider
   * Y el resto de cosas deberian de estar en RootLayout
   */

  return;

  <PokemonProvider>
    <RouterProvider router={router} />;
  </PokemonProvider>;
};

export default App;
