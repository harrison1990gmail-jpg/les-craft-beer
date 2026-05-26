import Head from 'next/head';
import { brand } from '../assets/siteData';
import useSiteContent from './useSiteContent';
import { withBasePath } from './sitePath';

export default function SEO({
  title = `${brand.name} | ${brand.tagline}`,
  description = 'LE’S CRAFT BEER 是南昌本土精酿啤酒屋，提供到店精酿体验、企业团建、私享包场、商务酒会与精酿酒水合作。',
  path = '/'
}) {
  const content = useSiteContent();
  const useAdminSeo = path === '/';
  const effectiveTitle = useAdminSeo ? content.seo.title || title : title;
  const effectiveDescription = useAdminSeo ? content.seo.description || description : description;
  const effectiveKeywords = useAdminSeo ? content.seo.keywords || "南昌精酿,南昌啤酒屋,南昌酒吧,企业团建,私享包场,LE'S CRAFT BEER" : "企业官网,招商展示页,网站建设,品牌官网,企业建站";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://harrison1990gmail-jpg.github.io/les-craft-beer';
  const url = `${siteUrl}${path === '/' ? '/' : path}`;

  return (
    <Head>
      <title>{effectiveTitle}</title>
      <meta name="description" content={effectiveDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={effectiveKeywords} />
      <meta property="og:title" content={effectiveTitle} />
      <meta property="og:description" content={effectiveDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${siteUrl}/assets/og-cover.svg`} />
      <link rel="canonical" href={url} />
      <link rel="icon" href={withBasePath('/assets/favicon.svg')} />
    </Head>
  );
}
