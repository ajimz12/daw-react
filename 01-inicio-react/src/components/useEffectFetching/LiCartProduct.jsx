import React from "react";

const LiCartProduct = (props) => {
  const { product, index, deleteFromCart} = props;
  const handleClick = () => {
    deleteFromCart(product);
  };
  return (
    <>
      <li
        className="bg-blue-100 shadow-md rounded-lg p-6 flex flex-grow justify-between mb-5"
        key={index}
      >
        <span className="text-xl text-blue-500 font-medium">
          {product.titulo}
        </span>
        <span className="text-xl text-blue-800 font-medium">
          {product.precio}€
        </span>
        <button onClick={handleClick} className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md">
          Quitar
        </button>
        {/* <p>Total: {total}</p> */}
      </li>
    </>
  );
};

export default LiCartProduct;
