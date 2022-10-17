import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        let result = data.items;
        setResult(result);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { result, isLoading, error };
};

export default useFetch;
