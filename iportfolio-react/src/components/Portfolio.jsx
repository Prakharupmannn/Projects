import { useState } from "react";
import { portfolioItems } from "../data/portfolioData";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web", "App", "Design"];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-16 px-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800">Portfolio</h2>
      <div className="w-20 h-1 bg-blue-600 mt-2 mb-6"></div>

      <div className="flex gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img alt={item.title} className="w-full" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}