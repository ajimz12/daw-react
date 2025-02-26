import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const API_URL = import.meta.env.VITE_API_URL;
const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const { token } = useAuth();

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const addEvent = async (product) => {
    try {
      const response = await fetch(`${API_URL}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error("Error creating event");
      }
      const data = await response.json();
      setEvents((prevEvents) => [...prevEvents, data]);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updateEvent = async (id, product) => {
    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error("Error updating event");
      }
      const data = await response.json();
      const updatedEvents = events.map((event) =>
        event._id === id ? data : event
      );
      setEvents(updatedEvents);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Error deleting event");
      }
      const updatedEvents = events.filter((event) => event._id !== id);
      setEvents(updatedEvents);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <EventContext.Provider
      value={{ events, fetchEvents, addEvent, updateEvent, deleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent debe estar dentro del proveedor EventProvider");
  }
  return context;
};
