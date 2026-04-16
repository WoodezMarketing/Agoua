import svgPaths from "./svg-u135hoolwc";
import imgRectangle1 from "figma:asset/36d3633ecd8f2ac6f3ac53e1269c405805cbf002.png";
import imgDivWhyInnerContent from "figma:asset/e8ee979c7b6444fc91c6be01d28556c663030a0f.png";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #00A8B2)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Denturologiste certifié · Sherbrooke</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="bg-[#00a8b2] content-stretch flex flex-col items-center justify-center px-[32px] py-[15px] relative rounded-[9px] shrink-0" data-name="Component 2">
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[22.6px]">Prendre rendez-vous</p>
        </div>
      </div>
      <div className="bg-[#fcfdfd] content-stretch flex flex-col items-center justify-center px-[32px] py-[15px] relative rounded-[9px] shrink-0" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[9px]" />
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.6px]">Nos services</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 />
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e1d24] text-[64px] w-[min-content]">
        <p className="leading-[72px]">Votre sourire, l’expertise Agoua</p>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6667] text-[16px] w-[min-content]">
        <p className="leading-[27.4px]">{`Samuel Agoua offre des soins prothétiques personnalisés dans un environnement chaleureux et professionnel. De la conception à l'ajustement, le confort du patient est sa priorité.`}</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4px] items-start justify-center justify-self-stretch leading-[0] not-italic relative row-1 self-start shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center relative shrink-0 text-[#1e1d24] text-[48px]">
        <p className="leading-[52.8px]">15+</p>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center relative shrink-0 text-[#6b6667] text-[16px]">
        <p className="leading-[27.4px]">Années d’expérience</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[4px] items-start justify-center justify-self-stretch leading-[0] not-italic relative row-1 self-start shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center relative shrink-0 text-[#1e1d24] text-[48px]">
        <p className="leading-[52.8px]">2K+</p>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center relative shrink-0 text-[#6b6667] text-[16px]">
        <p className="leading-[27.4px]">Patients satisfaits</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[4px] items-start justify-center justify-self-stretch leading-[0] not-italic relative row-1 self-start shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center relative shrink-0 text-[#1e1d24] text-[48px]">
        <p className="leading-[52.8px]">3</p>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center relative shrink-0 text-[#6b6667] text-[16px]">
        <p className="leading-[27.4px]">Services spécialisées</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="gap-x-[16px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] pt-[42px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-solid border-t inset-0 pointer-events-none" />
      <Frame7 />
      <Frame6 />
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-center pr-[30px] py-[110px] relative w-full">
          <Frame4 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-full items-center min-h-px min-w-px relative">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle1} />
      </div>
      <div className="absolute left-[435px] size-[221.04px] top-[568px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221.04 221.04">
          <g id="Vector">
            <path d={svgPaths.p2e408f80} fill="#00A8B2" />
            <path d={svgPaths.p32ddcc80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b961a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2c39040} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc451c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1718da90} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31526b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b448e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p30a35480} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20634180} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33a2fc00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d834600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1935d300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f62e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e700100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p299ffd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1f201540} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31a34900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ec37500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p17367f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p398e1c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p32752000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p383baac0} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[30px] items-center pb-[70px] pt-[120px] px-[120px] relative w-full">
          <Frame1 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DivTrustItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="div.trust-item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 2">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.34%_-6.25%_-5.59%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.4884">
              <path d={svgPaths.p332e39c0} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfdfd] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">{`Membre de l'ODQ`}</p>
      </div>
    </div>
  );
}

function DivTrustItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="div.trust-item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 2">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
              <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00018 8.33352">
              <path d={svgPaths.p3f502000} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfdfd] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Rendez-vous rapides disponibles</p>
      </div>
    </div>
  );
}

function DivTrustItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="div.trust-item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 2">
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 6.66667">
              <path d={svgPaths.p2db5f180} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
              <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfdfd] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Service personnalisé et humain</p>
      </div>
    </div>
  );
}

function DivTrustItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="div.trust-item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 2">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%_-12.86%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11.1785">
              <path d={svgPaths.p38669a00} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfdfd] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Remboursement assurances accepté</p>
      </div>
    </div>
  );
}

function DivTrustBarInner() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between max-w-[1200px] relative shrink-0 w-full" data-name="div.trust-bar-inner">
      <DivTrustItem />
      <DivTrustItem1 />
      <DivTrustItem2 />
      <DivTrustItem3 />
    </div>
  );
}

