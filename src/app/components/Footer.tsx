import { Link } from "react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1e1d24] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] pb-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-[60px] border-b border-[rgba(255,255,255,0.08)]">
          {/* Brand */}
          <div>
            
            <p className="text-[15px] mb-1" style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 500 }}>Samuel Agoua</p>
            <p className="text-[11px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.66px] mb-4" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>Denturologiste</p>
            <p className="text-[14px] text-[rgba(255,255,255,0.5)] leading-[23.8px]" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
              Des soins prothétiques personnalisés alliant expertise clinique et approche humaine, pour votre confort et votre bien-être.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.72px] mb-5" style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 500 }}>Navigation</h4>
            <ul className="space-y-3 list-none p-0">
              {[
                { to: "/", label: "Accueil" },
                { to: "/a-propos", label: "À propos" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[14px] text-[rgba(255,255,255,0.5)] no-underline hover:text-white transition-colors" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.72px] mb-5" style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 500 }}>Services</h4>
            <ul className="space-y-3 list-none p-0">
              {[
                { to: "/services/nouvelle-prothese", label: "Nouvelle prothèse" },
                { to: "/services/nettoyage", label: "Nettoyage prothèse" },
                { to: "/services/examen", label: "Examen de routine" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[14px] text-[rgba(255,255,255,0.5)] no-underline hover:text-white transition-colors" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.72px] mb-5" style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 500 }}>Coordonnées</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#00a8b2] shrink-0 mt-0.5" />
                <span className="text-[14px] text-[rgba(255,255,255,0.5)] leading-[21px]" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
                  2910, boul. Portland<br/>Sherbrooke (Québec) J1L 1R8
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#00a8b2] shrink-0" />
                <span className="text-[14px] text-[rgba(255,255,255,0.5)]" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>819 446-6985</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-[#00a8b2] shrink-0" />
                <span className="text-[14px] text-[rgba(255,255,255,0.5)]" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>contact@agouadenturologiste.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <span className="text-[13px] text-[rgba(255,255,255,0.3)]" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
            © 2026 Samuel Agoua Denturologiste. Tous droits réservés.
          </span>
          <span className="text-[13px] text-[rgba(255,255,255,0.3)]" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
            {`Membre de l'ODQ`}
          </span>
        </div>
      </div>
    </footer>
  );
}
