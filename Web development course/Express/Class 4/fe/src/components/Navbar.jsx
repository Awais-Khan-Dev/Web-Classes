import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold  text-indigo-600 tracking-tight"
        >
          Blogify ✍️
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link className="text-gray-600 hover:text-indigo-600" to="/">
            Blogs
          </Link>
          <Link className="text-gray-600 hover:text-indigo-600" to="/my-blogs">
            My Blogs
          </Link>
          <Link
            className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
            to="/create"
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}
