import svgPaths from "./svg-utro2su1oq";
import imgDivServiceVisualBlock from "figma:asset/c682b02e080d657f868fab48e8c5251d1ad89acf.png";

function A() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="a">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 1">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10.42%_-20.83%_-10.42%_-29.46%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01184 9.66667">
              <path d={svgPaths.p21a5d00} id="Vector" stroke="var(--stroke-0, #8F8F8F)" strokeLinecap="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Helvena:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8f8f8f] text-[14px] whitespace-nowrap">
        <p className="leading-[22.6px]">Tous les services</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div">
      <A />
    </div>
  );
}

function DivSectionLabel() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div.section-label">
      <div className="bg-[#00a8b2] h-[2px] rounded-[2px] shrink-0 w-[24px]" data-name="::before" />
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Service</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.66px] pt-[3.22px] relative shrink-0 w-full" data-name="h1">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[50.4px] w-full">
        <p className="leading-[55.44px] mb-0">Nouvelle prothèse</p>
        <p className="leading-[55.44px]">dentaire</p>
      </div>
    </div>
  );
}

function PLead() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="p.lead">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[17px] w-full">
        <p className="leading-[28.9px]">Sur mesure, pour votre confort et votre confiance</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-[24px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[16px] w-full">
        <p className="leading-[28px] mb-0">{`La conception d'une nouvelle prothèse est une étape importante dans`}</p>
        <p className="leading-[28px] mb-0">{`votre vie. Nous vous accompagnons avec soin, de la prise d'empreinte à`}</p>
        <p className="leading-[28px]">{`l'ajustement final, pour un résultat naturel et confortable.`}</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="div">
      <DivSectionLabel />
      <H />
      <PLead />
      <P />
      <div className="bg-[#00a8b2] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[12px] shrink-0" data-name="Component 2">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">Prendre rendez-vous</p>
        </div>
      </div>
    </div>
  );
}

function DivServiceVisualBlock() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[400px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[24px]" data-name="div.service-visual-block">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgDivServiceVisualBlock} />
    </div>
  );
}

function DivServiceDetailHeroInner() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-center max-w-[1200px] relative shrink-0 w-full" data-name="div.service-detail-hero-inner">
      <Div1 />
      <DivServiceVisualBlock />
    </div>
  );
}

function DivServiceDetailHero() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] items-start left-0 pb-[80px] pt-[140px] px-[120px] right-0 top-0" data-name="div.service-detail-hero" style={{ backgroundImage: "linear-gradient(134.332deg, rgb(232, 245, 247) 0%, rgb(255, 255, 255) 100%)" }}>
      <Div />
      <DivServiceDetailHeroInner />
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[28px] w-full">
        <p className="leading-[normal]">Comment se déroule le traitement?</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[16px] w-full">
        <p className="leading-[28px]">Voici les étapes clés de votre prise en charge.</p>
      </div>
    </div>
  );
}

function DivStepNum() {
  return (
    <div className="bg-[#00a8b2] relative rounded-[8px] shrink-0 size-[32px]" data-name="div.step-num">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">1</p>
        </div>
      </div>
    </div>
  );
}

function Strong() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="strong">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Consultation et évaluation</p>
      </div>
    </div>
  );
}

function DivStepContent() {
  return (
    <div className="relative shrink-0" data-name="div.step-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative">
        <Strong />
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">Examen complet de votre bouche, de vos tissus et de vos besoins spécifiques.</p>
        </div>
      </div>
    </div>
  );
}

function LiServiceStepItem() {
  return (
    <div className="bg-[#fafafa] relative rounded-[16px] shrink-0 w-full" data-name="li.service-step-item">
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[21px] relative w-full">
        <DivStepNum />
        <DivStepContent />
      </div>
    </div>
  );
}

function DivStepNum1() {
  return (
    <div className="bg-[#00a8b2] relative rounded-[8px] shrink-0 size-[32px]" data-name="div.step-num">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">2</p>
        </div>
      </div>
    </div>
  );
}

