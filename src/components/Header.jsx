import React from "react";

export default function Header({ onOpenAddModal }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manajemen Produk</h1>
        <p className="text-gray-500 text-sm">Kelola daftar produk dan harga dalam satu tempat.</p>
      </div>
      <button
        onClick={onOpenAddModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow transition flex items-center justify-center gap-2 cursor-pointer w-fit"
      >
        <span>+ Tambah Produk</span>
      </button>
    </div>
  );
}