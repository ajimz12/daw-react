import { useEffect, useState } from "react";

const Saludo = () => {
  const [edad, setEdad] = useState(0);
  const [sexo, setSexo] = useState("M");
  useEffect(() => {
    console.log("Renderizando al montar componente por primera vez");
  }, [sexo]);

  const handleClickEdad = () => {
    setEdad((prevEdad) => prevEdad + 1);
  };

  const handleClickSexo = () => {
    setSexo((prevSexo) => (prevSexo === "M" ? "F" : "M"));
  };

  return (
    <>
      <p>Edad: {edad}</p>
      <button onClick={handleClickEdad}>Aumentar edad</button>
      <p>Sexo: {sexo}</p>
      <button onClick={handleClickSexo}>Cambiar Sexo</button>
    </>
  );
};

export default Saludo;
