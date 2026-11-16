import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-black text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-500 mb-6 text-sm">Maaf, alamat URL yang Anda tuju tidak tersedia.</p>
      <Link
        to="/products"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow transition text-sm"
      >
        Kembali ke Produk
      </Link>
    </div>
  );
}