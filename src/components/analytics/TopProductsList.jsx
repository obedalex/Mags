import React from "react";
import { Eye, MessageCircle } from "lucide-react";

const TopProductsList = ({ products }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-lg font-semibold text-card-foreground mb-4">
        Top Products
      </h2>

      <div className="space-y-3">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
          >
            {/* Left: Rank + Name */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">
                  {index + 1}
                </span>
              </div>
              <span className="font-medium text-card-foreground">
                {product.name}
              </span>
            </div>

            {/* Right: Stats */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{product.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{product.clicks}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProductsList;
