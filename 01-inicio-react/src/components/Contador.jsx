import { useState } from "react";

const Contador = () => {
  // Hooks
  const [contador, setContador] = useState(0);

  // Funciones
  const handleClick = (numero) => {
    if (numero > 0) {
      setContador((prevContador) => prevContador + numero);
    } else if (numero < 0 && contador > 0) {
      setContador((prevContador) => prevContador + numero);
    }
  };

  return (
    <>
      <div className="max-w-sm mx-auto mt-8 p-6 bg-gray-200 shadow-sm rounded-md">
        <h1 className="text-3xl font-bold text-center mb-5">Contador Simple</h1>
        <p className="text-2xl text-center text-blue-500 font-semibold">
          {contador}
        </p>
        <div className="flex justify-center mt-5 gap-4">
          <button
            className="bg-blue-300 hover:bg-blue-700 p-3"
            onClick={() => handleClick(1)}
          >
            Aumentar
          </button>
          <button
            className="bg-red-300 hover:bg-red-700 p-3"
            onClick={() => handleClick(-1)}
          >
            Disminuir
          </button>
        </div>
      </div>
    </>
  );
};

export default Contador;
