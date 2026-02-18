import React from "react";
import Searchbar from "@/components/products/Searchbar";
import ProductTable from "@/components/products/ProductTable";

const ProductsPage = () => {
  return (
    <div className="p-6 bg-background text-foreground min-h-full">
      <Searchbar />
      <ProductTable />
    </div>
  );
};

export default ProductsPage;
