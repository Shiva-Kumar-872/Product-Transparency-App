import React from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  status: string;
};

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">📅 Date: {new Date().toLocaleDateString()}</p>
        <p className="text-sm text-gray-500">📌 Status: {product.status}</p>
        <span className="inline-block text-xs mt-2 bg-green-100 text-green-800 px-2 py-1 rounded">
          {product.category}
        </span>
      </div>

      <div className="flex gap-2 mt-5">
        <button className="border border-gray-400 text-gray-700 px-4 py-1 rounded hover:bg-gray-100 text-sm">
          Edit
        </button>
        <button className="border border-gray-400 text-gray-700 px-4 py-1 rounded hover:bg-gray-100 text-sm">
          Report
        </button>
      </div>
    </div>
  );
};
