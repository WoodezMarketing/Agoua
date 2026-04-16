import { useEffect } from "react";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { SectionLabel } from "../components/SectionLabel";

const font = { fontFamily: "'Rethink Sans', sans-serif" };

export function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      {/* Hero */}
      <section className="bg-[#00a8b2] relative overflow-hidden">
        <div className="absolute bg-[rgba(255,255,255,0.05)] left-[-100px] top-[-100px] rounded-full w-[400px] h-[400px]" />
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center py-[80px] lg:py-[100px] relative z-10">
          <SectionLabel text="Prenez rendez-vous" center />
          <h1 className="text-white text-[36px] sm:text-[50px] leading-[1.1] mt-4" style={{ ...font, fontWeight: 600 }}>
            Réservez votre consultation
          </h1>
          <p className="text-[rgba(255,255,255,0.8)] text-[16px] leading-[27.4px] mt-4" style={font}>
            Choisissez le moment qui vous convient. La première consultation est toujours gratuite et sans engagement.
          </p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-[#1e1d24]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(0,168,178,0.15)] flex items-center justify-center">
                <MapPin size={18} className="text-[#00a8b2]" />
              </div>
              <div>
                <p className="text-[#00a8b2] text-[11px] uppercase tracking-wider" style={{ ...font, fontWeight: 700 }}>Adresse</p>
                <p className="text-white text-[13px]" style={font}>2910, boul. Portland<br/>Sherbrooke (Québec) J1L 1R8</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(0,168,178,0.15)] flex items-center justify-center">
                <Phone size={18} className="text-[#00a8b2]" />
              </div>
              <div>
                <p className="text-[#00a8b2] text-[11px] uppercase tracking-wider" style={{ ...font, fontWeight: 700 }}>Téléphone</p>
                <p className="text-white text-[13px]" style={font}>819 563-1383</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(0,168,178,0.15)] flex items-center justify-center">
                <Mail size={18} className="text-[#00a8b2]" />
              </div>
              <div>
                <p className="text-[#00a8b2] text-[11px] uppercase tracking-wider" style={{ ...font, fontWeight: 700 }}>Courriel</p>
                <p className="text-white text-[13px]" style={font}>contact@agouadenturologiste.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[60px] lg:py-[80px]">
          <SectionLabel text="Calendrier en ligne" />
          <h2 className="text-[#1e1d24] text-[28px] sm:text-[36px] mt-4 mb-2" style={{ ...font, fontWeight: 500 }}>Choisissez votre disponibilité</h2>
          <p className="text-[#6b6667] text-[16px] mb-8" style={font}>Sélectionnez le type de consultation et un créneau qui vous convient directement dans notre calendrier.</p>

          <div className="bg-[#00a8b2] rounded-t-[20px] px-6 py-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-[rgba(255,255,255,0.15)] flex items-center justify-center">
              <Calendar size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white text-[16px]" style={{ ...font, fontWeight: 600 }}>Samuel Agoua Denturologiste</p>
              <p className="text-[rgba(255,255,255,0.7)] text-[13px]" style={font}>Planifiez votre consultation en quelques clics</p>
            </div>
          </div>
          <div className="border border-[#e8e4e4] border-t-0 rounded-b-[20px] p-4 sm:p-8">
            <div className="calendly-inline-widget" data-url="https://calendly.com/psagoua/examen-de-routine?text_color=1e1d24&primary_color=00a8b2" style={{ minWidth: '320px', height: '700px' }}></div>
          </div>
        </div>
      </section>

      {/* Map Section - Hidden until Google Maps integration is ready */}
      {/* <section className="bg-[#f8f8f8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[60px] lg:py-[80px]">
          <h2 className="text-[#1e1d24] text-[24px] mb-6" style={{ ...font, fontWeight: 500 }}>Notre emplacement</h2>
          <div className="bg-[#e8f5f7] rounded-[20px] h-[300px] sm:h-[400px] flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[rgba(0,168,178,0.15)] flex items-center justify-center">
              <MapPin size={24} className="text-[#00a8b2]" />
            </div>
            <p className="text-[#6b6667] text-[14px] text-center" style={font}>
              1234, rue des Érables, Montréal, QC H2X 1Y5
            </p>
            <p className="text-[#00a8b2] text-[12px]" style={font}>Remplacez par votre intégration Google Maps</p>
          </div>
        </div>
      </section> */}

      <CTABanner />
    </>
  );
}
