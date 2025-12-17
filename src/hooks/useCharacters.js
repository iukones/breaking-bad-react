import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../config/api';

export const useCharacters = (query, delay = 300) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(async () => {
      // Cancelar request anterior
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const { data } = await axios.get(ENDPOINTS.characters, {
          params: { name: query },
          signal: abortControllerRef.current.signal,
        });
        setItems(data.results);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err.message);
          setItems([]);
        }
      } finally {
        setIsLoading(false);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
      abortControllerRef.current?.abort();
    };
  }, [query, delay]);

  return { items, isLoading, error };
};
