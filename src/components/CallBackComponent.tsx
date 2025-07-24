import { useCallback, useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';

export default function UseCallback() {
  const ALL_BOOKS = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
    },
    {
      id: 4,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 5,
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
    },
    {
      id: 6,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 7,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
    },
    {
      id: 8,
      title: 'Brave New World',
      author: 'Aldous Huxley',
    },
  ];
  const [books, setBooks] = useState(ALL_BOOKS);
  const handleSearch = useCallback(
    (searchTerm: string) => {
      console.log(books[0]);

      const filteredBooks = ALL_BOOKS.filter((book) => book.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()));
      setBooks(filteredBooks);
    },
    [books]
  );

  const handleShuffle = () => {
    setBooks(books.slice().sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    // Commented out the intentional error for GitHub profile demo
    // throw new Error('This is an error from UseCallback component');
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      {/* Shuffle Books & Search */}
      <div>
        <div className="flex items-center justify-center gap-4">
          <button onClick={handleShuffle}>Shuffle Books</button>

          <SearchBox onChange={handleSearch} />
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <li key={book.id} className="rounded-md border p-4 shadow-sm">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
