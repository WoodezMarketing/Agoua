import svgPaths from "./svg-behsk42hp7";
import imgDivAboutPhotoBg from "figma:asset/e8ee979c7b6444fc91c6be01d28556c663030a0f.png";
import imgBefore from "figma:asset/43f2cd2cdab96a8a1172f45fa86c17b565f777bd.png";

function DivAboutPhotoIllustration() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="div.about-photo-illustration" />;
}

function DivAboutPhotoBg() {
  return (
    <div className="absolute content-stretch flex inset-0 items-end justify-center overflow-clip rounded-[24px]" data-name="div.about-photo-bg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgDivAboutPhotoBg} />
      <DivAboutPhotoIllustration />
    </div>
  );
}

function DivCredentialIcon() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-name="div.credential-icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 2">
        <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p1fad7000} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[53.71%_29.17%_8.33%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-10.98%_-13.44%_-21.65%_-13.44%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5727 10.0688">
              <path d={svgPaths.p3cae0c00} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[95px]" data-name="div">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">Membre certifié</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">ODQ · Québec</p>
        </div>
      </div>
    </div>
  );
}

function DivAboutCredentialCard() {
  return (
    <div className="absolute bg-white bottom-[-20px] content-stretch flex gap-[14px] items-center px-[24px] py-[20px] right-[-20.72px] rounded-[16px] shadow-[0px_8px_24px_0px_rgba(35,31,32,0.12)]" data-name="div.about-credential-card">
      <DivCredentialIcon />
      <Div />
    </div>
  );
}

function DivAboutPhoto() {
  return (
    <div className="flex-[1_0_0] h-[560px] min-h-px min-w-px relative" data-name="div.about-photo">
      <DivAboutPhotoBg />
      <div className="absolute bg-[#00a8b2] opacity-15 right-[-20px] rounded-[20px] size-[120px] top-[-20px]" data-name="div.about-photo-deco" />
      <DivAboutCredentialCard />
    </div>
  );
}

function DivSectionLabel() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div.section-label">
      <div className="bg-[#00a8b2] h-[2px] rounded-[2px] shrink-0 w-[24px]" data-name="::before" />
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">À propos</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.665px] relative shrink-0 w-full" data-name="h1">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[50.4px] w-full">
        <p className="leading-[55.44px] mb-0">Rencontrez</p>
        <p className="leading-[55.44px]">Samuel Agoua</p>
      </div>
    </div>
  );
}

function PLead() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8.79px] relative shrink-0 w-full" data-name="p.lead">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[18px] w-full">
        <p className="leading-[30.6px] mb-0">Denturologiste passionné, Samuel Agoua a fondé sa clinique avec</p>
        <p className="leading-[30.6px] mb-0">une conviction profonde : chaque patient mérite des soins</p>
        <p className="leading-[30.6px]">prothétiques à la hauteur de ses besoins et de son sourire.</p>
      </div>
    </div>
  );
}

function DivHighlightItem() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-0 p-[21px] right-[288px] rounded-[16px] top-0" data-name="div.highlight-item">
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[28px] w-full">
            <p className="leading-[28px]">15+</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] w-full">
            <p className="leading-[normal]">{`Années d'expérience clinique`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivHighlightItem1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[288px] p-[21px] right-0 rounded-[16px] top-0" data-name="div.highlight-item">
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[28px] w-full">
            <p className="leading-[28px]">2 000+</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] w-full">
            <p className="leading-[normal]">Patients traités avec succès</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivHighlightItem2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-0 p-[21px] right-[288px] rounded-[16px] top-[109px]" data-name="div.highlight-item">
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[28px] w-full">
            <p className="leading-[28px]">D.D.</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] w-full">
            <p className="leading-[normal]">Diplôme en denturologie</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivHighlightItem3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-start left-[288px] p-[21px] right-0 rounded-[16px] top-[109px]" data-name="div.highlight-item">
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[28px] w-full">
            <p className="leading-[28px]">OPDQ</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Component 6">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] w-full">
            <p className="leading-[normal]">Membre en règle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivAboutHighlights() {
  return (
    <div className="h-[226.8px] relative shrink-0 w-full" data-name="div.about-highlights">
      <DivHighlightItem />
      <DivHighlightItem1 />
      <DivHighlightItem2 />
      <DivHighlightItem3 />
    </div>
  );
}

function DivAboutContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15.2px] items-start min-h-px min-w-px relative" data-name="div.about-content">
      <DivSectionLabel />
      <H />
      <PLead />
      <DivAboutHighlights />
    </div>
  );
}

function DivAboutHeroInner() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-center max-w-[1200px] relative shrink-0 w-full" data-name="div.about-hero-inner">
      <DivAboutPhoto />
      <DivAboutContent />
    </div>
  );
}

function DivAboutHero() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[80px] pt-[140px] px-[120px] right-0 top-0" data-name="div.about-hero">
      <DivAboutHeroInner />
    </div>
  );
}

function DivSectionLabel1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div.section-label">
      <div className="bg-[#00a8b2] h-[2px] rounded-[2px] shrink-0 w-[24px]" data-name="::before" />
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Navigation</p>
      </div>
    </div>
  );
}

function DivAboutSectionNav() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div.about-section-nav">
      <div className="bg-[rgba(0,168,178,0.1)] relative rounded-[10px] shrink-0 w-full" data-name="Component 6">
        <div aria-hidden="true" className="absolute border-[#00a8b2] border-l-2 border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="content-stretch flex flex-col items-start pl-[18px] pr-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">Mon parcours</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[10px] shrink-0 w-full" data-name="Component 6">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="content-stretch flex flex-col items-start pl-[18px] pr-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">Ma philosophie</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[10px] shrink-0 w-full" data-name="Component 6">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="content-stretch flex flex-col items-start pl-[18px] pr-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">Mes valeurs</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[10px] shrink-0 w-full" data-name="Component 6">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="content-stretch flex flex-col items-start pl-[18px] pr-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">La clinique</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivAboutNavSticky() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start shrink-0 sticky top-0 w-[373.33px]" data-name="div.about-nav-sticky">
      <DivSectionLabel1 />
      <DivAboutSectionNav />
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[746.67px]" data-name="h2">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[26px] whitespace-nowrap">
        <p className="leading-[normal]">Mon parcours</p>
      </div>
    </div>
  );
}

function DivTimelineYear() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.timeline-year">
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[0.72px] uppercase w-full">
        <p className="leading-[normal]">Doctorat</p>
      </div>
    </div>
  );
}

function Before() {
  return (
    <div className="absolute bg-[#00a8b2] left-[-28px] rounded-[7px] size-[14px] top-[5px]" data-name="::before">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[7px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[7px] shadow-[0px_0px_0px_2px_#00a8b2] size-[14px] top-0" data-name="::before:shadow" />
    </div>
  );
}

function DivTimelineItem() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[32px] relative shrink-0 w-full" data-name="div.timeline-item">
      <DivTimelineYear />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] w-full">
          <p className="leading-[normal]">Doctorat en odonto-stomatologie</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] w-full">
          <p className="leading-[22.4px]">Formation complétée en Côte d’Ivoire, marquant le début de son parcours en santé bucco-dentaire.</p>
        </div>
      </div>
      <Before />
    </div>
  );
}

function DivTimelineYear1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.timeline-year">
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[0.72px] uppercase w-full">
        <p className="leading-[normal]">Expérience professionnelle</p>
      </div>
    </div>
  );
}

function Before1() {
  return (
    <div className="absolute bg-[#00a8b2] left-[-28px] rounded-[7px] size-[14px] top-[5px]" data-name="::before">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[7px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[7px] shadow-[0px_0px_0px_2px_#00a8b2] size-[14px] top-0" data-name="::before:shadow" />
    </div>
  );
}

function DivTimelineItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[32px] relative shrink-0 w-full" data-name="div.timeline-item">
      <DivTimelineYear1 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] w-full">
          <p className="leading-[normal]">Hygiéniste dentaire</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] w-full">
          <p className="leading-[22.4px]">Pratique à Sherbrooke, Montréal et dans la région de la Baie-James auprès de diverses clientèles.</p>
        </div>
      </div>
      <Before1 />
    </div>
  );
}