function TrustBar() {
  return (
    <div className="bg-[#1e1d24] relative shrink-0 w-full" data-name="Trust Bar">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[120px] py-[28px] relative w-full">
          <DivTrustBarInner />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[#00a8b2] h-[2px] shrink-0 w-[23px]" />
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Les services</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
      <Frame15 />
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[40px] w-[483px]">
        <p className="leading-[48px]">Une expertise complète en prothèses dentaires</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#fcfdfd] content-stretch flex flex-col items-center justify-center px-[32px] py-[15px] relative rounded-[9px] shrink-0" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[9px]" />
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.6px]">Voir tous les services</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full">
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="h3">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">Nouvelle prothèse dentaire</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] w-full">
        <p className="leading-[22.6px]">{`Conception et fabrication d'une prothèse complète ou partielle sur mesure, adaptée parfaitement à l'anatomie du patient.`}</p>
      </div>
    </div>
  );
}

function DivServiceLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div.service-link">
      <div className="flex flex-col font-['Helvena:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">En savoir plus</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 2">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.83px_-8.93%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 1.66667">
              <path d="M0.833333 0.833333H10.1667" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.93%_-25.25%_-8.93%_-17.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67851 11">
              <path d={svgPaths.p1551f880} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function H2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="h3">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">Nettoyage de prothèse</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] w-full">
        <p className="leading-[22.6px]">Nettoyage professionnel aux ultrasons et polissage de la prothèse pour maintenir une hygiène et une longévité optimales.</p>
      </div>
    </div>
  );
}

function DivServiceLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div.service-link">
      <div className="flex flex-col font-['Helvena:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">En savoir plus</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 2">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.83px_-8.93%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 1.66667">
              <path d="M0.833333 0.833333H10.1667" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.93%_-25.25%_-8.93%_-17.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67851 11">
              <path d={svgPaths.p1551f880} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function H3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="h3">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">Examen de routine</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] w-full">
        <p className="leading-[22.6px]">{`Évaluation complète de l'état des prothèses et de la santé des tissus buccaux pour prévenir tout problème à long terme.`}</p>
      </div>
    </div>
  );
}

function DivServiceLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div.service-link">
      <div className="flex flex-col font-['Helvena:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">En savoir plus</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 2">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.83px_-8.93%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 1.66667">
              <path d="M0.833333 0.833333H10.1667" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.93%_-25.25%_-8.93%_-17.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.67851 11">
              <path d={svgPaths.p1551f880} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="gap-x-[16px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
      <div className="bg-[#fcfdfd] col-1 relative rounded-[16px] row-1 self-start shrink-0 w-[384px]" data-name="Component 4">
        <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[37px] py-[41px] relative rounded-[inherit] w-full">
          <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[58px]" data-name="div.service-icon">
            <div className="overflow-clip relative shrink-0 size-[26px]" data-name="Component 2">
              <div className="absolute inset-[8.33%_16.67%_16.67%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5.56%_-6.25%_-6.21%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 21.7945">
                    <path d={svgPaths.p2ab6ad90} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="2.16667" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <H1 />
          <P />
          <DivServiceLink />
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#fcfdfd] col-2 relative rounded-[16px] row-1 self-start shrink-0 w-[384px]" data-name="Component 3">
        <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[37px] py-[41px] relative rounded-[inherit] w-full">
          <div className="bg-[#00a8b2] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[58px]" data-name="div.service-icon">
            <div className="overflow-clip relative shrink-0 size-[26px]" data-name="Component 3">
              <div className="absolute bottom-[8.33%] left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
                <div className="absolute inset-[-10%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 13">
                    <path d={svgPaths.p343e700} id="Vector" stroke="var(--stroke-0, #FCFDFD)" strokeLinecap="round" strokeWidth="2.16667" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-35.36%_-12.5%_-25%_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 6.94873">
                    <path d={svgPaths.p19057b00} id="Vector" stroke="var(--stroke-0, #FCFDFD)" strokeLinecap="round" strokeWidth="2.16667" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-7.69%_-1.08px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 16.25">
                    <path d="M1.08333 1.08333V15.1667" id="Vector" stroke="var(--stroke-0, #FCFDFD)" strokeLinecap="round" strokeWidth="2.16667" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <H2 />
          <P1 />
          <DivServiceLink1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#00a8b2] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#fcfdfd] col-3 relative rounded-[16px] row-1 self-start shrink-0 w-[384px]" data-name="Component 5">
        <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip px-[37px] py-[41px] relative rounded-[inherit] w-full">
          <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[58px]" data-name="div.service-icon">
            <div className="overflow-clip relative shrink-0 size-[26px]" data-name="Component 2">
              <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]" data-name="Vector">
                <div className="absolute inset-[-10%_-7.69%_-14.14%_-7.69%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 13.4487">
                    <path d={svgPaths.p29e55a80} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="2.16667" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-[-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6667 21.6667">
                    <path d={svgPaths.p396e0080} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="2.16667" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <H3 />
          <P2 />
          <DivServiceLink2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[42px] items-start justify-center min-h-px min-w-px relative">
      <Frame13 />
      <Frame17 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[120px] py-[100px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[#00a8b2] h-[2px] shrink-0 w-[23px]" />
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Les services</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame19 />
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[40px] w-[483px]">
        <p className="leading-[48px]">Une expertise complète en prothèses dentaires</p>
      </div>
    </div>
  );
}

function DivCheckBullet() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="div.check-bullet">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Component 2">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-11.36%_-7.81%_-16.07%_-7.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7917 8.17703">
              <path d={svgPaths.p3ef674c0} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivCheckItemText() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.check-item-text">
      <div className="content-stretch flex flex-col gap-[3.5px] items-start leading-[0] not-italic pr-[46.78px] relative w-full">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
          <p className="leading-[normal]">Technologie de pointe</p>
        </div>
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#6b6667] text-[14px] w-[min-content]">
          <p className="leading-[22.6px]">Fabrication en laboratoire accrédité avec des matériaux de haute qualité durables et esthétiques.</p>
        </div>
      </div>
    </div>
  );
}

function LiCheckItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="li.check-item">
      <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="div.check-bullet:margin">
        <DivCheckBullet />
      </div>
      <DivCheckItemText />
    </div>
  );
}

function DivCheckBullet1() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="div.check-bullet">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Component 2">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-11.36%_-7.81%_-16.07%_-7.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7917 8.17703">
              <path d={svgPaths.p3ef674c0} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivCheckItemText1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.check-item-text">
      <div className="content-stretch flex flex-col gap-[3.5px] items-start leading-[0] not-italic pr-[10.08px] relative w-full">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
          <p className="leading-[normal]">Suivi personnalisé</p>
        </div>
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#6b6667] text-[14px] w-[min-content]">
          <p className="leading-[22.6px]">{`Chaque patient bénéficie d'un plan de traitement adapté à sa situation unique et à ses attentes.`}</p>
        </div>
      </div>
    </div>
  );
}

function LiCheckItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="li.check-item">
      <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="div.check-bullet:margin">
        <DivCheckBullet1 />
      </div>
      <DivCheckItemText1 />
    </div>
  );
}

function DivCheckBullet2() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="div.check-bullet">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Component 2">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-11.36%_-7.81%_-16.07%_-7.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7917 8.17703">
              <path d={svgPaths.p3ef674c0} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivCheckItemText2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.check-item-text">
      <div className="content-stretch flex flex-col gap-[3.5px] items-start leading-[0] not-italic pr-[18.7px] relative w-full">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
          <p className="leading-[normal]">Accessibilité financière</p>
        </div>
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#6b6667] text-[14px] w-[min-content]">
          <p className="leading-[22.6px]">Collaboration avec la majorité des assureurs et options de paiement flexibles disponibles.</p>
        </div>
      </div>
    </div>
  );
}

function LiCheckItem2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="li.check-item">
      <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="div.check-bullet:margin">
        <DivCheckBullet2 />
      </div>
      <DivCheckItemText2 />
    </div>
  );
}

function DivCheckBullet3() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="div.check-bullet">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Component 2">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-11.36%_-7.81%_-16.07%_-7.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7917 8.17703">
              <path d={svgPaths.p3ef674c0} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivCheckItemText3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.check-item-text">
      <div className="content-stretch flex flex-col gap-[3.5px] items-start leading-[0] not-italic pr-[14.94px] relative w-full">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
          <p className="leading-[normal]">Environnement rassurant</p>
        </div>
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#6b6667] text-[14px] w-[min-content]">
          <p className="leading-[22.6px]">{`Clinique moderne et accueillante, conçue pour mettre les patients à l'aise dès leur arrivée.`}</p>
        </div>
      </div>
    </div>
  );
}

function LiCheckItem3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="li.check-item">
      <div className="content-stretch flex flex-col h-[26px] items-start pt-[2px] relative shrink-0 w-[24px]" data-name="div.check-bullet:margin">
        <DivCheckBullet3 />
      </div>
      <DivCheckItemText3 />
    </div>
  );
}

