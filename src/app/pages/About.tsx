import { useState } from "react";
import { CTABanner } from "../components/CTABanner";
import { SectionLabel } from "../components/SectionLabel";
import imgAbout from "figma:asset/e8ee979c7b6444fc91c6be01d28556c663030a0f.png";
import Component2 from "../../imports/Component2";

const font = { fontFamily: "'Rethink Sans', sans-serif" };

const tabs = [
  { id: "parcours", label: "Mon parcours" },
  { id: "philosophie", label: "Ma philosophie" },
  { id: "valeurs", label: "Mes valeurs" },
  { id: "clinique", label: "La clinique" },
];

export function About() {
  const [activeTab, setActiveTab] = useState("parcours");

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(119deg, #e8f5f7 0%, #fff 100%)" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[80px] lg:py-[100px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-center">
            <div className="flex-1 relative w-full max-w-[480px]">
              <div className="absolute bg-[#00a8b2] opacity-15 right-[-20px] top-[-20px] rounded-[20px] w-[120px] h-[120px] hidden lg:block" />
              <img src={imgAbout} alt="Samuel Agoua" className="w-full h-[400px] lg:h-[560px] object-cover rounded-[24px] relative z-10" />
              <div className="absolute bottom-[-20px] right-[-20px] bg-white rounded-[16px] shadow-[0px_8px_24px_0px_rgba(35,31,32,0.12)] px-6 py-5 z-20 flex items-center gap-3.5 hidden sm:flex">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[rgba(0,168,178,0.1)] flex items-center justify-center">
                  <div className="w-[24px] h-[24px]">
                    <Component2 />
                  </div>
                </div>
                <div>
                  <p className="text-[#1e1d24] text-[13px]" style={{ ...font, fontWeight: 500 }}>Membre certifié</p>
                  <p className="text-[#6b6667] text-[12px]" style={font}>ODQ · Québec</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <SectionLabel text="À propos" />
              <h1 className="text-[#1e1d24] text-[36px] sm:text-[50px] leading-[1.1]" style={{ ...font, fontWeight: 500 }}>
                Rencontrez<br/>Samuel Agoua
              </h1>
              <p className="text-[#6b6667] text-[18px] leading-[30.6px] mt-2" style={font}>
                Denturologiste passionné, Samuel Agoua a fondé sa clinique avec une conviction profonde : chaque patient mérite des soins prothétiques à la hauteur de ses besoins et de son sourire.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { num: "15+", label: "Années d'expérience clinique" },
                  { num: "2 000+", label: "Patients traités avec succès" },
                  { num: "D.D.", label: "Diplôme en denturologie" },
                  { num: "ODQ", label: "Membre en règle" },
                ].map((item) => (
                  <div key={item.num} className="bg-white rounded-[16px] border border-[#e8e4e4] p-5 flex flex-col gap-1.5">
                    <span className="text-[#00a8b2] text-[28px] leading-[28px]" style={font}>{item.num}</span>
                    <span className="text-[#6b6667] text-[13px]" style={font}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content with sidebar tabs */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[80px] lg:py-[100px]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-[200px] shrink-0">
              <p className="text-[#00a8b2] text-[12px] uppercase tracking-[1.2px] mb-4" style={{ ...font, fontWeight: 700 }}>Navigation</p>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-[14px] text-left whitespace-nowrap transition-colors ${
                      activeTab === tab.id ? "bg-[rgba(0,168,178,0.05)] text-[#00a8b2]" : "text-[#6b6667] hover:text-[#1e1d24]"
                    }`}
                    style={{ ...font, fontWeight: activeTab === tab.id ? 500 : 400 }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {activeTab === "parcours" && (
                <div className="flex flex-col gap-8">
                  <h2 className="text-[#1e1d24] text-[28px] sm:text-[32px]" style={{ ...font, fontWeight: 500 }}>Mon parcours</h2>
                  <p className="text-[#6b6667] text-[16px] leading-[27.4px]" style={font}>Originaire de la Côte d'Ivoire, Samuel Agoua a toujours été animé par une passion pour les sciences de la santé et le désir d'aider les autres. Il a obtenu son doctorat en odontostomatologie en Côte d'ivoire, Ses études au Québec<span className="font-bold italic"> </span>lui ont ainsi permis d'adapter sa pratique aux standards d'ici.</p>
                  <p className="text-[#6b6667] text-[16px] leading-[27.4px]" style={font}>Samuel a exercé pendant plusieurs années comme hygiéniste dentaire à Sherbrooke, à Montréal et dans la région de la Baie James, avant de choisir la voie de la denturologie d'où il implémente&nbsp;&nbsp;une approche unique et humaine à partir d'une&nbsp;&nbsp;solide expérience auprès de clientèles diversifiées. Il pratique principalement à Sherbrooke mais aussi auprès des populations autochtones de la Baie James.</p>

                  <div className="flex flex-col gap-6 mt-4">
                    {[
                      { label: "FORMATION", title: "Doctorat en odonto-stomatologie", desc: "Formation complétée en Côte d'Ivoire, avec une base solide en santé bucco-dentaire et une approche axée sur le bien-être global des patients." },
                      { label: "EXPÉRIENCE PROFESSIONNELLE", title: "Hygiéniste dentaire", desc: "Plusieurs années d'expérience au Québec, notamment à Sherbrooke et Montréal, auprès d'une clientèle variée, permettant de développer une pratique rigoureuse et humaine." },
                      { label: "SPÉCIALISATION", title: "Denturogie", desc: "Transition vers la denturologie afin d'offrir des solutions complètes et adaptées, centrées sur le confort, la fonctionnalité et l'esthétique." },
                      { label: "PRATIQUE ACTUELLE", title: "Pratique clinique", desc: "Exerce principalement à Sherbrooke, avec une implication auprès de différentes communautés, incluant en région éloignée, afin de rendre les soins accessibles." },
                    ].map((item) => (
                      <div key={item.title} className="border-l-2 border-[#00a8b2] pl-6 flex flex-col gap-1">
                        <span className="text-[#00a8b2] text-[11px] uppercase tracking-[0.66px]" style={{ ...font, fontWeight: 700 }}>{item.label}</span>
                        <span className="text-[#1e1d24] text-[15px]" style={{ ...font, fontWeight: 500 }}>{item.title}</span>
                        <span className="text-[#6b6667] text-[14px] leading-[22.6px]" style={font}>{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "philosophie" && (
                <div className="flex flex-col gap-8">
                  <h2 className="text-[#1e1d24] text-[28px] sm:text-[32px]" style={{ ...font, fontWeight: 500 }}>Ma philosophie de soins</h2>
                  <p className="text-[#6b6667] text-[16px] leading-[27.4px]" style={font}>Pour Samuel Agoua, la denturologie ne se limite pas à la fabrication d'une prothèse. Il s'agit de redonner à chaque patient sa confiance, sa capacité à sourire, à manger et à profiter pleinement de la vie.</p>
                  <p className="text-[#6b6667] text-[16px] leading-[27.4px]" style={font}>Sa philosophie repose sur trois piliers : Premièrement, l'écoute attentive pour comprendre chaque situation personnelle et proposer des solutions afin de garantir un résultat clinique optimal. La presentation claire des différentes options de traitement afin de permettre un choix éclairé et enfin le suivi, pour offrir un service d'ajustement personnalisé et unique pour une prothèse durable et un engagement à long terme.</p>
                  
                </div>
              )}

              {activeTab === "valeurs" && (
                <div className="flex flex-col gap-8">
                  <h2 className="text-[#1e1d24] text-[28px] sm:text-[32px]" style={{ ...font, fontWeight: 500 }}>Mes valeurs</h2>
                  <p className="text-[#6b6667] text-[16px] leading-[27.4px]" style={font}>
                    Ces quatre valeurs guident chaque décision clinique et chaque interaction avec nos patients.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: "Humanité", desc: "Chaque patient est accueilli avec respect, empathie et bienveillance." },
                      { title: "Excellence", desc: "Des matériaux de qualité supérieure et techniques contemporaines permanentes." },
                      { title: "Transparence", desc: "Communication claire, explication des plans de traitement, des coûts en tenant compte des attentes de chaque patient." },
                      { title: "Engagement", desc: "Suivi constant tout au long du traitement et après la mise en bouche." },
                    ].map((v) => (
                      <div key={v.title} className="bg-[#f8f8f8] rounded-[16px] border border-[#e8e4e4] p-6 flex flex-col gap-2">
                        <h3 className="text-[#1e1d24] text-[16px]" style={{ ...font, fontWeight: 600 }}>{v.title}</h3>
                        <p className="text-[#6b6667] text-[14px] leading-[22.6px]" style={font}>{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "clinique" && (
                <div className="flex flex-col gap-8">
                  <h2 className="text-[#1e1d24] text-[28px] sm:text-[32px]" style={{ ...font, fontWeight: 500 }}>La clinique</h2>
                  <p className="text-[#6b6667] text-[16px] leading-[27.4px]" style={font}>
                    {`Notre clinique est située à Sherbrooke et offre un environnement moderne, chaleureux et accessible. Nous accueillons nos patients dans un espace conçu pour leur confort.`}
                  </p>
                  <div className="flex flex-col gap-4 mt-4">
                    <h3 className="text-[#1e1d24] text-[16px]" style={{ ...font, fontWeight: 600 }}>{`Horaires d'ouverture :`}</h3>
                    <div className="flex flex-col gap-2 text-[14px]" style={font}>
                      <p className="text-[#6b6667]">Lundi au jeudi : 9h00 – 16h00</p>
                      <p className="text-[#6b6667]">Vendredi : 9h00 – 13h00</p>
                      <p className="text-[#6b6667]">Samedi et dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}