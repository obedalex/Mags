import React from "react";
import { X } from "lucide-react";
import AddProductForm from "./AddProductForm";

const AddProductModal = ({
  isOpen,
  onClose,
  onAddProduct,
  initialData = null, // ← NEW: product data for editing
  mode = "add", // ← NEW: "add" or "edit"
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-xl max-w-md w-full border border-border">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-card-foreground">
            {mode === "edit" ? "Edit Product" : "Add New Product"}
            {/* ↑ Change title based on mode */}
          </h2>

          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close modal"
            type="button"
          >
            <X size={24} />
          </button>
        </div>

        <AddProductForm
          onCancel={onClose}
          onSubmit={(data) => {
            onAddProduct?.(data);
            onClose();
          }}
          initialData={initialData} // ← Pass to form
          mode={mode} // ← Pass to form
        />
      </div>
    </div>
  );
};
export default AddProductModal;
