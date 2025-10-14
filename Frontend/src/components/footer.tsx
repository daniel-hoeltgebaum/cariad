import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-background border-t border-border p-6 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-center md:gap-6">
        <p className="text-sm">&copy; 2025 CARIAD Dataset. All rights reserved</p>
        <div className="mt-2 flex space-x-4 md:mt-0">
          <Link to="/impressum" className="text-sm hover:text-primary transition-colors">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-sm hover:text-primary transition-colors">
            Datenschutz
          </Link>
          <Link to="/kontakt" className="text-sm hover:text-primary transition-colors">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
