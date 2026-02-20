import React from "react";
import Searchbar from "@/components/products/Searchbar";
import ProductTable from "@/components/products/ProductTable";
import { useState } from "react";

const ProductsPage = () => {
  // All products (starts with mock data)
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Wireless Headphones",
      category: "Electronics",
      price: "$99.9",
      views: 234,
    },
    {
      id: 2,
      productName: "Smart Watch",
      category: "Electronics",
      price: "$149.9",
      views: 180,
    },
    {
      id: 3,
      productName: "Laptop Stand",
      category: "Accessories",
      price: "$39.9",
      views: 120,
    },
    {
      id: 4,
      productName: "USB-C Cable",
      category: "Accessories",
      price: "$9.9",
      views: 300,
    },
    {
      id: 5,
      productName: "Phone Charger",
      category: "Accessories",
      price: "$19.9",
      views: 150,
    },
  ]);

  // Search query
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Delete Product
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== productId));
    }
  };

  const handleEdit = (productId) => {
    // implement editing logic or remove prop
    console.log("edit", productId);
  };


  // Handle add from search 
  const handleAddFromSearch = () => {
    if (!searchQuery.trim()) return;

    const newProduct = {
      id: products.length + 1, // simple incremental id
      productName: searchQuery.trim(),
      category: "Uncategorized",
      price: "$0.00",
      views: 0,
    };

    setProducts((prev) => [...prev, newProduct]);
    setSearchQuery(""); // clear input after adding
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Products</h1>
      <Searchbar
        value={searchQuery}
        onChange={setSearchQuery}
        onAdd={handleAddFromSearch}
      />
      <ProductTable
        products={filteredProducts}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ProductsPage;
