import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { brand, culture, team } from '../assets/siteData';

export default function AboutPage() {
  return (
    <Layout
      seo={{
        title: `关于我们 | ${brand.name}`,
        description: "了解 LE'S CRAFT BEER 的品牌故事、团队、企业文化和南昌本地精酿服务能力。",
        path: '/about/'
      }}
    >
      <section className="bg-grain py-20 text-malt">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionTitle
            eyebrow="ABOUT"
            title={`关于 ${brand.name}`}
            text="LE'S CRAFT BEER 诞生于南昌，专注于精酿啤酒体验、城市社交空间与活动服务。我们相信，精酿不只是酒水选择，更是一种更有品质的聚会方式。"
            light
          />
          <div className="rounded-sm border border-malt/15 bg-malt p-8 text-ink shadow-soft">
            <div className="text-8xl font-black text-amber">{brand.chineseName}</div>
            <p className="mt-5 text-2xl font-black">{brand.slogan}</p>
            <p className="mt-4 leading-8 text-charcoal">
              英文品牌负责国际化与专业感，繁体「樂」作为品牌图标，承担南昌本土记忆点与社交情绪价值。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionTitle
            eyebrow="STORY"
            title="公司介绍"
            text="我们服务南昌本地消费者、企业客户与中高端社交人群，提供从到店体验、企业团建、私享包场到品牌酒会的一体化服务。"
          />
          <div className="grid gap-5">
            <p className="rounded-sm border border-black/10 bg-white p-6 leading-8 text-charcoal">
              从朋友小聚到企业团建，从私享酒会到品牌活动，我们希望让每一次举杯都更有品质、更有记忆点。
            </p>
            <p className="rounded-sm border border-black/10 bg-white p-6 leading-8 text-charcoal">
              品牌以南昌为根，把精酿文化、城市社交和服务执行结合起来，形成更适合本地市场的中高端啤酒屋体验。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle eyebrow="TEAM" title="团队" text="用专业酒水建议、清晰活动沟通和稳定现场服务，共同支撑客户体验。" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {team.map(([title, text]) => (
              <article key={title} className="rounded-sm border border-black/10 bg-malt p-7">
                <h3 className="text-2xl font-black text-ink">{title}</h3>
                <p className="mt-4 leading-7 text-charcoal">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-malt">
        <div className="container-page">
          <SectionTitle eyebrow="CULTURE" title="企业文化" text="专业、本地、品质、连接，是 LE'S CRAFT BEER 的长期服务标准。" light />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {culture.map(([title, text]) => (
              <article key={title} className="rounded-sm border border-malt/12 bg-white/5 p-6">
                <h3 className="text-2xl font-black text-amber">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-malt/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
