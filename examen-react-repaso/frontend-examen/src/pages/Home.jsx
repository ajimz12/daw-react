import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEvent } from "../context/EventContext";
import EventCard from "../components/EventCard";
import { useEffect } from "react";
import { useEventFilters } from "../hooks/useEventFilters";

const Home = () => {
  const { user, token } = useAuth();
  const { events, fetchEvents } = useEvent();
  const { filteredEvents, filter, setFilter, cleanFilters } = useEventFilters();

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Lista de Eventos</h1>
        {!token && (
          <Link className="bg-green-500 text-white p-2 rounded-lg" to="/login">
            Inicia sesion para editar
          </Link>
        )}
        {token && (
          <Link
            className="bg-purple-500 text-white p-2 rounded-lg"
            to={`/events/new`}
          >
            Nuevo evento
          </Link>
        )}
      </div>

      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Buscar por nombre
            </label>
            <input
              type="text"
              value={filter.name}
              onChange={(e) => setFilter({ ...filter, name: e.target.value })}
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de evento
            </label>
            <select
              value={filter.description}
              onChange={(e) =>
                setFilter({ ...filter, description: e.target.value })
              }
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">Todos</option>
              <option value="movil">Movil</option>
              <option value="consola">Consola</option>
              <option value="ordenador">Ordenador</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fecha
            </label>
            <input className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ordenar por fecha
            </label>
            <select className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
              <option value="newest">Más reciente primero</option>
              <option value="oldest">Más antiguo primero</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={cleanFilters} className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Limpiar filtros
          </button>
        </div>
      </div>

      {/* Mostrar eventos filtrados */}
      {filteredEvents.length === 0 ? (
        <p className="text-center text-gray-500">No hay eventos disponibles</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, key) => (
            <EventCard key={key} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
