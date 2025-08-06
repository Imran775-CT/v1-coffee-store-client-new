import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand logo */}
          <Link
            to="/"
            className="flex items-center gap-1 text-[#c07f39] font-bold text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v3m0 0a4.5 4.5 0 014.5 4.5V12h-9V10.5A4.5 4.5 0 0112 6zm0 3v9"
              />
            </svg>
            Coffee Store
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-[#c07f39] px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/addCoffees"
              className="text-gray-800 hover:text-[#c07f39] px-3 py-2 rounded-md text-sm font-medium"
            >
              Add Coffee
            </Link>
            <Link
              to="/signup"
              className="text-gray-800 hover:text-[#c07f39] px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-gray-800 hover:text-[#c07f39] px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
            <Link to="/users"
            className="text-gray-800 hover:text-[#c07f39] px-3 py-2 rounded-md text-sm font-medium">
            Users
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#c07f39] focus:outline-none"
            >
              {isOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block text-gray-800 hover:text-[#c07f39] px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/addCoffees"
            className="block text-gray-800 hover:text-[#c07f39] px-3 py-2 rounded-md text-base font-medium"
          >
            Add Coffee
          </Link>
          <Link
            to="/signup"
            className="block text-gray-800 hover:text-[#c07f39] px-3 py-2 rounded-md text-base font-medium"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="block text-gray-800 hover:text-[#c07f39] px-3 py-2 rounded-md text-base font-medium"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
