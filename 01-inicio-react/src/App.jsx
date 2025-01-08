import Contador from "./components/Contador";
import ContadorDoble from "./components/ContadorDoble";

const App = () => {
  return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl text-center mb-20 font-bold">
          Ejemplos de componentes y estados en React
        </h1>
        <div className="mb-8">
          <Contador />
        </div>
        <div className="mb-8">
          <ContadorDoble />
        </div>
      </div>
  );
};

export default App;
