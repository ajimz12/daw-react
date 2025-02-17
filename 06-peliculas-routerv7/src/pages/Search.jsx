import React from "react";

const Search = () => {
  return (
    <div className="space-y-5">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">Buscar Pelis</h1>
        <p className="mt-4 text-gray-800">
          Aquí podrás buscar las películas que quieras
        </p>
      </header>
      {/* formulario de búsqueda */}
      <form className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Buscar..."
          className="p-2 rounded-l border border-gray-500"
        />
        <button className="bg-sky-700 p-2 rounded-r text-white cursor-pointer hover:bg-sky-800">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Search;
