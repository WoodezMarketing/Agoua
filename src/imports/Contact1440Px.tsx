import svgPaths from "./svg-x2bflxx8t1";

function DivSectionLabel() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-0 right-0 top-0" data-name="div.section-label">
      <div className="bg-[#00a8b2] h-[2px] rounded-[2px] shrink-0 w-[24px]" data-name="::before" />
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Prenez rendez-vous</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[32px]" data-name="h1">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[56px] text-center whitespace-nowrap">
        <p className="leading-[normal] mb-0">Réservez votre</p>
        <p className="leading-[normal]">consultation</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[193.3px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[18px] text-center w-full">
        <p className="leading-[30.6px]">Choisissez le moment qui vous convient. La première consultation est toujours gratuite et sans engagement.</p>
      </div>
    </div>
  );
}

function DivContactHeroInner() {
  return (
    <div className="h-[255.19px] max-w-[600px] relative shrink-0 w-full" data-name="div.contact-hero-inner">
      <DivSectionLabel />
      <H />
      <P />
    </div>
  );
}

function DivContactHero() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[80px] pt-[140px] px-[420px] right-0 top-0" data-name="div.contact-hero" style={{ backgroundImage: "linear-gradient(135deg, rgb(232, 245, 247) 0%, rgb(255, 255, 255) 100%)" }}>
      <DivContactHeroInner />
    </div>
  );
}

function DivContactStripIcon() {
  return (
    <div className="bg-[rgba(43,139,151,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="div.contact-strip-icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Component 2">
        <div className="absolute inset-[4.17%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.55%_-5.56%_-5.46%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 22.185">
              <path d={svgPaths.p1ccc8400} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.83333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33333 7.33333">
              <path d={svgPaths.p18970400} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.83333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivContactStripLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contact-strip-label">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.72px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Adresse</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[206px]" data-name="div">
      <DivContactStripLabel />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
          <p className="leading-[normal]">
            2910, boul. Portland
            <br aria-hidden="true" />
            Sherbrooke (Québec) J1L 1R8
          </p>
        </div>
      </div>
    </div>
  );
}

function DivContactStripItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative self-stretch shrink-0" data-name="div.contact-strip-item">
      <DivContactStripIcon />
      <Div />
    </div>
  );
}

function DivContactStripIcon1() {
  return (
    <div className="bg-[rgba(43,139,151,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="div.contact-strip-icon">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Component 2">
        <div className="absolute inset-[10%_8.33%_8.63%_6.75%]" data-name="Vector">
          <div className="absolute inset-[-5.12%_-4.91%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5152 19.7342">
              <path d={svgPaths.p2173cc80} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.83333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivContactStripLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contact-strip-label">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.72px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Téléphone</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[99px]" data-name="div">
      <DivContactStripLabel1 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white whitespace-nowrap">
          <a className="block cursor-pointer decoration-solid leading-[normal] text-[15px] underline" href="tel:8195631161" target="_blank">
            819 563-1161
          </a>
        </div>
      </div>
    </div>
  );
}

function DivContactStripItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative self-stretch shrink-0" data-name="div.contact-strip-item">
      <DivContactStripIcon1 />
      <Div1 />
    </div>
  );
}

function DivContactStripIcon2() {
  return (
    <div className="bg-[rgba(43,139,151,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="div.contact-strip-icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 2">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.72%_-4.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.83 17.83">
              <path d={svgPaths.p266ccd00} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.83" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[45.83%] left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-13.07%_-4.58%_-15.96%_-4.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8302 9.03198">
              <path d={svgPaths.p3453fd00} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.83" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivContactStripLabel2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.contact-strip-label">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.72px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Courriel</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[242px]" data-name="div">
      <DivContactStripLabel2 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
          <p className="leading-[normal]">contact@agouadenturologiste.com</p>
        </div>
      </div>
    </div>
  );
}

function DivContactStripItem2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative self-stretch shrink-0" data-name="div.contact-strip-item">
      <DivContactStripIcon2 />
      <Div2 />
    </div>
  );
}