function UlCheckList() {
  return (
    <div className="relative shrink-0 w-full" data-name="ul.check-list">
      <div className="content-stretch flex flex-col gap-[20px] items-start pr-[42px] pt-[16.7px] relative w-full">
        <LiCheckItem />
        <LiCheckItem1 />
        <LiCheckItem2 />
        <LiCheckItem3 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15.3px] items-start min-h-px min-w-px relative" data-name="div">
      <Frame18 />
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[16px] w-full">
        <p className="leading-[27.4px]">{`Samuel Agoua allie rigueur clinique et approche profondément humaine pour offrir des soins prothétiques d'exception à chaque patient.`}</p>
      </div>
      <UlCheckList />
    </div>
  );
}

function DivWhyInnerContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.why-inner-content">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDivWhyInnerContent} />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function DivWhyImgBg() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center overflow-clip rounded-[24px]" data-name="div.why-img-bg">
      <DivWhyInnerContent />
    </div>
  );
}

function DivWhyStatCardNum() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.why-stat-card-num">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[24px] w-full">
        <p className="leading-[28px]">98%</p>
      </div>
    </div>
  );
}

function DivWhyStatCardLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.why-stat-card-label">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[12px] w-full">
        <p className="leading-[16.6px]">Taux de satisfaction patients</p>
      </div>
    </div>
  );
}

function DivWhyStatCardNum1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.why-stat-card-num">
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[24px] w-full">
        <p className="leading-[28px]">15+</p>
      </div>
    </div>
  );
}

function DivWhyStatCardLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.why-stat-card-label">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[12px] w-full">
        <p className="leading-[16.6px]">{`Ans d'expertise clinique`}</p>
      </div>
    </div>
  );
}

function DivWhyStatCards() {
  return (
    <div className="absolute bottom-[-24.4px] content-stretch flex flex-col gap-[12px] items-start left-[-24px]" data-name="div.why-stat-cards">
      <div className="bg-[#fcfdfd] content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[20px] relative rounded-[12px] shrink-0 w-[240px]" data-name="div.why-stat-card">
        <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_8px_24px_0px_rgba(35,31,32,0.1)]" />
        <DivWhyStatCardNum />
        <DivWhyStatCardLabel />
      </div>
      <div className="bg-[#fcfdfd] content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[20px] relative rounded-[12px] shrink-0 w-[240px]" data-name="div.why-stat-card">
        <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_8px_24px_0px_rgba(35,31,32,0.1)]" />
        <DivWhyStatCardNum1 />
        <DivWhyStatCardLabel1 />
      </div>
    </div>
  );
}

function DivWhyVisual() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="div.why-visual">
      <DivWhyImgBg />
      <div className="absolute bg-[#00a8b2] opacity-10 right-[-24px] rounded-[24px] size-[200px] top-[-24px]" data-name="div.why-img-deco" />
      <DivWhyStatCards />
    </div>
  );
}

function WhyUs() {
  return (
    <div className="bg-[#f1f1f2] content-stretch flex gap-[80px] h-[778px] items-center justify-center px-[120px] py-[100px] relative shrink-0 w-[1440px]" data-name="Why Us">
      <Div />
      <DivWhyVisual />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[#00a8b2] h-[2px] shrink-0 w-[23px]" />
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Comment ça fonctionne</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame21 />
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfdfd] text-[40px] w-[483px]">
        <p className="leading-[48px]">Un processus simple et transparent</p>
      </div>
    </div>
  );
}

function DivProcessNum() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center left-1/2 p-px rounded-[36px] size-[72px] top-0" data-name="div.process-num">
      <div aria-hidden="true" className="absolute border border-[#00a8b2] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[28px]">01</p>
      </div>
    </div>
  );
}

function H4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[96px]" data-name="h4">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Consultation initiale</p>
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[128.39px]" data-name="p">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f8f] text-[14px] text-center w-full">
        <p className="leading-[22.6px]">{`Évaluation complète des besoins et de la santé buccale du patient lors d'une première rencontre.`}</p>
      </div>
    </div>
  );
}

function DivProcessStep() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.process-step">
      <DivProcessNum />
      <H4 />
      <P3 />
    </div>
  );
}

function DivProcessNum1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center left-1/2 p-px rounded-[36px] size-[72px] top-0" data-name="div.process-num">
      <div aria-hidden="true" className="absolute border border-[#00a8b2] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[28px]">02</p>
      </div>
    </div>
  );
}

function H5() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[96px]" data-name="h4">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Plan de traitement</p>
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[128.39px]" data-name="p">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f8f] text-[14px] text-center w-full">
        <p className="leading-[22.6px]">{`Élaboration d'un plan personnalisé avec options, délais et coûts présentés clairement et sans surprise.`}</p>
      </div>
    </div>
  );
}

