import Link from 'next/link';
import { MapPin, Phone, Send } from 'lucide-react';
import { navItems } from '../assets/siteData';
import Logo from './Logo';
import useSiteContent from './useSiteContent';

export default function Footer() {
  const content = useSiteContent();

  return (
    <footer className="bg-ink pb-24 pt-14 text-malt lg:pb-10">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="[&_*]:text-malt">
            <Logo />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-malt/72">
            {content.site.slogan} 专注南昌本土精酿体验、企业团建、私享包场与商务酒会服务。
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-amber">快速访问</h3>
          <div className="mt-4 grid gap-3 text-sm text-malt/74">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-amber">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-amber">联系信息</h3>
          <div className="mt-4 grid gap-3 text-sm text-malt/74">
            <a className="flex items-start gap-2 transition hover:text-amber" href={`tel:${content.contact.phone}`}>
              <Phone size={16} className="mt-0.5 shrink-0" />
              {content.contact.phone}
            </a>
            <p className="flex items-start gap-2">
              <Send size={16} className="mt-0.5 shrink-0" />
              微信：{content.contact.wechat}
            </p>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {content.contact.address}
            </p>
          </div>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-white/10 pt-6 text-xs text-malt/50">
        Copyright © 2026 {content.site.name}. All rights reserved.
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-black/10 bg-malt text-sm font-bold text-ink lg:hidden">
        <a href={`tel:${content.contact.phone}`} className="py-3 text-center">电话咨询</a>
        <Link href="/contact" className="bg-amber py-3 text-center text-ink">加微信</Link>
        <a
          href={`https://uri.amap.com/search?keyword=${encodeURIComponent(content.contact.mapQuery)}`}
          target="_blank"
          rel="noreferrer"
          className="py-3 text-center"
        >
          预约到店
        </a>
      </div>
    </footer>
  );
}