function Strong1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="strong">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">{`Prise d'empreintes`}</p>
      </div>
    </div>
  );
}

function DivStepContent1() {
  return (
    <div className="relative shrink-0" data-name="div.step-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative">
        <Strong1 />
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">{`Empreintes de précision pour une prothèse qui s'adapte parfaitement à votre anatomie.`}</p>
        </div>
      </div>
    </div>
  );
}

function LiServiceStepItem1() {
  return (
    <div className="bg-[#fafafa] relative rounded-[16px] shrink-0 w-full" data-name="li.service-step-item">
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[21px] relative w-full">
        <DivStepNum1 />
        <DivStepContent1 />
      </div>
    </div>
  );
}

function DivStepNum2() {
  return (
    <div className="bg-[#00a8b2] relative rounded-[8px] shrink-0 size-[32px]" data-name="div.step-num">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function DivStepContent2() {
  return (
    <div className="relative shrink-0" data-name="div.step-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.75px] items-start leading-[0] not-italic pr-[67.69px] relative whitespace-nowrap">
        <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#1e1d24] text-[15px]">
          <p className="leading-[normal]">Fabrication en laboratoire</p>
        </div>
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#6b6667] text-[13px]">
          <p className="leading-[19.5px] mb-0">Fabrication artisanale dans notre laboratoire accrédité avec des matériaux de qualité</p>
          <p className="leading-[19.5px]">supérieure.</p>
        </div>
      </div>
    </div>
  );
}

function LiServiceStepItem2() {
  return (
    <div className="bg-[#fafafa] relative rounded-[16px] shrink-0 w-full" data-name="li.service-step-item">
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[21px] relative w-full">
        <DivStepNum2 />
        <DivStepContent2 />
      </div>
    </div>
  );
}

function DivStepNum3() {
  return (
    <div className="bg-[#00a8b2] relative rounded-[8px] shrink-0 size-[32px]" data-name="div.step-num">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">4</p>
        </div>
      </div>
    </div>
  );
}

function Strong2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="strong">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Essayage et ajustements</p>
      </div>
    </div>
  );
}

function DivStepContent3() {
  return (
    <div className="relative shrink-0" data-name="div.step-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative">
        <Strong2 />
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">{`Séances d'essayage pour peaufiner l'ajustement, la phonétique et l'esthétique.`}</p>
        </div>
      </div>
    </div>
  );
}

function LiServiceStepItem3() {
  return (
    <div className="bg-[#fafafa] relative rounded-[16px] shrink-0 w-full" data-name="li.service-step-item">
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[21px] relative w-full">
        <DivStepNum3 />
        <DivStepContent3 />
      </div>
    </div>
  );
}

function DivStepNum4() {
  return (
    <div className="bg-[#00a8b2] relative rounded-[8px] shrink-0 size-[32px]" data-name="div.step-num">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">5</p>
        </div>
      </div>
    </div>
  );
}

function Strong3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="strong">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Livraison et suivi</p>
      </div>
    </div>
  );
}

function DivStepContent4() {
  return (
    <div className="relative shrink-0" data-name="div.step-content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative">
        <Strong3 />
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6667] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">{`Remise de votre prothèse définitive avec instructions d'entretien et suivi rapproché.`}</p>
        </div>
      </div>
    </div>
  );
}

function LiServiceStepItem4() {
  return (
    <div className="bg-[#fafafa] relative rounded-[16px] shrink-0 w-full" data-name="li.service-step-item">
      <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[21px] relative w-full">
        <DivStepNum4 />
        <DivStepContent4 />
      </div>
    </div>
  );
}

function UlServiceSteps() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="ul.service-steps">
      <LiServiceStepItem />
      <LiServiceStepItem1 />
      <LiServiceStepItem2 />
      <LiServiceStepItem3 />
      <LiServiceStepItem4 />
    </div>
  );
}

function DivServiceContentBody() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative self-stretch shrink-0 w-[672px]" data-name="div.service-content-body">
      <H1 />
      <P1 />
      <UlServiceSteps />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[36.09px] right-[35.91px] top-[35.77px]" data-name="h3">
      <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Informations pratiques</p>
      </div>
    </div>
  );
}

