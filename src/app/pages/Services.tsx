import { Link } from "react-router";
import { Shield, Sparkles, ClipboardCheck, ArrowRight } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { SectionLabel } from "../components/SectionLabel";

const font = { fontFamily: "'Rethink Sans', sans-serif" };

export function Services() {
  const services = [
    {
      to: "/services/nouvelle-prothese",
      title: "Nouvelle prothèse dentaire",
      description: "Conception et fabrication d'une prothèse complète ou partielle sur mesure, adaptée parfaitement à l'anatomie du patient.",
      icon: <Shield size={26} />,
      highlighted: false,
    },
    {
      to: "/services/nettoyage",
      title: "Nettoyage de prothèse",
      description: "Nettoyage professionnel aux ultrasons et polissage de la prothèse pour maintenir une hygiène et une longévité optimales.",
      icon: <Sparkles size={26} />,
      highlighted: false,
    },
    {
      to: "/services/examen",
      title: "Examen de routine",
      description: "Évaluation complète de l'état des prothèses et de la santé des tissus buccaux pour prévenir tout problème à long terme.",
      icon: <ClipboardCheck size={26} />,
      highlighted: false,
    },
  ];

  return (
    <>
      <section style={{ background: "linear-gradient(119deg, #e8f5f7 0%, #fff 100%)" }}>
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center py-[100px] lg:py-[140px]">
          <SectionLabel text="Nos services" center />
          <h1 className="text-[#1e1d24] text-[36px] sm:text-[50px] lg:text-[57px] leading-[1.1] mt-4" style={{ ...font, fontWeight: 500 }}>
            Des soins complets pour votre prothèse dentaire
          </h1>
          <p className="text-[#6b6667] text-[18px] leading-[30.6px] mt-4" style={font}>
            {`De la conception à l'entretien, nous vous accompagnons à chaque étape avec expertise et bienveillance.`}
          </p>
        </div>
      </section>

      <section className="bg-[#f1f1f2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[60px] lg:py-[80px] -mt-[60px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="no-underline">
                <div className={`bg-white rounded-[20px] p-[37px] flex flex-col gap-[22px] h-full transition-shadow hover:shadow-lg ${s.highlighted ? "border border-[#c2e4e8] shadow-[0px_16px_40px_0px_rgba(0,168,178,0.1)]" : "border border-[#e8e4e4]"}`}>
                  <div className={`w-[58px] h-[58px] rounded-[16px] flex items-center justify-center ${s.highlighted ? "bg-[#00a8b2] text-white" : "bg-[rgba(0,168,178,0.1)] text-[#00a8b2]"} bg-[#00a8b21a]`}>
                    {s.icon}
                  </div>
                  <h3 className="text-[#1e1d24] text-[19px]" style={{ ...font, fontWeight: 500 }}>{s.title}</h3>
                  <p className="text-[#6b6667] text-[14px] leading-[23.1px]" style={font}>{s.description}</p>
                  <div className="flex items-center gap-2 text-[#00a8b2] text-[14px] mt-auto" style={{ ...font, fontWeight: 500 }}>
                    En savoir plus <ArrowRight size={16} />
                  </div>
                  {s.highlighted && null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
