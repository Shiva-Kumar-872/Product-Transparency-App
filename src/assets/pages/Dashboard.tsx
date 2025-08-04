import React, { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { StatusFilter } from "../components/StatusFilter";
import { ProductCard } from "../components/ProductCard";
import axios from "../components/utils/axios";

type Product = {
  id: string;
  name: string;
  category: string;
  status: string;
};

export const Dashboard: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesStatus = status === "All" || product.status === status;
    const matchesSearch =
      search === "" || product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <section className="bg-white px-6 py-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* 🧭 Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 my-4">Product Dashboard</h1>
          <p className="text-base text-gray-600">
            Overview of product transparency across categories and statuses.
          </p>
        </header>

        {/* 🔧 Filters + Add Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <SearchBar value={search} onChange={setSearch} />
            <CategoryFilter selected={category} onChange={setCategory} />
            <StatusFilter selected={status} onChange={setStatus} />
          </div>

          <button
            className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-sm flex items-center gap-2 hover:bg-green-700 transition"
            onClick={() => console.log("Add product clicked")}
          >
            + Add New Product
          </button>
        </div>

        {/* 📊 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
