import { useState } from "react";
import { useEvent } from "../context/EventContext";

export const useEventFilters = () => {
  const { events } = useEvent();

  const [filter, setFilter] = useState({
    name: "",
    description: "",
    price: "",
  });

  const cleanFilters = () => {
    setFilter({ name: "", description: "", price: "" });
  };

  const getFilteredEvents = () => {
    return events.filter((event) => {
      const { name, description, price } = filter;

      return (
        (name === "" ||
          event.name.toLowerCase().includes(name.toLowerCase())) &&
        (description === "" ||
          event.description.toLowerCase() === description.toLowerCase()) &&
        (price === "" || Number(event.price) <= Number(price))
      );
    });
  };

  return {
    filteredEvents: getFilteredEvents(),
    filter,
    setFilter,
    cleanFilters
  };
};
