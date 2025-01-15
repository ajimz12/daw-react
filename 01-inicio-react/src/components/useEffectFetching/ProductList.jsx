import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LiCartProduct from "./LiCartProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setTotal(totalCart(cart));
  }, [cart]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5173/src/data/db.json");
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      setProducts(await response.json());
    } catch (error) {
      throw new Error(error);
    }
  };

  const addCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const totalCart = (cart) => {
    return cart.reduce((acc, product) => acc + product.precio, 0);
  };

  const deleteFromCart = (product) => {};

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Lista de Libros
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  addCart={addCart}
                />
              );
            })}
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-6">Carrito</h2>
          <p>Total: {total}€</p>
          {cart.length === 0 ? (
            <p>Carrito vacio</p>
          ) : (
            <ul>
              {cart.map((product, index) => {
                return <LiCartProduct key={index} product={product} />;
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
