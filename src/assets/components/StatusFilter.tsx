import React from "react";

interface StatusFilterProps {
  selected: string;
  onChange: (value: string) => void;
}

export const StatusFilter: React.FC<StatusFilterProps> = ({ selected, onChange }) => (
  <select
    value={selected}
    onChange={(e) => onChange(e.target.value)}
    className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
  >
    <option value="All">All Statuses</option>
    <option value="Approved">Approved</option>
    <option value="Pending">Pending</option>
    <option value="Rejected">Rejected</option>
    {/* Add more statuses as needed */}
  </select>
);
