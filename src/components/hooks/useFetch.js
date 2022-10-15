import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        let result = data.items;
        console.log(result);
        setResult(result);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { result, isLoading, error };
};

export default useFetch;
