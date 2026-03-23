"use client";

import { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

export default function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Counter: {count}
      </h2>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(initialCount)}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
