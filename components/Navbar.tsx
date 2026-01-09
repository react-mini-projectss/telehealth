export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold text-purple-600">TeleHealth</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>

          {/* Login Box/Button Style */}
          <a href="#login" className="px-5 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all">
            Login
          </a>
        </div>

        {/* Primary CTA Button */}
        <button className="bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700 shadow-md active:scale-95 transition-all">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