function DivTimelineYear2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.timeline-year">
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[0.72px] uppercase w-full">
        <p className="leading-[normal]">Spécialisation</p>
      </div>
    </div>
  );
}

function Before2() {
  return (
    <div className="absolute bg-[#00a8b2] left-[-28px] rounded-[7px] size-[14px] top-[5px]" data-name="::before">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[7px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[7px] shadow-[0px_0px_0px_2px_#2b8b97] size-[14px] top-0" data-name="::before:shadow" />
    </div>
  );
}

function DivTimelineItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[32px] relative shrink-0 w-full" data-name="div.timeline-item">
      <DivTimelineYear2 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] w-full">
          <p className="leading-[normal]">Diplôme en denturologie</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] w-full">
          <p className="leading-[22.4px]">Obtention du diplôme et transition vers une pratique spécialisée en denturologie.</p>
        </div>
      </div>
      <Before2 />
    </div>
  );
}

function DivTimelineYear3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.timeline-year">
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[0.72px] uppercase w-full">
        <p className="leading-[normal]">Aujourd’hui</p>
      </div>
    </div>
  );
}

function Before3() {
  return (
    <div className="absolute bg-[#00a8b2] left-[-28px] rounded-[7px] size-[14px] top-[5px]" data-name="::before">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[7px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[7px] shadow-[0px_0px_0px_2px_#2b8b97] size-[14px] top-0" data-name="::before:shadow" />
    </div>
  );
}

function DivTimelineItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[32px] relative shrink-0 w-full" data-name="div.timeline-item">
      <DivTimelineYear3 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] w-full">
          <p className="leading-[normal]">Pratique clinique</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] w-full">
          <p className="leading-[22.4px]">Travaille principalement à la clinique du Carrefour à Sherbrooke et auprès des communautés cries de la Baie-James.</p>
        </div>
      </div>
      <Before3 />
    </div>
  );
}

function DivTimelineYear4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.timeline-year">
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[0.72px] uppercase w-full">
        <p className="leading-[normal]">Reconnaissance professionnelle</p>
      </div>
    </div>
  );
}

function Before4() {
  return (
    <div className="absolute bg-[#00a8b2] left-[-28px] rounded-[7px] size-[14px] top-[5px]" data-name="::before">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[7px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[7px] shadow-[0px_0px_0px_2px_#00a8b2] size-[14px] top-0" data-name="::before:shadow" />
    </div>
  );
}

function DivTimelineItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[32px] relative shrink-0 w-full" data-name="div.timeline-item">
      <DivTimelineYear4 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] w-full">
          <p className="leading-[normal]">Membre d’associations professionnelles</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] w-full">
          <p className="leading-[22.4px]">Membre de l’Ordre des denturologistes du Québec (ODQ), de l’Association des denturologistes du Québec (ADQ) et de l’Association des denturologistes du Canada (DAC).</p>
        </div>
      </div>
      <Before4 />
    </div>
  );
}

function DivTimeline() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0 w-[746.67px]" data-name="div.timeline">
      <div className="absolute bottom-[8px] left-[9.67px] top-[8px] w-[3px]" data-name="::before">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBefore} />
      </div>
      <DivTimelineItem />
      <DivTimelineItem1 />
      <DivTimelineItem2 />
      <DivTimelineItem3 />
      <DivTimelineItem4 />
    </div>
  );
}

