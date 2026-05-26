import { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { navItems } from '../assets/siteData';
import Logo from './Logo';
import useSiteContent from './useSiteContent';

export default function Header() {
  const [open, setOpen] = useState(false);
  const content = useSiteContent();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-malt/92 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-charcoal transition hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link href="/zhaoshang" className="text-sm font-medium text-charcoal transition hover:text-ink">
            招商样板
          </Link>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-malt transition hover:bg-hop"
          >
            <Phone size={17} />
            加微信咨询
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-black/10 bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="打开导航"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-malt lg:hidden">
          <nav className="container-page grid gap-1 py-4" aria-label="移动端导航">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-2 py-3 text-base font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/zhaoshang" className="rounded-sm px-2 py-3 text-base font-semibold text-ink" onClick={() => setOpen(false)}>
              招商样板
            </Link>
            <a href={`tel:${content.contact.phone}`} className="mt-2 rounded-sm bg-ink px-4 py-3 text-center font-semibold text-malt">
              电话咨询
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
