import { useEffect, useMemo, useState } from 'react';
import { brand, cases as defaultCases } from '../assets/siteData';

export const adminContentStorageKey = 'les_admin_content';

function normalizeImagePath(image) {
  return String(image || '/assets/case-corporate.svg')
    .trim()
    .replace(/\s*\/\s*/g, '/')
    .replace(/\.jpd$/i, '.jpg');
}

function normalizeCase(item) {
  return {
    ...item,
    image: normalizeImagePath(item.image),
    highlights: Array.isArray(item.highlights)
      ? item.highlights
      : String(item.highlights || '')
          .split(/[、,，]/)
          .map((tag) => tag.trim())
          .filter(Boolean)
  };
}

function buildDefaultContent() {
  return {
    site: {
      name: brand.name,
      logo: brand.chineseName,
      tagline: brand.tagline,
      slogan: brand.slogan
    },
    contact: {
      phone: brand.phone,
      wechat: brand.wechat,
      address: brand.address,
      hours: brand.hours,
      email: brand.email,
      mapQuery: brand.mapQuery
    },
    banner: {
      title: "LE'S CRAFT BEER",
      subtitle: '南昌本土精酿啤酒体验空间',
      description: '以专业精酿、城市社交与高品质服务，打造南昌中高端聚会、企业团建与私享酒会目的地。'
    },
    seo: {
      title: "LE'S CRAFT BEER | 南昌本土精酿啤酒屋",
      description: "LE'S CRAFT BEER 是南昌本土精酿啤酒屋，提供到店精酿、企业团建、私享包场、商务酒会与酒水合作。",
      keywords: "南昌精酿,南昌啤酒屋,南昌酒吧,企业团建,私享包场,LE'S CRAFT BEER"
    },
    cases: defaultCases.map(normalizeCase)
  };
}

function mergeContent(saved, fallback) {
  if (!saved) return fallback;

  const contact = {
    ...fallback.contact,
    ...(saved.contact || {})
  };

  return {
    ...fallback,
    ...saved,
    site: {
      ...fallback.site,
      ...(saved.site || {})
    },
    contact: {
      ...contact,
      mapQuery: saved.contact?.mapQuery || contact.address || fallback.contact.mapQuery
    },
    banner: {
      ...fallback.banner,
      ...(saved.banner || {})
    },
    seo: {
      ...fallback.seo,
      ...(saved.seo || {})
    },
    cases: Array.isArray(saved.cases) && saved.cases.length > 0 ? saved.cases.map(normalizeCase) : fallback.cases
  };
}

function readContent(fallback) {
  if (typeof window === 'undefined') return fallback;

  try {
    const saved = JSON.parse(window.localStorage.getItem(adminContentStorageKey) || 'null');
    return mergeContent(saved, fallback);
  } catch {
    return fallback;
  }
}

export default function useSiteContent() {
  const fallback = useMemo(() => buildDefaultContent(), []);
  const [content, setContent] = useState(fallback);

  useEffect(() => {
    function refreshContent() {
      setContent(readContent(fallback));
    }

    refreshContent();
    window.addEventListener('les-content-updated', refreshContent);
    window.addEventListener('storage', refreshContent);

    return () => {
      window.removeEventListener('les-content-updated', refreshContent);
      window.removeEventListener('storage', refreshContent);
    };
  }, [fallback]);

  return content;
}