function DivSectionParcours() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="div#section-parcours">
      <H1 />
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3a3637] text-[16px] w-[min-content]">
        <p className="leading-[28px] mb-[20px]">Originaire de la Côte d’Ivoire, Samuel Agoua a toujours été animé par une passion pour les sciences de la santé et le désir d’aider les autres. Il a obtenu son doctorat en odonto-stomatologie, avant de poursuivre son parcours au Québec afin d’approfondir ses compétences et d’adapter sa pratique aux standards d’ici.</p>
        <p className="leading-[28px]">Il a ensuite obtenu son diplôme en hygiène dentaire et a exercé pendant plusieurs années comme hygiéniste à Sherbrooke, à Montréal ainsi que dans la région de la Baie-James, développant une approche humaine et une solide expérience auprès de diverses clientèles.</p>
      </div>
      <DivTimeline />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[41px]" data-name="h2">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[26px] whitespace-nowrap">
        <p className="leading-[normal]">Ma philosophie de soins</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[95px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[16px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">{`Pour Samuel Agoua, la denturologie va bien au-delà de la fabrication d'une prothèse. Il s'agit de`}</p>
        <p className="leading-[28px]">redonner à chaque patient sa confiance, sa capacité à sourire, à manger, et à parler sans gêne.</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[167px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[0px] whitespace-nowrap">
        <p className="mb-0 text-[16px]">
          <span className="font-['Rethink_Sans:Regular',sans-serif] leading-[28px]">{`Sa philosophie repose sur trois piliers : `}</span>
          <span className="font-['Rethink_Sans:Bold',sans-serif] leading-[28px]">{`l'écoute`}</span>
          <span className="font-['Rethink_Sans:Regular',sans-serif] leading-[28px]">{` d'abord, pour comprendre chaque situation unique;`}</span>
        </p>
        <p className="mb-0 text-[16px]">
          <span className="font-['Rethink_Sans:Bold',sans-serif] leading-[28px]">la précision</span>
          <span className="font-['Rethink_Sans:Regular',sans-serif] leading-[28px]">{`, pour garantir un résultat clinique optimal; et `}</span>
          <span className="font-['Rethink_Sans:Bold',sans-serif] leading-[28px]">le suivi</span>
          <span className="font-['Rethink_Sans:Regular',sans-serif] leading-[28px]">{`, parce qu'une prothèse est un`}</span>
        </p>
        <p className="leading-[28px] text-[16px]">engagement à long terme.</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[267px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[16px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Il croit fermement que chaque patient mérite une explication claire à chaque étape du traitement.</p>
        <p className="leading-[28px]">Aucune surprise, aucun jargon inutile — juste une communication franche et bienveillante.</p>
      </div>
    </div>
  );
}

function DivSectionPhilosophie() {
  return (
    <div className="h-[339px] relative shrink-0 w-full" data-name="div#section-philosophie">
      <div aria-hidden="true" className="absolute border-[#e8e4e4] border-solid border-t inset-0 pointer-events-none" />
      <H2 />
      <P />
      <P1 />
      <P2 />
    </div>
  );
}

function H3() {
  return (
    <div className="relative shrink-0 w-full" data-name="h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[26px] w-full">
          <p className="leading-[normal]">Mes valeurs</p>
        </div>
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="relative shrink-0 w-full" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[16px] w-full">
          <p className="leading-[28px]">Ces quatre valeurs guident chaque décision clinique et chaque interaction avec les patients.</p>
        </div>
      </div>
    </div>
  );
}

function DivValueCardIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[24px]" data-name="div.value-card-icon">
      <div className="relative shrink-0 size-[21px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <path d={svgPaths.p43acf00} fill="var(--fill-0, #00A8B2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function H4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[67px]" data-name="h4">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Humanité</p>
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.695px] right-[24px] top-[93.89px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] whitespace-nowrap">
        <p className="leading-[20.8px] mb-0">Chaque patient est accueilli avec respect, empathie</p>
        <p className="leading-[20.8px]">et une attention sincère à son bien-être.</p>
      </div>
    </div>
  );
}

function DivValueCard() {
  return (
    <div className="absolute bg-[rgba(0,168,178,0.1)] h-[160.59px] left-0 right-[381.34px] rounded-[16px] top-0" data-name="div.value-card">
      <DivValueCardIcon />
      <H4 />
      <P4 />
    </div>
  );
}

function DivValueCardIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[24px]" data-name="div.value-card-icon">
      <div className="h-[23px] relative shrink-0 w-[22px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 23">
          <path d={svgPaths.p171d6480} fill="var(--fill-0, #00A8B2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function H5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[67px]" data-name="h4">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Excellence</p>
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.695px] right-[24px] top-[93.89px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] whitespace-nowrap">
        <p className="leading-[20.8px] mb-0">Des matériaux de qualité supérieure, une technique</p>
        <p className="leading-[20.8px]">rigoureuse et une formation continue permanente.</p>
      </div>
    </div>
  );
}

