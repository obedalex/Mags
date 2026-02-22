import React from "react";
import Searchbar from "@/components/products/Searchbar";
import ProductTable from "@/components/products/ProductTable";
import AddProductModal from "@/components/products/AddProductModal";
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
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200", // ← ADD
    },
    {
      id: 2,
      productName: "Smart Watch",
      category: "Electronics",
      price: "$149.9",
      views: 180,
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200", // ← ADD
    },
    {
      id: 3,
      productName: "Laptop Stand",
      category: "Accessories",
      price: "$39.9",
      views: 120,
      imageUrl:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200", // ← ADD
    },
    {
      id: 4,
      productName: "USB-C Cable",
      category: "Accessories",
      price: "$9.9",
      views: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=200", // ← ADD
    },
    {
      id: 5,
      productName: "Phone Charger",
      category: "Accessories",
      price: "$19.9",
      views: 150,
      imageUrl:
        "https://images.unsplash.com/photo-1591290619762-c588f0b8c23d?w=200", // ← ADD
    },
  ]);

  // Search query
  const [searchQuery, setSearchQuery] = useState("");

  // Add this state
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // State modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
    const product = products.find((p) => p.id === productId);
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  const handleUpdateProduct = (updatedData) => {
    // Update the product in the array
    setProducts(
      products.map(
        (p) =>
          p.id === editingProduct.id
            ? {
                ...p, // Keep existing data
                productName: updatedData.productName,
                category: updatedData.category,
                price: `$${Number(updatedData.price || 0).toFixed(2)}`,
                description: updatedData.description,
                imageUrl: updatedData.imageUrl,
                // views and id stay the same
              }
            : p, // Keep other products unchanged
      ),
    );

    // Close the modal
    setIsEditModalOpen(false);

    // Clear editing state
    setEditingProduct(null);
  };

  // Function to open modal
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  // Handle add from search
  //  const handleAddFromSearch = () => {
  //    const name = searchQuery.trim();
  //    if (!name) return;

  //    const newProduct = {
  //      id: crypto.randomUUID(),
  //      name, // cleaner naming (consistent)
  //      category: null, // null means “not set yet”
  //      priceCents: 0, // store as number (cents) for accuracy
  //      views: 0,
  //      createdAt: new Date().toISOString(),
  //    };

  //    setProducts((prev) => [newProduct, ...prev]); // newest first (dashboard style)
  //    setSearchQuery("");
  //  };

  const handleAddProduct = (data) => {
    const newProduct = {
      id: crypto.randomUUID(),
      productName: data.productName,
      category: data.category,
      price: `$${Number(data.price || 0).toFixed(2)}`,
      views: 0,
      imageUrl: data.imageUrl || "",
    };

    setProducts((prev) => [newProduct, ...prev]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Products</h1>
      <Searchbar
        value={searchQuery}
        onChange={setSearchQuery}
        onAdd={handleOpenAddModal}
      />
      <ProductTable
        products={filteredProducts}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onAddProduct={handleAddProduct}
        mode="add"
      />
      <AddProductModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingProduct(null);
        }}
        onAddProduct={handleUpdateProduct}
        initialData={editingProduct}
        mode="edit"
      />
    </div>
  );
};

export default ProductsPage;