function SpanInfoLabel() {
  return (
    <div className="relative shrink-0" data-name="span.info-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
          <p className="leading-[normal]">Durée estimée</p>
        </div>
      </div>
    </div>
  );
}

function SpanInfoValue() {
  return (
    <div className="relative shrink-0" data-name="span.info-value">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
          <p className="leading-[normal]">3 à 6 semaines</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoRow() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[36.09px] pb-[15px] pt-[14px] right-[35.91px] top-[83.77px]" data-name="div.info-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <SpanInfoLabel />
      <SpanInfoValue />
    </div>
  );
}

function SpanInfoLabel1() {
  return (
    <div className="relative shrink-0" data-name="span.info-label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
          <p className="leading-[normal]">Couverture assurance</p>
        </div>
      </div>
    </div>
  );
}

function SpanInfoValue1() {
  return (
    <div className="relative shrink-0" data-name="span.info-value">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">Partielle à totale</p>
        </div>
      </div>
    </div>
  );
}

function DivInfoRow1() {
  return (
    <div className="absolute content-stretch flex gap-[148.07px] items-center left-[36.09px] pb-[15px] pt-[14px] right-[35.91px] top-[129.77px]" data-name="div.info-row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <SpanInfoLabel1 />
      <SpanInfoValue1 />
    </div>
  );
}

function DivServiceInfoBox({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#1e1d24] h-[336px] rounded-[20px] shrink-0 sticky top-0 w-full"} data-name="div.service-info-box">
      <H2 />
      <DivInfoRow />
      <DivInfoRow1 />
      <div className="absolute bg-[#00a8b2] content-stretch flex items-center justify-center left-[36.09px] px-[32px] py-[16px] right-[35.91px] rounded-[12px] top-[247px]" data-name="Component 2">
        <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">Réserver maintenant</p>
        </div>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[448px]" data-name="div">
      <DivServiceInfoBox />
    </div>
  );
}

function DivServiceContentInner() {
  return (
    <div className="absolute content-stretch flex gap-[80px] h-[622.75px] items-start justify-center left-[120px] max-w-[1200px] right-[120px] top-[735px]" data-name="div.service-content-inner">
      <DivServiceContentBody />
      <Div2 />
    </div>
  );
}

function DivSectionLabel1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div.section-label">
      <div className="bg-[#00a8b2] h-[2px] rounded-[2px] shrink-0 w-[24px]" data-name="::before" />
      <div className="flex flex-col font-['Rethink_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00a8b2] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">FAQ</p>
      </div>
    </div>
  );
}

function H2SectionTitle() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.52px] relative shrink-0 w-full" data-name="h2.section-title">
      <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[43.2px] w-full">
        <p className="leading-[47.52px]">Questions fréquentes</p>
      </div>
    </div>
  );
}

function DivFaqToggle() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="div.faq-toggle">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Component 1">
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.93%_-0.73px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 9.625">
              <path d="M0.729167 0.729167V8.89583" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.73px_-8.93%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.625 1.45833">
              <path d="M0.729167 0.729167H8.89583" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFaqQ() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.faq-q">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[342.86px] items-center px-[28px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
            <p className="leading-[normal]">{`Combien de temps dure la fabrication d'une prothèse?`}</p>
          </div>
          <DivFaqToggle />
        </div>
      </div>
    </div>
  );
}

function DivFaqA() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.faq-a">
      <div aria-hidden="true" className="absolute border-[#e8e4e4] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[17px] px-[28px] relative w-full">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[15px] w-full">
          <p className="leading-[26.25px]">En général, le processus complet dure entre 3 et 6 semaines, incluant plusieurs rendez-vous pour les empreintes, les essayages et les ajustements.</p>
        </div>
      </div>
    </div>
  );
}

