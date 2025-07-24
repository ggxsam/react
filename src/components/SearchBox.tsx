// import { cn } from '../lib/utils';
import { memo } from 'react';

interface ISearchBoxProps {
  onChange: (value: string) => void;
  className?: string;
}

function SearchBox({ onChange, className = '' }: ISearchBoxProps) {
  console.log('SearchBox rendered');

  return (
    <input
      type="text"
      placeholder="Enter GitHub username..."
      onChange={(e) => onChange(e.target.value)}
      className={`rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );
}

export default memo(SearchBox);
