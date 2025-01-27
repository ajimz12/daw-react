import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./paths";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Search } from "../pages/Search";
import { ErrorPage } from "../pages/ErrorPage";
import { PokemonDetail } from "../pages/PokemonDetail";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SEARCH,
        element: <Search />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <Favorites />,
      },
      {
        path: ROUTES.POKEMON_DETAIL,
        element: <PokemonDetail />,
        // loader es una caracteristica que permite cargar los datos antes de renderizar el componente
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${params.name}`
            );
            if (!response.ok) {
              throw new Error("Error fetching data");
            }
            const data = await response.json();
            return data;
          } catch (error) {
            throw new Error("Error fetching data");
          }
        },
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
