export default function ServiceCard({ service }) {
  return (
    <article className="rounded-sm border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <p className="text-sm font-bold text-hop">{service.audience}</p>
      <h3 className="mt-3 text-2xl font-black text-ink">{service.title}</h3>
      <p className="mt-4 min-h-20 text-sm leading-7 text-charcoal">{service.text}</p>
      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
        <span className="text-sm text-charcoal">价格</span>
        <strong className="text-lg text-amber">{service.price}</strong>
      </div>
    </article>
  );
}
