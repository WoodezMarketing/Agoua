import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import Vector from "../../imports/Vector";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/a-propos", label: "À propos" },
    { to: "/services", label: "Services" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] border-b border-[#e8e4e4] shadow-[0px_2px_20px_0px_rgba(35,31,32,0.08)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-[157px] h-[40px]">
            <Vector />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-[14px] no-underline transition-colors ${
                location.pathname === link.to ? "text-[#00a8b2]" : "text-[#3a3637] hover:text-[#00a8b2]"
              }`}
              style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#00a8b2] text-white px-6 py-2 rounded-[9px] text-[12px] no-underline ml-2 hover:bg-[#009099] transition-colors"
            style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 500 }}
          >
            Prendre rendez-vous
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1e1d24]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#e8e4e4] px-4 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-lg text-[15px] no-underline ${
                location.pathname === link.to ? "text-[#00a8b2] bg-[rgba(0,168,178,0.05)]" : "text-[#3a3637]"
              }`}
              style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="bg-[#00a8b2] text-white px-6 py-3 rounded-[9px] text-[14px] text-center no-underline mt-2"
            style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 500 }}
          >
            Prendre rendez-vous
          </Link>
        </div>
      )}
    </nav>
  );
}