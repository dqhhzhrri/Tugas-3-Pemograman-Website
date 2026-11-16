import { Link } from "react-router";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition">
      <div>
        <span className="text-xs font-semibold text-gray-400">ID: {product.id}</span>
        <h3 className="mt-2 text-xl font-bold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-blue-600 font-bold text-lg">{formatCurrency(product.price)}</p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <Link
          to={`/products/${product.id}`}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Detail &rarr;
        </Link>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(product)}
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-lg text-sm transition cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product)}
            className="border border-red-500 text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg text-sm transition cursor-pointer"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}