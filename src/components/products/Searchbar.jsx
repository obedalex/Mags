import React from "react";
import { Search, Plus } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg 
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                     transition-all"
          />
        </div>

        {/* Add Product Button */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground 
                   rounded-lg font-medium hover:bg-primary/90 transition-colors
                   shadow-sm hover:shadow-md"
        >
          <Plus className="h-5 w-5" />
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
