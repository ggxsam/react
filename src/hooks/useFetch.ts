import { useEffect, useState } from "react";

type GithubUser = {
  login: string;
  avatar_url: string;
  name?: string;
  bio?: string;
  followers: number;
  following: number;
  html_url: string;
  public_repos: number;
};

const token = import.meta.env.VITE_GITHUB_TOKEN;

export const useFetchGithubProfile = (username: string) => {
  const [data, setData] = useState<GithubUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    if (!username.trim()) {
      setData(null);
      setError(null);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? "User not found"
            : `GitHub API error: ${response.statusText}`
        );
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return { data, error, isLoading, refetch: fetchData };
};
