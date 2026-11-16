import { useParams, Link } from "react-router";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductDetailPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center shadow-xs">
        <h2 className="text-xl font-bold text-red-600 mb-2">Produk Tidak Ditemukan</h2>
        <p className="text-gray-500 mb-4 text-sm">ID produk "{id}" tidak tersedia di dalam sistem.</p>
        <Link to="/products" className="text-blue-600 font-medium hover:underline text-sm">
          &larr; Kembali ke Daftar Produk
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xs max-w-xl mx-auto">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Detail Produk ID: {product.id}</span>
      <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-1">{product.name}</h1>
      <p className="text-2xl font-bold text-blue-600 mb-6">{formatCurrency(product.price)}</p>
      
      <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
        <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">Stok Tersedia</span>
        <Link
          to="/products"
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg text-sm transition"
        >
          Kembali ke Produk
        </Link>
      </div>
    </div>
  );
}