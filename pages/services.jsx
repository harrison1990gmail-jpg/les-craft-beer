import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { brand, services } from '../assets/siteData';

const serviceDetails = [
  ['到店精酿体验', ['风格推荐', '试饮建议', '轻食搭配', '朋友小聚']],
  ['企业团建', ['人数规划', '套餐建议', '互动节奏', '现场协调']],
  ['私享包场', ['专属区域', '主题氛围', '定制酒单', '活动支持']],
  ['精酿酒会', ['商务接待', '客户答谢', '品牌联名', '酒水方案']],
  ['酒水合作', ['活动供酒', '餐饮合作', '渠道合作', '长期支持']]
];

export default function ServicesPage() {
  return (
    <Layout
      seo={{
        title: `产品服务 | ${brand.name}`,
        description: "LE'S CRAFT BEER 提供到店精酿体验、企业团建、私享包场、商务酒会和精酿酒水合作。",
        path: '/services/'
      }}
    >
      <section className="bg-grain py-20 text-malt">
        <div className="container-page">
          <SectionTitle
            eyebrow="SERVICES"
            title="产品服务"
            text="为南昌本地消费者、企业客户和中高端用户提供专业精酿体验与活动解决方案。"
            light
          />
          <div className="mt-8">
            <Link href="/contact" className="focus-ring inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-4 font-black text-ink transition hover:bg-malt">
              获取专属方案
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page">
          <SectionTitle eyebrow="LIST" title="服务列表" text="按实际消费场景设计服务模块，便于快速沟通预算、人数和现场需求。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map(([title, items]) => (
              <article key={title} className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-ink">{title}</h3>
                <div className="mt-5 grid gap-3">
                  {items.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                      <CheckCircle2 size={17} className="text-hop" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle eyebrow="PRICING" title="价格模块" text="初版官网采用定制报价，更符合中高端精酿空间与企业活动服务定位。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page rounded-sm bg-ink p-8 text-malt md:p-10">
          <p className="text-sm font-black tracking-[0.22em] text-amber">SERVICE NOTE</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">报价会根据人数、日期、酒水组合和活动要求调整</h2>
          <p className="mt-5 max-w-3xl leading-8 text-malt/72">
            咨询时建议提供人数、预算区间、活动类型、预计日期和是否需要包场。团队会根据实际情况给出更合适的套餐建议。
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
