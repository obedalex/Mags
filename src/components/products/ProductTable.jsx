import React from "react";
import { Edit2, Trash2, Eye } from "lucide-react";

const ProductTable = ({ products, onDelete, onEdit }) => {
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
            {products.map((item) => (
              <tr
                key={item.id ?? item.productName}
                className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              >
                {/* Product Name & Image */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    {/* Product Image */}
                    <img
                      src={
                        item.imageUrl ||
                        "https://via.placeholder.com/50?text=No+Image"
                      }
                      alt={item.productName}
                      className="w-12 h-12 rounded-lg object-cover bg-muted"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.src =
                          "https://via.placeholder.com/50?text=No+Image";
                      }}
                    />
                    {/* Product Name */}
                    <span className="font-medium text-card-foreground">
                      {item.productName}
                    </span>
                  </div>
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
                      onClick={() => onEdit?.(item.id ?? item.productName)}
                    >
                      <Edit2 className="h-3.5 w-3.5" />
                      Edit
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                      aria-label="Delete product"
                      onClick={() => onDelete?.(item.id ?? item.productName)}
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
