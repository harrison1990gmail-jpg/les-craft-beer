import CaseCard from '../components/CaseCard';
import CTASection from '../components/CTASection';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import useSiteContent from '../components/useSiteContent';
import { brand } from '../assets/siteData';

export default function CasesPage() {
  const content = useSiteContent();

  return (
    <Layout
      seo={{
        title: `案例中心 | ${brand.name}`,
        description: "查看 LE'S CRAFT BEER 的企业团建、私享包场、品牌活动和精酿酒会案例。",
        path: '/cases/'
      }}
    >
      <section className="bg-grain py-20 text-malt">
        <div className="container-page">
          <SectionTitle
            eyebrow="CASES"
            title="案例中心"
            text="真实场景，见证 LE'S CRAFT BEER 的服务能力。"
            light
          />
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap gap-3">
            {['企业团建', '私享包场', '品牌活动', '朋友聚会', '精酿酒会'].map((item) => (
              <span key={item} className="rounded-sm border border-black/10 bg-white px-4 py-2 text-sm font-bold text-hop">
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {content.cases.map((item) => (
              <CaseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle eyebrow="DETAIL" title="项目详情模板" text="后续录入真实案例时，可按以下结构保持信息完整和专业。" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.cases.map((item) => (
              <article key={item.title} className="rounded-sm border border-black/10 bg-malt p-6">
                <p className="text-sm font-black text-hop">项目类型：{item.title}</p>
                <h3 className="mt-4 text-xl font-black text-ink">服务对象：南昌本地客户</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal">参与人数：按实际预约人数定制</p>
                <p className="mt-2 text-sm leading-7 text-charcoal">服务内容：场地安排、精酿酒水、轻食搭配、活动流程支持</p>
                <p className="mt-2 text-sm leading-7 text-charcoal">项目亮点：兼顾品质感、社交氛围与现场执行效率</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