function DivValueCard1() {
  return (
    <div className="absolute bg-[rgba(0,168,178,0.1)] h-[160.59px] left-[381.33px] right-0 rounded-[16px] top-0" data-name="div.value-card">
      <DivValueCardIcon1 />
      <H5 />
      <P5 />
    </div>
  );
}

function DivValueCardIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[24px]" data-name="div.value-card-icon">
      <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
          <path d={svgPaths.p3eab7e80} fill="var(--fill-0, #00A8B2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function H6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[67px]" data-name="h4">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Transparence</p>
      </div>
    </div>
  );
}

function P6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.69px] right-[24px] top-[93.9px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] whitespace-nowrap">
        <p className="leading-[20.8px] mb-0">Des explications claires, des coûts annoncés à</p>
        <p className="leading-[20.8px]">{`l'avance et aucune mauvaise surprise.`}</p>
      </div>
    </div>
  );
}

function DivValueCard2() {
  return (
    <div className="absolute bg-[rgba(0,168,178,0.1)] h-[160.59px] left-0 right-[381.34px] rounded-[16px] top-[176.59px]" data-name="div.value-card">
      <DivValueCardIcon2 />
      <H6 />
      <P6 />
    </div>
  );
}

function DivValueCardIcon3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[24px]" data-name="div.value-card-icon">
      <div className="h-[22px] relative shrink-0 w-[20px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <path d={svgPaths.p1d7b2680} fill="var(--fill-0, #00A8B2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function H7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[67px]" data-name="h4">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Continuité</p>
      </div>
    </div>
  );
}

function P7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.69px] right-[24px] top-[93.9px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] whitespace-nowrap">
        <p className="leading-[20.8px] mb-0">Un suivi rigoureux après chaque traitement pour</p>
        <p className="leading-[20.8px]">assurer votre confort à long terme.</p>
      </div>
    </div>
  );
}

function DivValueCard3() {
  return (
    <div className="absolute bg-[rgba(0,168,178,0.1)] h-[160.59px] left-[381.33px] right-0 rounded-[16px] top-[176.59px]" data-name="div.value-card">
      <DivValueCardIcon3 />
      <H7 />
      <P7 />
    </div>
  );
}

function DivValuesGrid() {
  return (
    <div className="h-[341.19px] relative shrink-0 w-full" data-name="div.values-grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivValueCard />
        <DivValueCard1 />
        <DivValueCard2 />
        <DivValueCard3 />
      </div>
    </div>
  );
}

function DivSectionValeurs() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[41px] relative shrink-0 w-full" data-name="div#section-valeurs">
      <div aria-hidden="true" className="absolute border-[#e8e4e4] border-solid border-t inset-0 pointer-events-none" />
      <H3 />
      <P3 />
      <DivValuesGrid />
    </div>
  );
}

function P8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[746.67px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[16px] whitespace-nowrap">
        <p className="leading-[28px]">{`Horaires d'ouverture :`}</p>
      </div>
    </div>
  );
}

function P9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[746.67px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[16px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Lundi au jeudi : 9h00 – 16h00</p>
        <p className="leading-[28px] mb-0">vendredi : 9h00 – 13h00</p>
        <p className="leading-[28px]">Samedi et dimanche : Fermé</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[746.67px]" data-name="div">
      <div className="bg-[#00a8b2] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[12px] shrink-0" data-name="Component 1">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">Prendre rendez-vous</p>
        </div>
      </div>
    </div>
  );
}

