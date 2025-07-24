import { useCallback, useMemo, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

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

const ShowUser = () => {
  const [searchUsername, setSearchUsername] = useState('');
  const [activeUsername, setActiveUsername] = useState('');

  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const apiUrl = activeUsername.trim() ? `https://api.github.com/users/${activeUsername.trim()}` : '';

  const headers = useMemo(() => {
    return token ? { Authorization: `token ${token}` } : undefined;
  }, [token]);

  const { data: userData, loading, error } = useFetch<GithubUser>(apiUrl, { headers });


  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUsername(e.target.value);
  }, []);


  const handleSearch = useCallback(() => {
    if (searchUsername.trim()) {
      setActiveUsername(searchUsername.trim());
    }
  }, [searchUsername]);


  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">GitHub Profile Search</h1>
        <p className="text-gray-600 mb-6">Enter a GitHub username and click search or press Enter</p>

        <div className="flex gap-3 items-center justify-center mb-4">
          <input
            className="p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none w-80"
            type="text"
            placeholder="Enter a GitHub username..."
            value={searchUsername}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />

          <button
            onClick={handleSearch}
            disabled={!searchUsername.trim()}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Search
          </button>

        </div>
      </div>

     
      {error && activeUsername && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md">
          <p className="text-red-600">
            {error.message.includes('404') ? 'User not found' : error.message.includes('403') ? 'API rate limit exceeded' : 'Error loading profile'}
          </p>
          <p className="text-sm text-red-500 mt-1">{error.message}</p>
        </div>
      )}

      {/* User Profile Display */}
      {userData && !loading && !error && (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
       
            <div className="text-center md:text-left">
              <img src={userData.avatar_url} alt={userData.login} className="w-32 h-32 mx-auto md:mx-0 rounded-full border-4 border-gray-200 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800">{userData.name || userData.login}</h2>
              <p className="text-gray-600 mb-3">@{userData.login}</p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                View on GitHub
              </a>
            </div>

            {/* Profile Details */}
            <div className="flex-1">
              {userData.bio && <p className="text-gray-700 mb-4 italic">"{userData.bio}"</p>}

         
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">{userData.public_repos || 0}</div>
                  <div className="text-sm text-gray-600">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">{userData.followers}</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">{userData.following}</div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ShowUser;
