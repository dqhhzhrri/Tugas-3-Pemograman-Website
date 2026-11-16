import React, { useState } from "react";
import { initialProducts } from "./data/initialProducts";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ProductCard from "./components/ProductCard";
import ProductFormModal from "./components/ProductFormModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");

  // State Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  // Filter Produk berdasarkan pencarian
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handler Tambah Produk
  const handleAddProduct = (newProductData) => {
    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const newProduct = { id: newId, ...newProductData };
    setProducts([...products, newProduct]);
  };

  // Handler Edit Produk
  const handleEditProduct = (updatedData) => {
    setProducts(
      products.map((p) => (p.id === editingProduct.id ? { ...p, ...updatedData } : p))
    );
  };

  // Handler Hapus Produk
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <Header onOpenAddModal={() => setIsAddModalOpen(true)} />
        
        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalCount={filteredProducts.length}
        />

        {/* Grid Daftar Produk menggunakan .map() */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={(prod) => setEditingProduct(prod)}
              onDelete={(prod) => setDeletingProduct(prod)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-400">Tidak ada produk yang ditemukan.</div>
        )}

        <div className="mt-6 text-sm text-gray-500">
          Menampilkan {filteredProducts.length} dari {products.length} produk
        </div>

        {/* Modal Tambah */}
        <ProductFormModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddProduct}
        />

        {/* Modal Edit */}
        <ProductFormModal
          isOpen={Boolean(editingProduct)}
          onClose={() => setEditingProduct(null)}
          onSave={handleEditProduct}
          productToEdit={editingProduct}
        />

        {/* Modal Hapus */}
        <DeleteConfirmModal
          isOpen={Boolean(deletingProduct)}
          onClose={() => setDeletingProduct(null)}
          onConfirm={handleDeleteProduct}
          product={deletingProduct}
        />
      </div>
    </div>
  );
}