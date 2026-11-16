import { NavLink } from "react-router";

export default function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1" : "text-gray-600 hover:text-blue-600 transition pb-1";

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-xs">
      <div className="text-xl font-bold text-gray-900 tracking-wide">My App</div>
      <div className="flex items-center gap-6 text-sm font-medium">
        <NavLink to="/" className={navLinkStyle}>Dashboard</NavLink>
        <NavLink to="/products" className={navLinkStyle}>Produk</NavLink>
        <NavLink to="/settings" className={navLinkStyle}>Settings</NavLink>
      </div>
    </nav>
  );
}