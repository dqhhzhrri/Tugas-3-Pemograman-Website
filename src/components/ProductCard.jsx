import React from "react";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition">
      <div>
        <span className="text-xs font-semibold text-gray-400">ID: {product.id}</span>
        <h3 className="text-lg font-bold text-gray-900 mt-1">{product.name}</h3>
        <p className="text-blue-600 font-bold text-lg mt-1">{formatCurrency(product.price)}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-6">
        <button
          onClick={() => onEdit(product)}
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-1.5 rounded-lg text-sm transition cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product)}
          className="border border-red-500 text-red-500 hover:bg-red-50 font-medium py-1.5 rounded-lg text-sm transition cursor-pointer"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}