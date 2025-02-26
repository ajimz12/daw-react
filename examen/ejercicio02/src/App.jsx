import React from "react";
import ProductList from "./components/ProductList";
import { ProductProvider } from "./context/ProductsContext";

const App = () => {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
};

export default App;
