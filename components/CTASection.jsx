import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import useSiteContent from './useSiteContent';

export default function CTASection() {
  const content = useSiteContent();

  return (
    <section className="bg-hop py-16 text-malt">
      <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-black tracking-[0.22em] text-amber">BOOKING</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">把下一次聚会交给 LE&apos;S CRAFT BEER</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-malt/76">
            到店体验、企业团建、私享包场、商务酒会均可咨询。告诉我们人数、时间与预算，我们会给出适合的酒水和空间建议。
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-6 py-4 font-black text-ink transition hover:bg-malt">
            <MessageCircle size={20} />
            加微信咨询
          </Link>
          <a href={`tel:${content.contact.phone}`} className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-malt/25 px-6 py-4 font-black text-malt transition hover:border-amber hover:text-amber">
            <Phone size={20} />
            电话咨询
          </a>
        </div>
      </div>
    </section>
  );
}
