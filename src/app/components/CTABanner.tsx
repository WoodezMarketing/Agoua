import { Link } from "react-router";

export function CTABanner() {
  return (
    <section className="bg-[#00a8b2] relative overflow-hidden px-6 py-[80px]">
      <div className="absolute bg-[rgba(255,255,255,0.05)] left-[-100px] top-[-100px] rounded-full w-[400px] h-[400px]" />
      <div className="absolute bg-[rgba(255,255,255,0.05)] bottom-[-150px] right-[-100px] rounded-full w-[500px] h-[500px]" />
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h2 className="text-white text-[32px] sm:text-[40px] leading-[1.2] max-w-[400px]" style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 600 }}>
          Prêt à retrouver votre sourire?
        </h2>
        <p className="text-[#dfdfdf] text-[16px] leading-[27.4px] pb-2" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
          {`Prenez rendez-vous dès aujourd'hui avec Samuel Agoua.`}
        </p>
        <Link
          to="/contact"
          className="bg-white text-[#00a8b2] px-[42px] py-[15px] rounded-[9px] text-[14px] no-underline border border-[#dfdfdf] hover:bg-gray-50 transition-colors"
          style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 700 }}
        >
          Réserver une consultation
        </Link>
      </div>
    </section>
  );
}
