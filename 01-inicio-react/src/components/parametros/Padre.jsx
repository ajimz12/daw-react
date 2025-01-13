const Padre = (props) => {
  let { info, setInfo, children, handleClickEdad } = props;

  const handleClick = () => {
    setInfo((prevInfo) => ({ ...prevInfo, nombre: "Carlos" }));
  };

  return (
    <>
      <div>
        <p>Bienvenido {info.nombre}</p>
        <p>Edad: {info.edad}</p>
        {info.isAdmin && (
          <p>
            <strong>Administrador</strong>
          </p>
        )}
        <div>
          <button onClick={handleClick}>Cambiar nombre</button>
          <br />
          <button onClick={handleClickEdad}>Aumentar edad</button>
        </div>
        <div>
          {info.edad >= 18 ? (
            <p>Eres mayor de edad</p>
          ) : (
            <p>Eres menor de edad</p>
          )}
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Padre;
