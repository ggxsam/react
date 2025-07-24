import { useMemo, useState } from 'react';


export default function UseMemo() {
const ITEMS = new Array(5_000000).fill(0).map((_, index) => {
return {
  id: index + 1,
  isSelected: index === 4_999_999,
};
});
  const [count, setCount] = useState(0);
  const [items] = useState(ITEMS);

  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);

//   const selectedItem = items.find(item => item.isSelected);
//   const selectedItem = useMemo(() => items.find(item => item.isSelected), [items]);
  const selectedItem = useMemo(() => items.find(item => item.id === count), [count]);

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-8'>
      {/* Count and Selected Item */}
      <div className='flex flex-col items-center gap-4'>
        <div className='text-2xl font-bold'>Count: {count}</div>

        {selectedItem && <div>Selected Item: {selectedItem?.id}</div>}

        <div className='flex items-center gap-2'>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}