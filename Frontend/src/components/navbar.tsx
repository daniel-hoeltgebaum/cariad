import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ModeToggle } from "./theme/mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-medium transition-colors"
      : "text-muted-foreground hover:text-primary transition-colors";

  return (
    <nav className="bg-background border-border mb-5 border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-foreground text-xl font-bold">
            CARIAD Dataset
          </Link>

          <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <NavLink to="/dataset" className={navLinkClasses}>
              Dataset
            </NavLink>
            <NavLink to="/sensor-setup" className={navLinkClasses}>
              Sensor Setup
            </NavLink>
            <NavLink to="/visualization" className={navLinkClasses}>
              Visualization
            </NavLink>
            <NavLink to="/team" className={navLinkClasses}>
              Team
            </NavLink>
            <NavLink to="/download" className={navLinkClasses}>
              Download
            </NavLink>
            <NavLink to="/license" className={navLinkClasses}>
              License
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none md:hidden"
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
        <div className="bg-background border-border flex flex-col space-y-2 border-t px-4 pt-2 pb-3 shadow-sm md:hidden">
          <NavLink to="/dataset" className={navLinkClasses}>
            Dataset
          </NavLink>
          <NavLink to="/sensor-setup" className={navLinkClasses}>
            Sensor Setup
          </NavLink>
          <NavLink to="/visualization" className={navLinkClasses}>
            Visualization
          </NavLink>
          <NavLink to="/team" className={navLinkClasses}>
            Team
          </NavLink>
          <NavLink to="/download" className={navLinkClasses}>
            Download
          </NavLink>
          <NavLink to="/license" className={navLinkClasses}>
            License
          </NavLink>
        </div>
      )}
    </nav>
  );
}
