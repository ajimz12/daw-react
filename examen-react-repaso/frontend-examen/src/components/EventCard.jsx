import React from "react";
import { useEvent } from "../context/EventContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { token } = useAuth();
  const { deleteEvent } = useEvent();

  const handleDelete = (id) => {
    deleteEvent(id);
  };

  return (
    <div className="bg-purple-200 text-center">
      <h2 className="text-white p-4">{event.name}</h2>

      <p className="text-white border-black p-4">{event.description}</p>
      <p className="text-white border-black p-4">{event.price}</p>

      {token && (
        <div className="flex justify-between gap-2">
          <button
            onClick={() => handleDelete(event._id)}
            className="bg-red-500 text-white p-2 rounded-lg"
          >
            Borrar producto
          </button>
          <Link
            className="bg-blue-500 text-white p-2 rounded-lg"
            to={`events/edit/${event._id}`}
          >
            Editar producto
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventCard;
