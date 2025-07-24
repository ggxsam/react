import { useCallback, useEffect, useState } from 'react';

interface FetchOptions {
  headers?: Record<string, string>;
}

export const useFetch = <T>(url: string, options?: FetchOptions) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!url) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(url, {
        headers: options?.headers || {},
      });
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url, options?.headers]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
