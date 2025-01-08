import { useState } from "react";

function ContadorDoble() {
  // Hooks
  const [friends, setFriends] = useState({
    Juan: 0,
    Carlos: 0,
    Maria: 0,
  });
  // Variables
  // Funciones
  const handleClickLike = (nombre, likes) => {
    setFriends((preValue) => {
      const newLikes = preValue[nombre] + likes;
      return { ...preValue, [nombre]: newLikes < 0 ? 0 : newLikes };
    });
  };

  // TODO: Implementar el calculo de la media de los likes entre todos los amigos

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Contador Likes Amigos
      </h1>
      <div className="text-center mt-4">
        <span>
          Juan tiene <strong>{friends.Juan}</strong> likes
        </span>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => handleClickLike("Juan", 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-3"
          >
            Like
          </button>
          <button
            onClick={() => handleClickLike("Juan", -1)}
            className="bg-red-500 hover:bg-red-700 text-white rounded-md p-3"
          >
            Dislike
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        <span>
          Maria tiene <strong>{friends.Maria}</strong> likes
        </span>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => handleClickLike("Maria", 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-3"
          >
            Like
          </button>
          <button
            onClick={() => handleClickLike("Maria", -1)}
            className="bg-red-500 hover:bg-red-700 text-white rounded-md p-3"
          >
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContadorDoble;
