import { useState } from "react";
import { Link, useParams } from "react-router";
import { ChevronLeft, Plus, Minus } from "lucide-react";
import { CTABanner } from "../components/CTABanner";
import { SectionLabel } from "../components/SectionLabel";
import imgNouvelleProthese from "figma:asset/c682b02e080d657f868fab48e8c5251d1ad89acf.png";
import imgNettoyage from "figma:asset/63896a7812deb6f7d28879869efe4e6f287f64a0.png";
import imgExamen from "figma:asset/fc4c350ef5e740220a9e40617bdaaee29c689d82.png";

const font = { fontFamily: "'Rethink Sans', sans-serif" };

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  steps: { title: string; desc: string }[];
  infoTitle: string;
  infoItems: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "nouvelle-prothese": {
    title: "Nouvelle prothèse dentaire",
    subtitle: "Sur mesure, pour votre confort et votre confiance.",
    description: "La conception d'une nouvelle prothèse est une étape importante dans votre vie. Nous vous accompagnons avec soin, de la prise d'empreinte à l'ajustement final, pour un résultat naturel et confortable.",
    image: imgNouvelleProthese,
    steps: [
      { title: "Consultation et évaluation", desc: "Examen complet de votre bouche, de vos besoins et de vos attentes spécifiques." },
      { title: "Prise d'empreintes", desc: "Empreintes de précision pour une prothèse qui s'adapte parfaitement à votre anatomie." },
      { title: "Fabrication en laboratoire", desc: "Fabrication artisanale dans notre laboratoire accrédité avec des matériaux de qualité supérieure." },
      { title: "Essayage et ajustements", desc: "Rendez-vous d'essayage pour vérifier l'ajustement, la phonétique et l'esthétique." },
      { title: "Livraison et suivi", desc: "Remise de votre prothèse définitive avec instructions d'entretien et suivi rapproché." },
    ],
    infoTitle: "Informations pratiques",
    infoItems: [
      { label: "Durée du traitement", value: "5 à 6 semaines" },
      { label: "Couverture assurance", value: "Partielle à totale" },
    ],
    faqs: [
      { q: "Combien de temps dure la fabrication d'une prothèse?", a: "En général, le processus complet dure entre 5 et 6 semaines, incluant plusieurs rendez-vous pour les empreintes, les essayages et les ajustements." },
      { q: "Ma prothèse sera-t-elle couverte par mon assurance?", a: "La plupart des assurances collectives couvrent une partie ou la totalité du coût. Nous vous aidons à comprendre votre couverture." },
      { q: "Quelle est la durée de vie d'une prothèse dentaire?", a: "Une prothèse bien entretenue dure généralement entre 5 et 10 ans." },
    ],
  },
  "nettoyage": {
    title: "Nettoyage de prothèse dentaire",
    subtitle: "Hygiène professionnelle pour une prothèse comme neuve.",
    description: "Un nettoyage professionnel régulier est essentiel pour la longévité de votre prothèse et la santé de vos tissus buccaux. Notre technique aux ultrasons élimine les dépôts que le brossage quotidien ne peut pas atteindre.",
    image: imgNettoyage,
    steps: [
      { title: "Inspection visuelle", desc: "Examen de l'état général de la prothèse et identification des zones à traiter." },
      { title: "Nettoyage aux ultrasons", desc: "Utilisation d'un appareil à ultrasons pour déloger les dépôts de tartre et les bactéries tenaces." },
      { title: "Polissage professionnel", desc: "Polissage à l'aide de produits appropriés pour restaurer la brillance et fixer les surfaces." },
      { title: "Désinfection complète", desc: "Désinfection en profondeur pour éliminer toutes les bactéries et champignons." },
      { title: "Conseils d'entretien", desc: "Recommandations personnalisées pour maintenir votre prothèse propre entre les visites." },
    ],
    infoTitle: "Informations pratiques",
    infoItems: [
      { label: "Durée de la visite", value: "20 à 40 minutes" },
      { label: "Fréquence recommandée", value: "1 à 2 fois par an" },
      { label: "Couverte par assurance", value: "Souvent couverte" },
    ],
    faqs: [
      { q: "À quelle fréquence faire nettoyer ma prothèse?", a: "Nous recommandons un nettoyage professionnel au moins une fois par an, idéalement deux fois." },
      { q: "Le nettoyage aux ultrasons abîme-t-il la prothèse?", a: "Non, la technique aux ultrasons est douce et efficace. Elle n'endommage pas les matériaux lorsqu'elle est réalisée par un professionnel qualifié." },
      { q: "Mon assurance couvre-t-elle le nettoyage professionnel?", a: "Plusieurs assurances couvrent le nettoyage et l'entretien de prothèses dentaires. Vérifiez votre contrat ou contactez-nous." },
    ],
  },
  "examen": {
    title: "Examen de routine",
    subtitle: "La prévention, clé d'une santé buccale durable.",
    description: "Un examen annuel permet de détecter précocement tout problème lié à votre prothèse. C'est un investissement simple qui peut vous éviter des complications coûteuses à long terme.",
    image: imgExamen,
    steps: [
      { title: "Anamnèse et discussion", desc: "Revue de votre historique et discussion de tout inconfort ou changement depuis la dernière visite." },
      { title: "Examen des tissus buccaux", desc: "Évaluation des gencives, des muqueuses et des os sous-jacents pour détecter toute anomalie." },
      { title: "Évaluation de la prothèse", desc: "Vérification de l'ajustement, de la stabilité, de l'occlusion et de l'état général de la prothèse." },
      { title: "Dépistage oral", desc: "Examen visuel des tissus mous pour le dépistage précoce de lésions ou pathologies." },
      { title: "Recommandations et plan", desc: "Rapport complet et recommandations personnalisées pour maintenir votre santé buccale." },
    ],
    infoTitle: "Informations pratiques",
    infoItems: [
      { label: "Durée de la visite", value: "45 à 60 minutes" },
      { label: "Fréquence recommandée", value: "1 fois par an" },
      { label: "Couverture assurance", value: "Généralement couverte" },
    ],
    faqs: [
      { q: "À quelle fréquence passer un examen de routine?", a: "Nous recommandons un examen complet une fois par an. Pour les prothèses récentes, un suivi plus fréquent peut être conseillé." },
      { q: "L'examen est-il douloureux?", a: "Non, l'examen de routine est totalement indolore. Il s'agit d'une évaluation visuelle et manuelle douce." },
      { q: "Que se passe-t-il si un problème est détecté?", a: "Samuel Agoua vous explique clairement la situation, les options de traitement et les délais. Vous repartez avec un plan clair et transparent." },
    ],
  },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e8e4e4] rounded-[12px] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-[#1e1d24] text-[15px] pr-4" style={{ ...font, fontWeight: 500 }}>{q}</span>
        {open ? <Minus size={20} className="text-[#00a8b2] shrink-0" /> : <Plus size={20} className="text-[#00a8b2] shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-[#6b6667] text-[14px] leading-[23.1px]" style={font}>{a}</p>
        </div>
      )}
    </div>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const data = servicesData[slug || ""];

  if (!data) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-20 text-center">
        <h1 className="text-[32px] text-[#1e1d24]" style={font}>Service non trouvé</h1>
        <Link to="/services" className="text-[#00a8b2] mt-4 inline-block" style={font}>Retour aux services</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(119deg, #e8f5f7 0%, #fff 100%)" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[60px] lg:py-[80px]">
          <Link to="/services" className="flex items-center gap-1.5 text-[#6b6667] text-[13px] no-underline mb-6 hover:text-[#1e1d24]" style={font}>
            <ChevronLeft size={16} /> Tous les services
          </Link>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-center">
            <div className="flex-1 flex flex-col gap-4">
              <SectionLabel text="Service" />
              <h1 className="text-[#1e1d24] text-[32px] sm:text-[42px] leading-[1.15]" style={{ ...font, fontWeight: 500 }}>{data.title}</h1>
              <p className="text-[#6b6667] text-[16px] leading-[27.4px] italic" style={font}>{data.subtitle}</p>
              <p className="text-[#6b6667] text-[16px] leading-[27.4px]" style={font}>{data.description}</p>
              <Link to="/contact" className="bg-[#00a8b2] text-white px-8 py-[15px] rounded-[9px] text-[14px] no-underline hover:bg-[#009099] transition-colors self-start mt-2" style={{ ...font, fontWeight: 500 }}>
                Prendre rendez-vous
              </Link>
            </div>
            <div className="flex-1 w-full">
              <img src={data.image} alt={data.title} className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-[20px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps + Info */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[60px] lg:py-[80px]">
          <h2 className="text-[#1e1d24] text-[28px]" style={{ ...font, fontWeight: 500 }}>Comment se déroule le traitement?</h2>
          <p className="text-[#6b6667] text-[16px] mt-2 mb-10" style={font}>Voici les étapes clés de votre prise en charge.</p>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-4">
              {data.steps.map((step, i) => (
                <div key={step.title} className="flex gap-4 items-start bg-[#f8f8f8] rounded-[12px] p-5">
                  <div className="w-8 h-8 rounded-full bg-[#00a8b2] text-white flex items-center justify-center shrink-0 text-[13px]" style={{ ...font, fontWeight: 700 }}>{i + 1}</div>
                  <div>
                    <p className="text-[#1e1d24] text-[15px] mb-1" style={{ ...font, fontWeight: 600 }}>{step.title}</p>
                    <p className="text-[#6b6667] text-[13px] leading-[20px]" style={font}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:w-[380px] shrink-0">
              <div className="bg-[#1e1d24] rounded-[20px] p-8 sticky top-[100px]">
                <h3 className="text-white text-[20px] mb-6" style={{ ...font, fontWeight: 600 }}>{data.infoTitle}</h3>
                <div className="flex flex-col gap-4">
                  {data.infoItems.map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-[rgba(255,255,255,0.1)] pb-3">
                      <span className="text-[rgba(255,255,255,0.6)] text-[13px]" style={font}>{item.label}</span>
                      <span className="text-[#00a8b2] text-[14px]" style={{ ...font, fontWeight: 500 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="block w-full bg-[#00a8b2] text-white text-center py-4 rounded-[12px] mt-8 no-underline text-[15px] hover:bg-[#009099] transition-colors" style={{ ...font, fontWeight: 600 }}>
                  Réserver maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f8f8]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-[60px] lg:py-[80px]">
          <div className="text-center mb-10">
            <SectionLabel text="FAQ" center />
            <h2 className="text-[#1e1d24] text-[28px] sm:text-[32px] mt-4" style={{ ...font, fontWeight: 500 }}>Questions fréquentes</h2>
          </div>
          <div className="flex flex-col gap-4">
            {data.faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
