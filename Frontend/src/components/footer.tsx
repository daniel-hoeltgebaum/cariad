import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-100 p-6 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-center md:gap-6">
        <p className="text-sm">&copy; 2025 MeinProjekt. All rights reserved</p>
        <div className="mt-2 flex space-x-4 md:mt-0">
          <Link
            to="/impressum"
            className="hover:text-primary transition-colors"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="hover:text-primary transition-colors"
          >
            Datenschutz
          </Link>
          <Link to="/kontakt" className="hover:text-primary transition-colors">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
