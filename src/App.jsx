import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { initialProducts } from "./data/initialProducts";

// Import Layout & Pages
import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  // Handler Tambah Produk
  const handleAddProduct = (newProductData) => {
    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const newProduct = { id: newId, ...newProductData };
    setProducts([...products, newProduct]);
  };

  // Handler Edit Produk
  const handleEditProduct = (updatedData) => {
    setProducts(
      products.map((p) => (p.id === updatedData.id ? { ...p, ...updatedData } : p))
    );
  };

  // Handler Hapus Produk
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <Routes>
      {/* Nested Route: Menggunakan Shared Layout (Navbar tetap ada di semua halaman anak) */}
      <Route path="/" element={<AppLayout />}>
        {/* Index route untuk URL root "/"[cite: 48] */}
        <Route index element={<DashboardPage />} />

        {/* Halaman Daftar Produk & CRUD */}
        <Route
          path="products"
          element={
            <ProductsPage
              products={products}
              onAddProduct={handleAddProduct}
              onEditProduct={handleEditProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          }
        />

        {/* Dynamic Route untuk Detail Produk berdasarkan ID */}
        <Route
          path="products/:id"
          element={<ProductDetailPage products={products} />}
        />

        {/* Halaman Pengaturan */}
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Wildcard Route (*) untuk menangani Halaman 404 / URL tidak dikenal */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}