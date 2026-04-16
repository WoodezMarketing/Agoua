export function SectionLabel({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <div className={`flex gap-[10px] items-center ${center ? "justify-center" : ""}`}>
      <div className="bg-[#00a8b2] h-[2px] w-[24px] rounded-[2px]" />
      <span
        className="text-[#00a8b2] text-[12px] uppercase tracking-[1.2px]"
        style={{ fontFamily: "'Rethink Sans', sans-serif", fontWeight: 700 }}
      >
        {text}
      </span>
    </div>
  );
}
