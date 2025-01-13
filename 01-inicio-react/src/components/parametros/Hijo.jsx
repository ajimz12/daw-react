function Hijo(params) {
  const { info, handleClickEdad } = params;
  return (
    <>
      <div>Eres hijo de {info.nombre}</div>;
      <div>
        <button onClick={handleClickEdad}>Aumentar edad desde hijo</button>
      </div>
    </>
  );
}

export default Hijo;
