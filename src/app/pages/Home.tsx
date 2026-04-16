import { Link } from "react-router";
import { Shield, Clock, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { SectionLabel } from "../components/SectionLabel";
import imgHero from "figma:asset/36d3633ecd8f2ac6f3ac53e1269c405805cbf002.png";
import imgWhyUs from "figma:asset/e8ee979c7b6444fc91c6be01d28556c663030a0f.png";

const font = { fontFamily: "'Rethink Sans', sans-serif" };

function ServiceCard({ title, description, icon, highlighted, to }: { title: string; description: string; icon: React.ReactNode; highlighted?: boolean; to: string }) {
  return (
    <Link to={to} className="no-underline">
      <div className={`bg-white rounded-[16px] p-[37px] flex flex-col gap-[22px] relative ${highlighted ? "border border-[#00a8b2]" : "border border-[#dfdfdf]"}`}>
        <div className={`w-[58px] h-[58px] rounded-[12px] flex items-center justify-center ${highlighted ? "bg-[#00a8b2] text-white" : "bg-[rgba(0,168,178,0.1)] text-[#00a8b2]"} bg-[#00a8b21a]`}>
          {icon}
        </div>
        <h3 className="text-[#1e1d24] text-[18px] leading-[25.2px]" style={{ ...font, fontWeight: 500 }}>{title}</h3>
        <p className="text-[#6b6667] text-[14px] leading-[22.6px]" style={font}>{description}</p>
        <div className="flex items-center gap-2 text-[#00a8b2] text-[14px]" style={{ ...font, fontWeight: 700 }}>
          En savoir plus <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}

function TestimonialCard({ text, initials, name, detail }: { text: string; initials: string; name: string; detail: string }) {
  return (
    <div className="bg-white rounded-[20px] border border-[#e8e4e4] p-[37px] flex flex-col gap-[19px]">
      <div className="flex gap-1 text-[#f0ae15] text-[16px]">{"★★★★★"}</div>
      <p className="text-[#555] text-[14px] leading-[22.6px]" style={font}>{text}</p>
      <div className="flex gap-[14px] items-center pt-2">
        <div className="w-[44px] h-[44px] rounded-full bg-[rgba(0,168,178,0.1)] flex items-center justify-center text-[#00a8b2] text-[14px]" style={{ ...font, fontWeight: 500 }}>{initials}</div>
        <div>
          <p className="text-[#1e1d24] text-[14px]" style={{ ...font, fontWeight: 700 }}>{name}</p>
          <p className="text-[#6b6667] text-[12px]" style={font}>{detail}</p>
        </div>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative" style={{ background: "linear-gradient(119deg, #e8f5f7 0%, #fff 100%)" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[80px] lg:py-[120px] flex flex-col lg:flex-row gap-8 lg:gap-[30px] items-center">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] rounded-full bg-[#00a8b2]" />
              <span className="text-[#00a8b2] text-[14px]" style={font}>Denturologiste certifié</span>
            </div>
            <h1 className="text-[#1e1d24] text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.12]" style={{ ...font, fontWeight: 600 }}>
              {`Votre sourire, l'expertise Agoua`}
            </h1>
            <p className="text-[#6b6667] text-[16px] leading-[27.4px] max-w-[540px]" style={font}>
              {`Samuel Agoua offre des soins prothétiques personnalisés dans un environnement chaleureux et professionnel. De la conception à l'ajustement, le confort du patient est sa priorité.`}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link to="/contact" className="bg-[#00a8b2] text-white px-8 py-[15px] rounded-[9px] text-[14px] no-underline hover:bg-[#009099] transition-colors" style={{ ...font, fontWeight: 500 }}>Prendre rendez-vous</Link>
              <Link to="/services" className="bg-white text-[#1e1d24] px-8 py-[15px] rounded-[9px] text-[14px] no-underline border border-[#dfdfdf] hover:bg-gray-50 transition-colors" style={{ ...font, fontWeight: 500 }}>Nos services</Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-[42px] mt-8 border-t border-[#dfdfdf]">
              {[
                { num: "15+", label: "Années d'expérience" },
                { num: "2K+", label: "Patients satisfaits" },
                { num: "3", label: "Services spécialisées" },
              ].map((s) => (
                <div key={s.num} className="flex flex-col gap-1">
                  <span className="text-[#1e1d24] text-[28px] sm:text-[48px] leading-[1.1]" style={{ ...font, fontWeight: 600 }}>{s.num}</span>
                  <span className="text-[#6b6667] text-[13px] sm:text-[16px] leading-[27.4px]" style={font}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full max-w-[560px] lg:max-w-none">
            <img src={imgHero} alt="Clinique Agoua" className="w-full h-[300px] sm:h-[400px] lg:h-[560px] object-cover rounded-[12px]" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1e1d24]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { icon: <Shield size={20} />, text: "Membre de l'ODQ" },
              { icon: <Clock size={20} />, text: "Rendez-vous rapides disponibles" },
              { icon: <Heart size={20} />, text: "Service personnalisé et humain" },
              { icon: <CheckCircle size={20} />, text: "Remboursement assurances accepté" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="text-[#00a8b2]">{item.icon}</span>
                <span className="text-white text-[14px]" style={font}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[80px] lg:py-[100px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-[42px]">
            <div className="flex flex-col gap-4 max-w-[483px]">
              <SectionLabel text="Les services" />
              <h2 className="text-[#1e1d24] text-[30px] sm:text-[40px] leading-[1.2]" style={{ ...font, fontWeight: 600 }}>Une expertise complète en prothèses dentaires</h2>
            </div>
            <Link to="/services" className="bg-white text-[#1e1d24] px-8 py-[15px] rounded-[9px] text-[14px] no-underline border border-[#dfdfdf] hover:bg-gray-50 transition-colors shrink-0" style={font}>Voir tous les services</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <ServiceCard
              to="/services/nouvelle-prothese"
              title="Nouvelle prothèse dentaire"
              description="Conception et fabrication d'une prothèse complète ou partielle sur mesure, adaptée parfaitement à l'anatomie du patient."
              icon={<Shield size={26} />}
            />
            <ServiceCard
              to="/services/nettoyage"
              title="Nettoyage de prothèse"
              description="Nettoyage professionnel aux ultrasons et polissage de la prothèse pour maintenir une hygiène et une longévité optimales."
              icon={<ArrowRight size={26} />}
            />
            <ServiceCard
              to="/services/examen"
              title="Examen de routine"
              description="Évaluation complète de l'état des prothèses et de la santé des tissus buccaux pour prévenir tout problème à long terme."
              icon={<CheckCircle size={26} />}
            />
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-[#f1f1f2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[80px] lg:py-[100px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-center">
            <div className="flex-1 flex flex-col gap-4">
              <SectionLabel text="Samuel Agoua" />
              <h2 className="text-[#1e1d24] text-[30px] sm:text-[40px] leading-[1.2] max-w-[483px]" style={{ ...font, fontWeight: 600 }}>Un savoir-faire au service de votre sourire</h2>
              <p className="text-[#6b6667] text-[16px] leading-[27.4px]" style={font}>
                {`Samuel Agoua allie rigueur clinique et approche profondément humaine pour offrir des soins prothétiques d'exception à chaque patient.`}
              </p>
              <div className="flex flex-col gap-5 mt-4">
                {[
                  { title: "Technologie de pointe", desc: "Fabrication en laboratoire avec des matériaux de haute qualité durables et esthétiques." },
                  { title: "Suivi personnalisé", desc: "Chaque patient bénéficie d'un plan de traitement adapté à sa situation unique et à ses attentes." },
                  { title: "Accessibilité financière", desc: "Collaboration avec la majorité des assureurs et avec le régime fédéral de soins dentaires (RCSD). Options de paiement flexibles disponibles." },
                  { title: "Environnement rassurant", desc: "Clinique moderne et accueillante, conçue pour mettre les patients à l'aise dès leur arrivée." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded bg-[rgba(0,168,178,0.1)] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-[#00a8b2]" />
                    </div>
                    <div>
                      <p className="text-[#1e1d24] text-[15px] mb-1" style={{ ...font, fontWeight: 500 }}>{item.title}</p>
                      <p className="text-[#6b6667] text-[14px] leading-[22.6px]" style={font}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative w-full">
              <div className="absolute bg-[#00a8b2] opacity-10 right-[-24px] top-[-24px] rounded-[24px] w-[200px] h-[200px] hidden lg:block" />
              <img src={imgWhyUs} alt="Pourquoi nous choisir" className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-[24px] relative z-10" />
              <div className="absolute bottom-[-24px] left-[-24px] z-20 flex flex-col gap-3 hidden sm:flex">
                <div className="bg-white rounded-[12px] px-6 py-5 border border-[#dfdfdf] shadow-[0px_8px_24px_0px_rgba(35,31,32,0.1)]">
                  <p className="text-[#00a8b2] text-[24px]" style={font}>98%</p>
                  <p className="text-[#6b6667] text-[12px]" style={font}>Taux de satisfaction patients</p>
                </div>
                <div className="bg-white rounded-[12px] px-6 py-5 border border-[#dfdfdf] shadow-[0px_8px_24px_0px_rgba(35,31,32,0.1)]">
                  <p className="text-[#00a8b2] text-[24px]" style={font}>15+</p>
                  <p className="text-[#6b6667] text-[12px]" style={font}>{`Ans d'expertise clinique`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#1e1d24]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-4 mb-12">
            <SectionLabel text="Comment ça fonctionne" />
            <h2 className="text-white text-[30px] sm:text-[40px] leading-[1.2] max-w-[483px]" style={{ ...font, fontWeight: 600 }}>Un processus simple et transparent</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { num: "01", title: "Consultation initiale", desc: "Évaluation complète des besoins et de la santé buccale du patient lors d'une première rencontre." },
              { num: "02", title: "Plan de traitement", desc: "Élaboration d'un plan personnalisé avec options, délais et coûts présentés clairement et sans surprise." },
              { num: "03", title: "Fabrication", desc: "Conception et fabrication de la prothèse en laboratoire certifié avec des matériaux premium." },
              { num: "04", title: "Ajustement & suivi", desc: "Livraison, ajustements précis et suivi rigoureux pour assurer le confort du patient à long terme." },
            ].map((step) => (
              <div key={step.num} className="text-center flex flex-col items-center">
                <div className="w-[72px] h-[72px] rounded-full bg-[rgba(0,168,178,0.1)] border border-[#00a8b2] flex items-center justify-center mb-6">
                  <span className="text-[#00a8b2] text-[24px]" style={font}>{step.num}</span>
                </div>
                <h4 className="text-white text-[16px] mb-2" style={{ ...font, fontWeight: 700 }}>{step.title}</h4>
                <p className="text-[#8f8f8f] text-[14px] leading-[22.6px]" style={font}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-4 mb-12">
            <SectionLabel text="Témoignages" />
            <h2 className="text-[#1e1d24] text-[30px] sm:text-[40px] leading-[1.2] max-w-[510px]" style={{ ...font, fontWeight: 600 }}>Ce que disent les patients de Samuel Agoua</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              text="« M. Agoua est exceptionnel. Ma prothèse s'ajuste parfaitement et je retrouve enfin le plaisir de manger normalement. Son écoute et sa patience m'ont vraiment mis à l'aise. »"
              initials="ML"
              name="Marie-Louise Tremblay"
              detail="Patiente depuis 3 ans"
            />
            <TestimonialCard
              text="« Clinique très professionnelle. L'équipe est chaleureuse et M. Agoua explique chaque étape clairement. J'aurais aimé découvrir sa clinique bien plus tôt ! »"
              initials="JB"
              name="Jean-Pierre Bouchard"
              detail="Patient depuis 1 an"
            />
            <TestimonialCard
              text="« M. Agoua est exceptionnel. Ma prothèse s'ajuste parfaitement et je retrouve enfin le plaisir de manger normalement. Son écoute et sa patience m'ont vraiment mis à l'aise. »"
              initials="SC"
              name="Sophie Côté"
              detail="Patiente depuis 2 ans"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}