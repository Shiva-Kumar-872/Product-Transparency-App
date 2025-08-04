import React, { useState, useEffect } from "react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const [input, setInput] = useState<string>(value);

  useEffect(() => {
    if (value !== input) {
      setInput(value);
    }
  }, [value, input]); // ⬅️ included missing `input`

  useEffect(() => {
    const handler = setTimeout(() => {
      if (input !== value) onChange(input);
    }, 300);
    return () => clearTimeout(handler);
  }, [input, value, onChange]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="w-full md:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500"
    />
  );
};