function DivContactStripInner() {
  return (
    <div className="content-stretch flex h-[60px] items-start justify-between max-w-[1200px] relative shrink-0 w-full" data-name="div.contact-strip-inner">
      <DivContactStripItem />
      <DivContactStripItem1 />
      <DivContactStripItem2 />
    </div>
  );
}

function DivContactInfoStrip() {
  return (
    <div className="absolute bg-[#1e1d24] content-stretch flex flex-col items-start left-0 px-[120px] py-[32px] right-0 top-[475.19px]" data-name="div.contact-info-strip">
      <DivContactStripInner />
    </div>
  );
}

function DivSectionLabel1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div.section-label">
      <div className="bg-[#00a8b2] h-[2px] rounded-[2px] shrink-0 w-[24px]" data-name="::before" />
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Calendrier en ligne</p>
      </div>
    </div>
  );
}

function H2SectionTitle() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.52px] relative shrink-0 w-full" data-name="h2.section-title">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[43.2px] whitespace-nowrap">
        <p className="leading-[47.52px]">Choisissez votre disponibilité</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Sélectionnez le type de consultation et un créneau qui vous convient directement dans notre calendrier.</p>
      </div>
    </div>
  );
}

function DivCalendlyHeaderIcon() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[56px]" data-name="div.calendly-header-icon">
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Component 2">
        <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 23.3333">
              <path d={svgPaths.p2f773f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-1.17px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33333 7">
              <path d="M1.16667 1.16667V5.83333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-1.17px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33333 7">
              <path d="M1.16667 1.16667V5.83333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-1.17px_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 2.33333">
              <path d="M1.16667 1.16667H22.1667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function H2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3">
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Samuel Agoua Denturologiste</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">
        <p className="leading-[normal]">Planifiez votre consultation en quelques clics</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[318px]" data-name="div">
      <H2 />
      <P2 />
    </div>
  );
}

function DivCalendlyHeader() {
  return (
    <div className="bg-[#00a8b2] relative shrink-0 w-full" data-name="div.calendly-header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center px-[40px] py-[36px] relative w-full">
          <DivCalendlyHeaderIcon />
          <Div3 />
        </div>
      </div>
    </div>
  );
}

function DivCalendlyPlaceholderIcon() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center left-1/2 rounded-[40px] size-[80px] top-0" data-name="div.calendly-placeholder-icon">
      <div className="overflow-clip relative shrink-0 size-[36px]" data-name="Component 2">
        <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7 29.7">
              <path d={svgPaths.p4e9f780} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="2.7" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-22.5%_-1.35px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.7 8.7">
              <path d="M1.35 1.35V7.35" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="2.7" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-22.5%_-1.35px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.7 8.7">
              <path d="M1.35 1.35V7.35" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="2.7" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-1.35px_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7 2.7">
              <path d="M1.35 1.35H28.35" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="2.7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function H3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[104px]" data-name="h4">
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Intégration Calendly</p>
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[141.4px]" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22.4px] mb-0">Remplacez ce bloc par votre widget Calendly. Copiez votre</p>
        <p className="leading-[22.4px] mb-0">lien de prise de rendez-vous depuis votre tableau de bord</p>
        <p className="leading-[22.4px]">Calendly.</p>
      </div>
    </div>
  );
}

function DivCalendlyCode() {
  return (
    <div className="absolute bg-[#e8f5f7] content-stretch flex flex-col items-start left-0 p-[17px] right-0 rounded-[10px] top-[237.18px]" data-name="div.calendly-code">
      <div aria-hidden="true" className="absolute border border-[#c2e4e8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2b8b97] text-[0px] whitespace-nowrap">
        <p className="leading-[19.2px] mb-0 text-[#00a8b2] text-[12px] whitespace-pre">{`<!-- Collez votre code Calendly ici -->`}</p>
        <p className="leading-[19.2px] mb-0 text-[#00a8b2] text-[12px] whitespace-pre">{`<div class="calendly-inline-widget"`}</p>
        <p className="mb-0 text-[#00a8b2] text-[12px] whitespace-pre">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.2px]">{`  data-url="https://calendly.com/`}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[19.2px]">votre-lien</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.2px]">{`"`}</span>
        </p>
        <p className="leading-[19.2px] mb-0 text-[#00a8b2] text-[12px] whitespace-pre">{`  style="min-width:320px;height:630px;">`}</p>
        <p className="leading-[19.2px] text-[#00a8b2] text-[12px] whitespace-pre">{`</div>`}</p>
      </div>
    </div>
  );
}

