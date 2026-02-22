import React, { useState } from "react";

// Initial empty form state - used when adding new product
const INITIAL_FORM = {
  productName: "",
  category: "",
  price: "",
  description: "",
  imageUrl: "",
};

// Available categories - can be expanded later
const CATEGORIES = ["Electronics", "Accessories", "Clothing", "Home & Garden"];

const AddProductForm = ({
  onSubmit, // Function to call when form is submitted (from parent)
  onCancel, // Function to call when cancel is clicked (from parent)
  initialData = null, // Product data if editing (null if adding new)
  mode = "add", // "add" or "edit" - determines button text and behavior
}) => {
  // ========================================
  // STATE - Form data that user is typing
  // ========================================

  // If initialData exists (editing), pre-fill form with that data
  // If initialData is null (adding), start with empty form
  const [formData, setFormData] = useState(
    initialData
      ? {
          productName: initialData.productName,
          category: initialData.category,
          price: initialData.price.replace("$", ""),
          description: initialData.description || "",
          imageUrl: initialData.imageUrl || "",
        }
      : INITIAL_FORM,
  );

  // ========================================
  // EVENT HANDLERS
  // ========================================

  /**
   * Generic input change handler
   * Works for ALL input types (text, number, select, textarea)
   *
   * How it works:
   * 1. Extracts 'name' and 'value' from the input element
   * 2. Updates only that specific field in formData
   * 3. Keeps all other fields unchanged
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Example: If user types "Watch" in productName input:
    // name = "productName"
    // value = "Watch"

    setFormData((prev) => ({
      ...prev, // Copy all existing fields (category, price, etc.)
      [name]: value, // Update only the field that changed
    }));
    // Result: { productName: "Watch", category: "Electronics", price: "99", ... }
  };

  /**
   * Form submission handler
   * Runs when user clicks "Add Product" or "Update Product" button
   *
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    // Prevent page reload (default form behavior)
    e.preventDefault();

    // ========================================
    // PREPARE DATA - Clean and validate
    // ========================================

    // Create clean payload with trimmed whitespace
    const payload = {
      productName: formData.productName.trim(), // Remove spaces from start/end
      category: formData.category,
      price: formData.price, // Parent will format this with $ and decimals
      description: formData.description.trim(),
      imageUrl: formData.imageUrl.trim(), // ← Include imageUrl
    };

    // ========================================
    // VALIDATION - Prevent submission if required fields are empty
    // ========================================

    // If any required field is empty, stop here (don't submit)
    if (!payload.productName || !payload.category || !payload.price) {
      return; // Exit function early
    }

    // ========================================
    // SUBMIT - Send data to parent component
    // ========================================

    // Call the parent's onSubmit function with cleaned data
    // Parent decides what to do (add new product or update existing)
    onSubmit?.(payload);
    // The '?.' means: only call if onSubmit exists (optional chaining)

    // ========================================
    // RESET - Clear form after successful submission
    // ========================================

    // Only reset if we're in ADD mode
    // In EDIT mode, parent will close modal, so reset isn't needed
    if (mode === "add") {
      setFormData(INITIAL_FORM);
    }
  };

  // ========================================
  // RENDER - What shows on screen
  // ========================================

  return (
    <form onSubmit={handleSubmit}>
      {/* 
        Using <form> element with onSubmit allows:
        - Enter key to submit
        - Native form validation
        - Accessibility features
      */}

      <div className="p-6 space-y-4">
        {/* space-y-4 adds vertical spacing between fields */}

        {/* ========================================
            PRODUCT NAME FIELD
        ======================================== */}
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Product Name <span className="text-destructive">*</span>
            {/* * indicates required field */}
          </label>
          <input
            name="productName" // Must match key in formData object
            type="text"
            value={formData.productName} // Controlled input - React controls value
            onChange={handleChange} // Update state when user types
            placeholder="Enter product name"
            className="w-full px-3 py-2 border border-border rounded-lg 
                      bg-background text-foreground
                      placeholder:text-muted-foreground
                      focus:ring-2 focus:ring-primary focus:border-transparent 
                      outline-none transition-all"
          />
        </div>

        {/* ========================================
            CATEGORY DROPDOWN
        ======================================== */}
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Category <span className="text-destructive">*</span>
          </label>
          <select
            name="category" // Must match key in formData object
            value={formData.category} // Controlled select
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border rounded-lg 
                      bg-background text-foreground
                      focus:ring-2 focus:ring-primary focus:border-transparent 
                      outline-none transition-all"
          >
            <option value="">Select category</option>
            {/* Empty value for default "please select" option */}

            {/* Loop through CATEGORIES array and create option for each */}
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
                {/* key helps React track which option is which */}
              </option>
            ))}
          </select>
        </div>

        {/* ========================================
            PRICE INPUT
        ======================================== */}
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Price <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            {/* Wrapper div for positioning $ symbol */}
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              ${/* $ symbol positioned inside input field */}
            </span>
            <input
              name="price"
              type="number" // Only allows numbers
              step="0.01" // Allows decimals (0.01 = two decimal places)
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              className="w-full pl-8 pr-3 py-2 border border-border rounded-lg 
                        bg-background text-foreground
                        placeholder:text-muted-foreground
                        focus:ring-2 focus:ring-primary focus:border-transparent 
                        outline-none transition-all"
              // pl-8 adds left padding to make room for $ symbol
            />
          </div>
        </div>

        {/* ========================================
            IMAGE URL FIELD
        ======================================== */}
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Image URL{" "}
            <span className="text-muted-foreground text-xs">(optional)</span>
          </label>
          <input
            name="imageUrl" // Must match key in formData
            type="url" // URL input type for validation
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/product-image.jpg"
            className="w-full px-3 py-2 border border-border rounded-lg 
                      bg-background text-foreground
                      placeholder:text-muted-foreground
                      focus:ring-2 focus:ring-primary focus:border-transparent 
                      outline-none transition-all"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Paste a URL to an image (JPG, PNG, WEBP)
          </p>
        </div>

        {/* ========================================
            DESCRIPTION TEXTAREA (Optional)
        ======================================== */}
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Description{" "}
            <span className="text-muted-foreground text-xs">(optional)</span>
            {/* Smaller, muted text to show it's optional */}
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows={3} // Shows 3 rows of text
            className="w-full px-3 py-2 border border-border rounded-lg 
                      bg-background text-foreground
                      placeholder:text-muted-foreground
                      focus:ring-2 focus:ring-primary focus:border-transparent 
                      outline-none resize-none transition-all"
            // resize-none prevents user from resizing textarea
          />
        </div>
      </div>

      {/* ========================================
          FORM FOOTER - Action Buttons
      ======================================== */}
      <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
        {/* Cancel Button */}
        <button
          type="button" // Important! "button" type prevents form submission
          onClick={onCancel} // Calls parent's onCancel function
          className="px-4 py-2 text-card-foreground hover:bg-muted 
                    rounded-lg transition-colors font-medium"
        >
          Cancel
        </button>

        {/* Submit Button */}
        <button
          type="submit" // "submit" type triggers form onSubmit
          className="px-4 py-2 bg-primary text-primary-foreground 
                    rounded-lg hover:opacity-90 transition-all 
                    font-medium shadow-sm"
        >
          {/* Button text changes based on mode */}
          {mode === "edit" ? "Update Product" : "Add Product"}
          {/* If editing: "Update Product" */}
          {/* If adding: "Add Product" */}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
