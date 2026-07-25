import { useState, useEffect } from 'react';

// CUSTOM HOOK: Encapsulates fetch logic
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect: Run on mount, cleanup on unmount
  useEffect(() => {
    let isMounted = true; // Prevent state update if unmounted

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false; // Prevents memory leaks
    };
  }, [url]); // Dependency array: Re-fetch if URL changes

  return { data, loading, error };
}

export default useFetch;