import { useState } from "react";
import { useFetchGithubProfile } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";

const GithubProfile = () => {
  const [username, setUsername] = useState<string>("");
  const debouncedUsername = useDebounce(username, 500); // 500ms delay
  const { data, error, isLoading } = useFetchGithubProfile(debouncedUsername);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                GitHub Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter GitHub username"
                />
              </div>
              {username && username !== debouncedUsername && (
                <p className="mt-1 text-sm text-gray-500">Typing...</p>
              )}
            </div>

            {isLoading && (
              <div className="text-center text-gray-500">Loading...</div>
            )}

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            {data && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={data.avatar_url}
                    alt={`${data.login}'s avatar`}
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-bold">{data.name || data.login}</h2>
                    {data.bio && <p className="text-gray-500">{data.bio}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-medium">Followers</div>
                    <div className="text-gray-500">{data.followers}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-medium">Following</div>
                    <div className="text-gray-500">{data.following}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-medium">Public Repos</div>
                    <div className="text-gray-500">{data.public_repos}</div>
                  </div>
                  <a
                    href={data.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium">Profile</div>
                    <div className="text-blue-500">View on GitHub</div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;
