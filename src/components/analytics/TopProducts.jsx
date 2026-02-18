import React from "react";

const products = [
  "Wireless Headphones",
  "Smart Watch",
  "Laptop Stand",
  "USB-C Cable",
  "Phone Charger",
];

const TopProducts = () => {
  return (
    <div className="bg-white p-6 rounded-lg border">
      {/* Header */}
      <h1 className="text-lg font-semibold mb-4">Most Viewed Products</h1>

      {/* List */}
      <ul className="space-y-3">
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;
