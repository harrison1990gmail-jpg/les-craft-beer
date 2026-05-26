export default function CaseCard({ item }) {
  function handleImageError(event) {
    if (event.currentTarget.src.includes('/assets/case-corporate.svg')) return;
    event.currentTarget.src = '/assets/case-corporate.svg';
  }

  return (
    <article className="overflow-hidden rounded-sm border border-black/10 bg-white shadow-sm">
      <img src={item.image} alt={item.title} onError={handleImageError} className="h-56 w-full object-cover" />
      <div className="p-6">
        <p className="text-sm font-black tracking-[0.18em] text-hop">{item.type}</p>
        <h3 className="mt-3 text-2xl font-black text-ink">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-charcoal">{item.detail}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.highlights.map((tag) => (
            <span key={tag} className="rounded-sm bg-malt px-3 py-1 text-xs font-bold text-hop">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
