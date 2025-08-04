import React from "react";

interface CategoryFilterProps {
  selected: string;
  onChange: (value: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selected, onChange }) => (
  <select
    value={selected}
    onChange={(e) => onChange(e.target.value)}
    className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
  >
    <option value="All">All Categories</option>
    <option value="Cleaning">Cleaning</option>
    <option value="Cosmetics">Cosmetics</option>
    {/* Add more categories as needed */}
  </select>
);
