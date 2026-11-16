## Ringkasan Perubahan
Menggabungkan dan menyempurnakan aplikasi web **Manajemen Produk** dengan menerapkan konsep *Fundamental React* (Tugas 3) serta *React Router & Tailwind CSS* (Tugas 4). Proyek ini dibangun menggunakan arsitektur komponen modular (*Atomic Design*), state management `useState` untuk operasi CRUD, sistem perutean SPA menggunakan **React Router v7** (mencakup *nested layout* dengan `<Outlet/>`, dynamic routing `:id`, serta *wildcard 404*), dan tata letak responsif berbasis **Tailwind CSS**.

## Fitur & Komponen Utama
- **Modular Component-Based UI**: Pemisahan komponen ke dalam folder terstruktur (`Navbar`, `Header`, `FilterBar`, `ProductCard`, `ProductFormModal`, `DeleteConfirmModal`).
- **React Router v7**: Implementasi navigasi internal tanpa *full reload* menggunakan `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, `<NavLink>` (dengan status menu aktif otomatis), `useParams`, dan `useNavigate`.
- **Shared Layout**: Penggunaan `AppLayout` yang membungkus seluruh halaman anak via `<Outlet/>` agar bilah navigasi (*Navbar*) tetap konsisten.
- **CRUD & Validasi State**: Pengelolaan data produk interaktif (tambah, cari, edit, dan hapus) dengan validasi input harga lebih dari 0.
- **Tailwind CSS**: Styling antarmuka modern dan responsif (*mobile-first* dengan grid fleksibel).

## Bukti Pengujian

| Skenario Pengujian | Hasil yang Diharapkan | Hasil Aktual |
|---|---|---|
| Membuka halaman utama (`/`) | Menampilkan halaman Dashboard utama aplikasi beserta Navbar di atas | Sesuai |
| Mengakses menu Produk (`/products`) | Menampilkan daftar produk, kolom pencarian, serta tombol tambah, edit, dan hapus | Sesuai |
| Memilih detail salah satu produk (`/products/:id`) | Halaman berpindah secara dinamis menampilkan informasi detail produk sesuai ID-nya | Sesuai |
| Mengakses URL tidak terdaftar (`/alamat-salah`) | Menampilkan halaman peringatan 404 (*NotFoundPage*) lengkap dengan tautan kembali | Sesuai |