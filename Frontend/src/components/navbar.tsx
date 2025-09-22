import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              MyLogo
            </Link>
          </div>
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              to="/sensor-setup"
              className="text-gray-700 hover:text-gray-900"
            >
              Sensor Setup
            </Link>
            <Link to="/dataset" className="text-gray-700 hover:text-gray-900">
              Dataset
            </Link>
            <Link to="/tutorial" className="text-gray-700 hover:text-gray-900">
              Tutorial
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-gray-900">
              Team
            </Link>
            <Link to="/download" className="text-gray-700 hover:text-gray-900">
              Download
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="space-y-1 bg-white px-2 pt-2 pb-3 shadow-md md:hidden">
          <Link
            to="/sensor-setup"
            className="block text-gray-700 hover:text-gray-900"
          >
            Sensor Setup
          </Link>
          <Link
            to="/dataset"
            className="block text-gray-700 hover:text-gray-900"
          >
            Dataset
          </Link>
          <Link
            to="/tutorial"
            className="block text-gray-700 hover:text-gray-900"
          >
            Tutorial
          </Link>
          <Link to="/team" className="block text-gray-700 hover:text-gray-900">
            Team
          </Link>
          <Link
            to="/download"
            className="block text-gray-700 hover:text-gray-900"
          >
            Download
          </Link>
        </div>
      )}
    </nav>
  );
}
