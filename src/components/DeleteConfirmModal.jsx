import React from "react";
import { formatCurrency } from "../utils/formatCurrency";

export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, product }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl relative text-center animate-in fade-in zoom-in-95">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl cursor-pointer">
          &times;
        </button>
        
        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
          🗑️
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-1">Hapus Produk?</h2>
        <p className="text-xs text-gray-500 mb-4">Produk yang dihapus tidak dapat dikembalikan.</p>

        <div className="bg-gray-50 p-3 rounded-xl text-left border border-gray-100 mb-5">
          <span className="text-[10px] font-semibold text-gray-400">ID: {product.id}</span>
          <div className="font-bold text-gray-900 text-sm">{product.name}</div>
          <div className="text-blue-600 font-bold text-sm">{formatCurrency(product.price)}</div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 rounded-lg text-sm transition cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={() => {
              onConfirm(product.id);
              onClose();
            }}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg text-sm transition cursor-pointer"
          >
            Hapus Produk
          </button>
        </div>
      </div>
    </div>
  );
}