function DivProcessStep1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.process-step">
      <DivProcessNum1 />
      <H5 />
      <P4 />
    </div>
  );
}

function DivProcessNum2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center left-1/2 p-px rounded-[36px] size-[72px] top-0" data-name="div.process-num">
      <div aria-hidden="true" className="absolute border border-[#00a8b2] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[28px]">03</p>
      </div>
    </div>
  );
}

function H6() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[96px]" data-name="h4">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Fabrication</p>
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[128.39px]" data-name="p">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f8f] text-[14px] text-center w-full">
        <p className="leading-[22.6px]">Conception et fabrication de la prothèse en laboratoire certifié avec des matériaux premium.</p>
      </div>
    </div>
  );
}

function DivProcessStep2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.process-step">
      <DivProcessNum2 />
      <H6 />
      <P5 />
    </div>
  );
}

function DivProcessNum3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center left-1/2 p-px rounded-[36px] size-[72px] top-0" data-name="div.process-num">
      <div aria-hidden="true" className="absolute border border-[#00a8b2] border-solid inset-0 pointer-events-none rounded-[36px]" />
      <div className="flex flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[28px]">04</p>
      </div>
    </div>
  );
}

function H7() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[96px]" data-name="h4">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[22.4px]">{`Ajustement & suivi`}</p>
      </div>
    </div>
  );
}

function P6() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[128.39px]" data-name="p">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f8f] text-[14px] text-center w-full">
        <p className="leading-[22.6px]">Livraison, ajustements précis et suivi rigoureux pour assurer le confort du patient à long terme.</p>
      </div>
    </div>
  );
}

function DivProcessStep3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="div.process-step">
      <DivProcessNum3 />
      <H7 />
      <P6 />
    </div>
  );
}

function DivProcessGrid() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center pt-[44.7px] relative shrink-0 w-full" data-name="div.process-grid">
      <div className="absolute bg-gradient-to-r from-[rgba(0,168,178,0)] h-px left-[80px] right-[80px] to-[rgba(0,168,178,0.38)] top-[80.7px] via-1/2 via-[rgba(0,168,178,0.4)]" data-name="::before" />
      <DivProcessStep />
      <DivProcessStep1 />
      <DivProcessStep2 />
      <DivProcessStep3 />
    </div>
  );
}

function DivContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[15.3px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="div.container">
      <Frame20 />
      <DivProcessGrid />
    </div>
  );
}

function Process() {
  return (
    <div className="bg-[#1e1d24] content-stretch flex flex-col items-center px-[120px] py-[100px] relative shrink-0 w-[1440px]" data-name="Process">
      <DivContainer />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[#00a8b2] h-[2px] shrink-0 w-[23px]" />
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Témoignages</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame23 />
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[40px] w-[510px]">
        <p className="leading-[48px]">Ce que disent les patients de Samuel Agoua</p>
      </div>
    </div>
  );
}

function SpanStar() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function DivStars() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="div.stars">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <SpanStar />
        <SpanStar1 />
        <SpanStar2 />
        <SpanStar3 />
        <SpanStar4 />
      </div>
    </div>
  );
}

function PTestimonialText() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.testimonial-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.75px] relative w-full">
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] w-full">
          <p className="leading-[22.6px]">{`« M. Agoua est exceptionnel. Ma prothèse s'ajuste parfaitement et je retrouve enfin le plaisir de manger normalement. Son écoute et sa patience m'ont vraiment mis à l'aise. »`}</p>
        </div>
      </div>
    </div>
  );
}

function DivAuthorAvatar() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="div.author-avatar">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">ML</p>
      </div>
    </div>
  );
}

function DivAuthorName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.author-name">
      <div className="flex flex-col font-['Helvena:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Marie-Louise Tremblay</p>
      </div>
    </div>
  );
}

function DivAuthorDetail() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.author-detail">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[12px] whitespace-nowrap">
        <p className="leading-[16.6px]">Patiente depuis 3 ans</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[146px]" data-name="div">
      <DivAuthorName />
      <DivAuthorDetail />
    </div>
  );
}

function DivTestimonialAuthor() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.testimonial-author">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pt-[8.7px] relative w-full">
        <DivAuthorAvatar />
        <Div1 />
      </div>
    </div>
  );
}

function SpanStar5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar7() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function DivStars1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="div.stars">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <SpanStar5 />
        <SpanStar6 />
        <SpanStar7 />
        <SpanStar8 />
        <SpanStar9 />
      </div>
    </div>
  );
}

