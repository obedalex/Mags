import React from "react";
import { Edit2, Trash2, Eye } from "lucide-react";

// Sample data
const details = [
  {
    productName: "Wireless Headphones",
    category: "Electronics",
    price: "$99.9",
    views: 234,
  },
  {
    productName: "Smart Watch",
    category: "Electronics",
    price: "$149.9",
    views: 180,
  },
  {
    productName: "Laptop Stand",
    category: "Accessories",
    price: "$39.9",
    views: 120,
  },
  {
    productName: "USB-C Cable",
    category: "Accessories",
    price: "$9.9",
    views: 300,
  },
  {
    productName: "Phone Charger",
    category: "Accessories",
    price: "$19.9",
    views: 150,
  },
];

const ProductTable = () => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-border">
        <h2 className="text-lg font-semibold text-card-foreground">
          Product Details
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="py-3 px-6 text-left text-sm font-medium text-muted-foreground">
                Product Name
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-muted-foreground">
                Category
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-muted-foreground">
                Price
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-muted-foreground">
                Views
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {details.map((item, index) => (
              <tr
                key={index}
                className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="py-4 px-6 text-sm font-medium text-card-foreground">
                  {item.productName}
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    {item.category}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm font-semibold text-card-foreground">
                  {item.price}
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4" />
                    {item.views}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 rounded-md transition-colors"
                      aria-label="Edit product"
                    >
                      <Edit2 className="h-3.5 w-3.5" />
                      Edit
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                      aria-label="Delete product"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
