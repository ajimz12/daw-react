import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEvent } from "../context/EventContext";

const EventForm = () => {
  const { addEvent, updateEvent, events } = useEvent();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Si se esta editando
  const eventToEdit = events.find((event) => event._id === id);

  useEffect(() => {
    if (eventToEdit) {
      setFormData(eventToEdit);
    }
  }, [eventToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateEvent(id, formData);
      } else {
        await addEvent(formData);
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        {id ? "Editar Producto" : "Crear Producto"}
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre:
          </label>
          <input
            id="name"
            onChange={handleChange}
            value={formData.name}
            type="text"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Nombre del producto"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descripción:
          </label>
          <select
            name="description"
            rows="4"
            onChange={handleChange}
            value={formData.description}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Describe el producto"
          >
            <option value="">Seleccione una opción</option>
            <option value="movil">Movil</option>
            <option value="consola">Consola</option>
            <option value="ordenador">Ordenador</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Precio:
          </label>
          <input
            id="price"
            type="number"
            onChange={handleChange}
            value={formData.price}
            name="price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Ingrese el precio"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {id ? "Actualizar Producto" : "Crear Producto"}
          </button>
          <Link
            to="/"
            className=" text-center w-full bg-gray-400 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition ml-3"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