function DivCalendlyPlaceholder() {
  return (
    <div className="h-[367.11px] max-w-[400px] relative shrink-0 w-[400px]" data-name="div.calendly-placeholder">
      <DivCalendlyPlaceholderIcon />
      <H3 />
      <P3 />
      <DivCalendlyCode />
    </div>
  );
}

function RemplacezCeBlocParVotreCodeDintegrationCalendly() {
  return (
    <div className="bg-[#fafafa] h-[600px] relative shrink-0 w-full" data-name="Remplacez ce bloc par votre code d'intégration Calendly">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[40px] relative size-full">
          <DivCalendlyPlaceholder />
        </div>
      </div>
    </div>
  );
}

function DivCalendlyWrapper() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="div.calendly-wrapper">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <DivCalendlyHeader />
        <RemplacezCeBlocParVotreCodeDintegrationCalendly />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_24px_0px_rgba(35,31,32,0.06)]" />
    </div>
  );
}

function DivContactCalendlyInner() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] items-start left-0 px-[120px] py-[100px] right-0 top-[587px]" data-name="div.contact-calendly-inner">
      <DivSectionLabel1 />
      <H2SectionTitle />
      <P1 />
      <DivCalendlyWrapper />
    </div>
  );
}

function H4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3">
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[20px] w-full">
        <p className="leading-[normal]">Notre emplacement</p>
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="opacity-70 relative shrink-0" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">1234, rue des Érables, Montréal, QC H2X 1Y5</p>
        </div>
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="opacity-50 relative shrink-0" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">Remplacez par votre intégration Google Maps</p>
        </div>
      </div>
    </div>
  );
}

function DivMapPlaceholder() {
  return (
    <div className="bg-[#e8f5f7] content-stretch flex flex-col gap-[12px] h-[300px] items-center justify-center p-px relative rounded-[20px] shrink-0 w-full" data-name="div.map-placeholder">
      <div aria-hidden="true" className="absolute border border-[#c2e4e8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="opacity-50 relative shrink-0 size-[48px]" data-name="Component 2">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[4.17%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-3.41%_-4.17%_-4.1%_-4.17%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 47.3028">
                <path d={svgPaths.p2eb89000} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
            <div className="absolute inset-[-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p7c1a900} id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <P4 />
      <P5 />
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 px-[120px] py-[100px] right-0 top-[1669px]" data-name="Map placeholder">
      <H4 />
      <DivMapPlaceholder />
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2">
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfdfd] text-[40px] text-center w-[318px]">
        <p className="leading-[48px]">Prêt à retrouver votre sourire?</p>
      </div>
    </div>
  );
}

function P6() {
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
    <div className="absolute bg-[#00a8b2] content-stretch flex flex-col gap-[16px] items-center left-0 overflow-clip px-[40px] py-[80px] top-[2217px] w-[1440px]" data-name="CTA Banner">
      <div className="absolute bg-[rgba(255,255,255,0.05)] left-[-100px] rounded-[200px] size-[400px] top-[-100px]" data-name="::before" />
      <div className="absolute bg-[rgba(255,255,255,0.05)] bottom-[-150px] right-[-100px] rounded-[250px] size-[500px]" data-name="::after" />
      <H1 />
      <P6 />
      <div className="bg-[#fcfdfd] content-stretch flex flex-col items-center justify-center px-[42px] py-[15px] relative rounded-[9px] shrink-0" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[9px]" />
        <div className="flex flex-col font-['Helvena:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.6px]">Réserver une consultation</p>
        </div>
      </div>
    </div>
  );
}

function Li() {
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

function Li1() {
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

function Li2() {
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
      <Li />
      <Li1 />
      <Li2 />
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

export default function Contact1440Px() {
  return (
    <div className="bg-[#f1f1f2] relative size-full" data-name="Contact - 1440px">
      <DivContactHero />
      <DivContactInfoStrip />
      <DivContactCalendlyInner />
      <MapPlaceholder />
      <CtaBanner />
      <Navigation />
    </div>
  );
}