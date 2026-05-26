import Link from 'next/link';
import useSiteContent from './useSiteContent';

export default function Logo({ compact = false }) {
  const content = useSiteContent();

  return (
    <Link href="/" className="focus-ring flex items-center gap-3 rounded-sm" aria-label="返回首页">
      <span className="grid h-11 w-11 place-items-center rounded-sm border border-amber/50 bg-ink text-2xl font-semibold leading-none text-amber shadow-soft">
        {content.site.logo}
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-sm font-black tracking-[0.18em] text-ink">{content.site.name}</span>
          <span className="block text-xs text-charcoal">{content.site.tagline}</span>
        </span>
      )}
    </Link>
  );
}