function PTestimonialText1() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.testimonial-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.75px] relative w-full">
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] w-full">
          <p className="leading-[22.6px]">{`« Clinique très professionnelle. L'équipe est chaleureuse et M. Agoua explique chaque étape clairement. J'aurais aimé découvrir sa clinique bien plus tôt ! »`}</p>
        </div>
      </div>
    </div>
  );
}

function DivAuthorAvatar1() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="div.author-avatar">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">JB</p>
      </div>
    </div>
  );
}

function DivAuthorName1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.author-name">
      <div className="flex flex-col font-['Helvena:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Jean-Pierre Bouchard</p>
      </div>
    </div>
  );
}

function DivAuthorDetail1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.author-detail">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[12px] whitespace-nowrap">
        <p className="leading-[16.6px]">Patient depuis 1 an</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[146px]" data-name="div">
      <DivAuthorName1 />
      <DivAuthorDetail1 />
    </div>
  );
}

function DivTestimonialAuthor1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.testimonial-author">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pt-[8.7px] relative w-full">
        <DivAuthorAvatar1 />
        <Div2 />
      </div>
    </div>
  );
}

function SpanStar10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar12() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar13() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function SpanStar14() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span.star">
      <div className="flex flex-col font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f0ae15] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">★</p>
      </div>
    </div>
  );
}

function DivStars2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="div.stars">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <SpanStar10 />
        <SpanStar11 />
        <SpanStar12 />
        <SpanStar13 />
        <SpanStar14 />
      </div>
    </div>
  );
}

function PTestimonialText2() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.testimonial-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.75px] relative w-full">
        <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#555] text-[14px] w-full">
          <p className="leading-[22.6px]">{`« M. Agoua est exceptionnel. Ma prothèse s'ajuste parfaitement et je retrouve enfin le plaisir de manger normalement. Son écoute et sa patience m'ont vraiment mis à l'aise. »`}</p>
        </div>
      </div>
    </div>
  );
}

function DivAuthorAvatar2() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[22px] shrink-0 size-[44px]" data-name="div.author-avatar">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">SC</p>
      </div>
    </div>
  );
}

function DivAuthorName2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.author-name">
      <div className="flex flex-col font-['Helvena:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Sophie Côté</p>
      </div>
    </div>
  );
}

function DivAuthorDetail2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.author-detail">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[12px] whitespace-nowrap">
        <p className="leading-[16.6px]">Patiente depuis 2 ans</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[146px]" data-name="div">
      <DivAuthorName2 />
      <DivAuthorDetail2 />
    </div>
  );
}

function DivTestimonialAuthor2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.testimonial-author">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center pt-[8.7px] relative w-full">
        <DivAuthorAvatar2 />
        <Div3 />
      </div>
    </div>
  );
}

function DivTestimonialsGrid() {
  return (
    <div className="content-stretch flex gap-[24px] h-[118.7px] items-start justify-center pt-[44.7px] relative shrink-0 w-full" data-name="div.testimonials-grid">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] self-stretch" data-name="Component 5">
        <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="content-stretch flex flex-col gap-[19.3px] items-start p-[37px] relative size-full">
          <DivStars />
          <PTestimonialText />
          <DivTestimonialAuthor />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] self-stretch" data-name="Component 6">
        <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="content-stretch flex flex-col gap-[19.3px] items-start p-[37px] relative size-full">
          <DivStars1 />
          <PTestimonialText1 />
          <DivTestimonialAuthor1 />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] self-stretch" data-name="Component 7">
        <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="content-stretch flex flex-col gap-[19.3px] items-start p-[37px] relative size-full">
          <DivStars2 />
          <PTestimonialText2 />
          <DivTestimonialAuthor2 />
        </div>
      </div>
    </div>
  );
}

function DivContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[15.3px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="div.container">
      <Frame22 />
      <DivTestimonialsGrid />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-[#fcfdfd] content-stretch flex flex-col items-center px-[120px] py-[100px] relative shrink-0 w-[1440px]" data-name="Testimonials">
      <DivContainer1 />
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2">
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfdfd] text-[40px] text-center w-[318px]">
        <p className="leading-[48px]">Prêt à retrouver votre sourire?</p>
      </div>
    </div>
  );
}

function P7() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dfdfdf] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[27.4px]">{`Prenez rendez-vous dès aujourd'hui avec Samuel Agoua.`}</p>
      </div>
    </div>
  );
}

