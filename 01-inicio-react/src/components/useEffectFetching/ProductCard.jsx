import Button from "./Button";

const ProductCard = (props) => {
  const { product, addCart } = props;

  const handleClick = () => {
    addCart(product);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-2">{product.titulo}</h2>
      <p className="text-gray-700 mb-4">{product.precio}€</p>
      <Button onClick={handleClick} className="bg-blue-300 p-3 rounded-lg hover:bg-blue-400 transition">Añadir al carrito</Button>
      {/* <button
        onClick={handleClick}
        className="bg-blue-300 p-3 rounded-lg hover:bg-blue-400 transition "
      >
        Añadir al carrito
      </button> */}
    </div>
  );
};

export default ProductCard;
