export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className={`mb-3 text-sm font-black uppercase tracking-[0.22em] ${light ? 'text-amber' : 'text-hop'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-black leading-tight md:text-5xl ${light ? 'text-malt' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-8 ${light ? 'text-malt/72' : 'text-charcoal'}`}>{text}</p>}
    </div>
  );
}
