import React, { useState } from "react";

const INITIAL_FORM = {
  productName: "",
  category: "",
  price: "",
  description: "",
};

const CATEGORIES = ["Electronics", "Accessories", "Clothing", "Home & Garden"];

const AddProductForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      productName: formData.productName.trim(),
      category: formData.category,
      price: formData.price, // you can convert to number later if you want
      description: formData.description.trim(),
    };

    if (!payload.productName || !payload.category || !payload.price) return;

    onSubmit?.(payload);
    setFormData(INITIAL_FORM);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Product Name <span className="text-destructive">*</span>
          </label>
          <input
            name="productName"
            type="text"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Category <span className="text-destructive">*</span>
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
          >
            <option value="">Select category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Price <span className="text-destructive">*</span>
          </label>
          <input
            name="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Description{" "}
            <span className="text-muted-foreground text-xs">(optional)</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows={3}
            className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-card-foreground hover:bg-muted rounded-lg transition-colors font-medium"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all font-medium shadow-sm"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