function DivFaqToggle1() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="div.faq-toggle">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Component 1">
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.93%_-0.73px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 9.625">
              <path d="M0.729167 0.729167V8.89583" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.73px_-8.93%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.625 1.45833">
              <path d="M0.729167 0.729167H8.89583" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFaqQ1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.faq-q">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[28px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
            <p className="leading-[normal]">Ma prothèse sera-t-elle couverte par mon assurance?</p>
          </div>
          <DivFaqToggle1 />
        </div>
      </div>
    </div>
  );
}

function DivFaqA1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.faq-a">
      <div aria-hidden="true" className="absolute border-[#e8e4e4] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[17px] px-[28px] relative w-full">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[15px] w-full">
          <p className="leading-[26.25px]">La plupart des assurances collectives couvrent une partie ou la totalité du coût. Nous vous aidons à comprendre votre couverture.</p>
        </div>
      </div>
    </div>
  );
}

function DivFaqToggle2() {
  return (
    <div className="bg-[rgba(0,168,178,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="div.faq-toggle">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Component 1">
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.93%_-0.73px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 9.625">
              <path d="M0.729167 0.729167V8.89583" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.73px_-8.93%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.625 1.45833">
              <path d="M0.729167 0.729167H8.89583" id="Vector" stroke="var(--stroke-0, #00A8B2)" strokeLinecap="round" strokeWidth="1.45833" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFaqQ2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.faq-q">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[28px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1d24] text-[15px] whitespace-nowrap">
            <p className="leading-[normal]">{`Quelle est la durée de vie d'une prothèse dentaire?`}</p>
          </div>
          <DivFaqToggle2 />
        </div>
      </div>
    </div>
  );
}

function DivFaqA2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.faq-a">
      <div aria-hidden="true" className="absolute border-[#e8e4e4] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[15.75px] pt-[16.5px] px-[28px] relative w-full">
        <div className="flex flex-col font-['Rethink_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3637] text-[15px] w-full">
          <p className="leading-[26.25px]">Une prothèse bien entretenue dure généralement entre 5 et 10 ans.</p>
        </div>
      </div>
    </div>
  );
}

function DivFaqList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[32.99px] relative shrink-0 w-full" data-name="div.faq-list">
      <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Component 3">
        <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
          <DivFaqQ />
          <DivFaqA />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Component 3">
        <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
          <DivFaqQ1 />
          <DivFaqA1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Component 3">
        <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
          <DivFaqQ2 />
          <DivFaqA2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e8e4e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function DivFaqInner() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start max-w-[800px] relative shrink-0 w-full" data-name="div.faq-inner">
      <DivSectionLabel1 />
      <H2SectionTitle />
      <DivFaqList />
    </div>
  );
}

function DivFaqSection() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col items-center left-0 px-[120px] py-[80px] right-0 top-[1430px]" data-name="div.faq-section">
      <DivFaqInner />
    </div>
  );
}

function H3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2">
      <div className="flex flex-col font-['Helvena:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcfdfd] text-[40px] text-center w-[318px]">
        <p className="leading-[48px]">Prêt à retrouver votre sourire?</p>
      </div>
    </div>
  );
}

function P2() {
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
    <div className="absolute bg-[#00a8b2] content-stretch flex flex-col gap-[16px] items-center left-0 overflow-clip px-[40px] py-[80px] top-[2205px] w-[1440px]" data-name="CTA Banner">
      <div className="absolute bg-[rgba(255,255,255,0.05)] left-[-100px] rounded-[200px] size-[400px] top-[-100px]" data-name="::before" />
      <div className="absolute bg-[rgba(255,255,255,0.05)] bottom-[-150px] right-[-100px] rounded-[250px] size-[500px]" data-name="::after" />
      <H3 />
      <P2 />
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

export default function NouvelleProtheseServices1440Px() {
  return (
    <div className="bg-[#f1f1f2] relative size-full" data-name="Nouvelle prothèse (Services) - 1440px">
      <DivServiceDetailHero />
      <DivServiceContentInner />
      <DivFaqSection />
      <CtaBanner />
      <Navigation />
    </div>
  );
}