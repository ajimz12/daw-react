import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setData(await fetchFunction());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // AbortController para cancelar la petición fetch
    const abortController = new AbortController();

    setLoading(true);
    fetchData();
    // Limpiar errores
    setError(null);

    return () => {
      // Lo que se ejecute aqui, se ejecutará cuando se desmonte el componente
      abortController.abort();
    };
  }, dependencies);

  return { data, loading, error };
};
