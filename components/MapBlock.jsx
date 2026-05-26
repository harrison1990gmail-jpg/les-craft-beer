import { MapPin } from 'lucide-react';
import useSiteContent from './useSiteContent';

export default function MapBlock() {
  const content = useSiteContent();
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(content.contact.mapQuery)}&output=embed`;
  const amapUrl = `https://uri.amap.com/search?keyword=${encodeURIComponent(content.contact.mapQuery)}`;

  return (
    <div className="overflow-hidden rounded-sm border border-black/10 bg-white shadow-soft">
      <div className="map-frame">
        <iframe title="LE'S CRAFT BEER 地图" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="flex flex-col gap-4 border-t border-black/10 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-sm leading-6 text-charcoal">
          <MapPin size={18} className="mt-0.5 shrink-0 text-amber" />
          {content.contact.address}
        </p>
        <a href={amapUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-sm bg-ink px-5 py-3 text-center text-sm font-bold text-malt transition hover:bg-hop">
          打开地图导航
        </a>
      </div>
    </div>
  );
}