function CtaBanner() {
  return (
    <div className="bg-[#00a8b2] content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[40px] py-[80px] relative shrink-0 w-[1440px]" data-name="CTA Banner">
      <div className="absolute bg-[rgba(255,255,255,0.05)] left-[-100px] rounded-[200px] size-[400px] top-[-100px]" data-name="::before" />
      <div className="absolute bg-[rgba(255,255,255,0.05)] bottom-[-150px] right-[-100px] rounded-[250px] size-[500px]" data-name="::after" />
      <H />
      <P7 />
      <div className="bg-[#fcfdfd] content-stretch flex flex-col items-center justify-center px-[42px] py-[15px] relative rounded-[9px] shrink-0" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[9px]" />
        <div className="flex flex-col font-['Helvena:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.6px]">Réserver une consultation</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4167px] items-start left-0 top-0 w-[1440px]">
      <Frame />
      <TrustBar />
      <Frame11 />
      <WhyUs />
      <Process />
      <Testimonials />
      <CtaBanner />
    </div>
  );
}

function Layer() {
  return (
    <div className="h-[47px] relative shrink-0 w-[49px]" data-name="Layer 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 47.0001">
        <g id="Layer 1">
          <path d={svgPaths.p31890da0} fill="var(--fill-0, #FCFDFD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivFooterLogoWrap() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="div.footer-logo-wrap">
      <Layer />
    </div>
  );
}

function DivFooterBrandName() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[60px]" data-name="div.footer-brand-name">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Samuel Agoua</p>
      </div>
    </div>
  );
}

function DivFooterBrandTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[84px]" data-name="div.footer-brand-title">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.4)] tracking-[0.66px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Denturologiste</p>
      </div>
    </div>
  );
}

function PFooterBrandDesc() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.595px] right-0 top-[116.79px]" data-name="p.footer-brand-desc">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
        <p className="leading-[23.8px] mb-0">Des soins prothétiques personnalisés alliant expertise</p>
        <p className="leading-[23.8px] mb-0">clinique et approche humaine, pour votre confort et</p>
        <p className="leading-[23.8px]">votre bien-être.</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="h-[189.39px] relative shrink-0 w-[370.91px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivFooterLogoWrap />
        <DivFooterBrandName />
        <DivFooterBrandTitle />
        <PFooterBrandDesc />
      </div>
    </div>
  );
}

function H8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.72px] uppercase w-full">
        <p className="leading-[normal]">Navigation</p>
      </div>
    </div>
  );
}

function Li() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2px] relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 5">
        <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.5)]">
          <p className="leading-[normal]">Accueil</p>
        </div>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2px] relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 5">
        <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.5)]">
          <p className="leading-[normal]">À propos</p>
        </div>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2px] relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 5">
        <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.5)]">
          <p className="leading-[normal]">Services</p>
        </div>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2px] relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 5">
        <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.5)]">
          <p className="leading-[normal]">Contact</p>
        </div>
      </div>
    </div>
  );
}

function UlFooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="ul.footer-links">
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
    </div>
  );
}

function Div5() {
  return (
    <div className="relative shrink-0 w-[185.45px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[33.39px] relative w-full">
        <H8 />
        <UlFooterLinks />
      </div>
    </div>
  );
}

function H9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.72px] uppercase w-full">
        <p className="leading-[normal]">Services</p>
      </div>
    </div>
  );
}

function Li4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2px] relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 5">
        <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.5)]">
          <p className="leading-[normal]">Nouvelle prothèse</p>
        </div>
      </div>
    </div>
  );
}

function Li5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2px] relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 5">
        <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.5)]">
          <p className="leading-[normal]">Nettoyage prothèse</p>
        </div>
      </div>
    </div>
  );
}

function Li6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2px] relative shrink-0 w-full" data-name="li">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 5">
        <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.5)]">
          <p className="leading-[normal]">Examen de routine</p>
        </div>
      </div>
    </div>
  );
}

function UlFooterLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="ul.footer-links">
      <Li4 />
      <Li5 />
      <Li6 />
    </div>
  );
}

function Div6() {
  return (
    <div className="relative shrink-0 w-[185.45px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[66.39px] relative w-full">
        <H9 />
        <UlFooterLinks1 />
      </div>
    </div>
  );
}

function H10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="h4">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.72px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Coordonnées</p>
      </div>
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[16px]" data-name="svg:margin">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 2">
        <div className="absolute inset-[4.17%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.55%_-5.56%_-5.46%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.1346">
              <path d={svgPaths.p112ddc70} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
              <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
        <p className="leading-[21px]">
          2910, boul. Portland
          <br aria-hidden="true" />
          Sherbrooke (Québec) J1L 1R8
        </p>
      </div>
    </div>
  );
}