function DivSectionClinique() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="div#section-clinique">
      <div aria-hidden="true" className="absolute border-[#e8e4e4] border-solid border-t inset-0 pointer-events-none" />
      <P8 />
      <P9 />
      <Div1 />
    </div>
  );
}

function DivAboutSections() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-[746.67px]" data-name="div.about-sections">
      <DivSectionParcours />
      <DivSectionPhilosophie />
      <DivSectionValeurs />
      <DivSectionClinique />
    </div>
  );
}

function DivAboutDetailsInner() {
  return (
    <div className="absolute content-stretch flex gap-[80px] items-start justify-center left-[120px] max-w-[1200px] right-[120px] top-[810px]" data-name="div.about-details-inner">
      <DivAboutNavSticky />
      <DivAboutSections />
    </div>
  );
}

function DivPageAbout() {
  return (
    <div className="absolute h-[3227px] left-0 right-0 top-[73px]" data-name="div#page-about">
      <DivAboutHero />
      <DivAboutDetailsInner />
    </div>
  );
}

function H8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2">
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfdfd] text-[40px] text-center w-[318px]">
        <p className="leading-[48px]">Prêt à retrouver votre sourire?</p>
      </div>
    </div>
  );
}

function P10() {
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
    <div className="absolute bg-[#00a8b2] content-stretch flex flex-col gap-[16px] items-center left-0 overflow-clip px-[40px] py-[80px] top-[3033px] w-[1440px]" data-name="CTA Banner">
      <div className="absolute bg-[rgba(255,255,255,0.05)] left-[-100px] rounded-[200px] size-[400px] top-[-100px]" data-name="::before" />
      <div className="absolute bg-[rgba(255,255,255,0.05)] bottom-[-150px] right-[-100px] rounded-[250px] size-[500px]" data-name="::after" />
      <H8 />
      <P10 />
      <div className="bg-[#fcfdfd] content-stretch flex flex-col items-center justify-center px-[42px] py-[15px] relative rounded-[9px] shrink-0" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[9px]" />
        <div className="flex flex-col font-['Helvena:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.6px]">Réserver une consultation</p>
        </div>
      </div>
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

function Div2() {
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

function H9() {
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

function Div3() {
  return (
    <div className="relative shrink-0 w-[185.45px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[33.39px] relative w-full">
        <H9 />
        <UlFooterLinks />
      </div>
    </div>
  );
}

function H10() {
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

function Div4() {
  return (
    <div className="relative shrink-0 w-[185.45px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[66.39px] relative w-full">
        <H10 />
        <UlFooterLinks1 />
      </div>
    </div>
  );
}

function H11() {
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

function Div5() {
  return (
    <div className="h-[189.39px] relative shrink-0 w-[278.19px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <H11 />
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
      <Div2 />
      <Div3 />
      <Div4 />
      <Div5 />
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
              <path d={svgPaths.p3493c6f0} fill="#00A8B2" />
              <path d={svgPaths.p3f9bd180} fill="var(--fill-0, #1E1D24)" />
              <path d={svgPaths.p61bfa00} fill="var(--fill-0, #1E1D24)" />
              <path d={svgPaths.p17ede70} fill="var(--fill-0, #1E1D24)" />
              <path d={svgPaths.p34b0b600} fill="var(--fill-0, #1E1D24)" />
              <path d={svgPaths.p9683900} fill="var(--fill-0, #1E1D24)" />
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

export default function APropos1440Px() {
  return (
    <div className="relative size-full" data-name="À propos - 1440px" style={{ backgroundImage: "linear-gradient(101.467deg, rgb(232, 245, 247) 0%, rgb(250, 250, 250) 60%)" }}>
      <DivPageAbout />
      <CtaBanner />
      <div className="absolute bg-[#1e1d24] content-stretch flex flex-col items-center left-0 pb-[40px] pt-[80px] px-[120px] right-0 top-[3426px]" data-name="Footer">
        <DivFooterGrid />
        <DivFooterBottom />
      </div>
      <Navigation />
    </div>
  );
}