function DivFooterContactItem() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-0 right-0 top-[36px]" data-name="div.footer-contact-item">
      <SvgMargin />
      <Span />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[16px]" data-name="svg:margin">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 2">
        <div className="absolute inset-[10%_8.33%_8.63%_6.75%]" data-name="Vector">
          <div className="absolute inset-[-5.12%_-4.91%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9202 14.3521">
              <path d={svgPaths.p2933ba00} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFooterContactItem1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-0 right-0 top-[94px]" data-name="div.footer-contact-item">
      <SvgMargin1 />
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
        <p className="leading-[21px]">+1 (514) 555-0197</p>
      </div>
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[16px]" data-name="svg:margin">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 2">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-6.25%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12">
              <path d={svgPaths.p3db23b80} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[45.83%] left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-14.29%_-5%_-17.44%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6668 6.14716">
              <path d={svgPaths.p2c1d5100} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFooterContactItem2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-0 right-0 top-[131px]" data-name="div.footer-contact-item">
      <SvgMargin2 />
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
        <p className="leading-[21px]">info@samuelagoua.ca</p>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="h-[189.39px] relative shrink-0 w-[278.19px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <H10 />
        <DivFooterContactItem />
        <DivFooterContactItem1 />
        <DivFooterContactItem2 />
      </div>
    </div>
  );
}

function DivFooterGrid() {
  return (
    <div className="content-stretch flex gap-[60px] items-start justify-center max-w-[1200px] pb-[61px] relative shrink-0 w-full" data-name="div.footer-grid">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Div4 />
      <Div5 />
      <Div6 />
      <Div7 />
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.3)] w-[355px]">
        <p className="leading-[normal]">© 2026 Samuel Agoua Denturologiste. Tous droits réservés.</p>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.3)] whitespace-nowrap">
        <p className="leading-[normal]">{`Membre de l'ODQ`}</p>
      </div>
    </div>
  );
}

function DivFooterBottom() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1200px] pt-[32px] relative shrink-0 w-full" data-name="div.footer-bottom">
      <Span1 />
      <Span2 />
    </div>
  );
}

function Li7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="li">
      <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Component 5">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Accueil</p>
        </div>
      </div>
    </div>
  );
}

function Li8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="li">
      <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Component 5">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">À propos</p>
        </div>
      </div>
    </div>
  );
}

function Li9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="li">
      <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Component 5">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Services</p>
        </div>
      </div>
    </div>
  );
}

function UlNavLinks() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="ul#navLinks">
      <Li7 />
      <Li8 />
      <Li9 />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#00a8b2] h-full relative rounded-[9px] shrink-0" data-name="Component 2">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col h-full items-center justify-center px-[32px] py-[5px] relative">
              <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                <p className="leading-[16.6px]">Prendre rendez-vous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivNavInner() {
  return (
    <div className="h-[72px] max-w-[1200px] relative shrink-0 w-full" data-name="div.nav-inner">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full">
        <div className="h-[40px] relative shrink-0 w-[157px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157 40">
            <g id="Vector">
              <path d={svgPaths.p14439300} fill="#00A8B2" />
              <path d={svgPaths.p3f9bd180} fill="var(--fill-0, #1E1D24)" />
              <path d={svgPaths.p3feabb80} fill="var(--fill-0, #1E1D24)" />
              <path d={svgPaths.p17ede70} fill="var(--fill-0, #1E1D24)" />
              <path d={svgPaths.p34b0b600} fill="var(--fill-0, #1E1D24)" />
              <path d={svgPaths.p3711780} fill="var(--fill-0, #1E1D24)" />
            </g>
          </svg>
        </div>
        <UlNavLinks />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col items-center left-0 pb-px px-[120px] right-0 top-0" data-name="NAVIGATION">
      <div aria-hidden="true" className="absolute border-[#e8e4e4] border-b border-solid inset-0 pointer-events-none shadow-[0px_2px_20px_0px_rgba(35,31,32,0.08)]" />
      <DivNavInner />
    </div>
  );
}

export default function Homepage1440Px() {
  return (
    <div className="bg-[#fcfdfd] relative size-full" data-name="Homepage - 1440px">
      <Frame8 />
      <div className="absolute bg-[#1e1d24] content-stretch flex flex-col items-center left-0 pb-[40px] pt-[80px] px-[120px] right-0 top-[4167px]" data-name="Footer">
        <DivFooterGrid />
        <DivFooterBottom />
      </div>
      <Navigation />
    </div>
  );
}