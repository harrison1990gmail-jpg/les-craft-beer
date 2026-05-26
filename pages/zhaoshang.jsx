import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  LayoutDashboard,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Target
} from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import useSiteContent from '../components/useSiteContent';

const showcaseModules = [
  ['品牌首页', '首屏定位、品牌介绍、核心优势、服务入口、地图和 CTA 转化。', MonitorSmartphone],
  ['产品服务', '按客户场景展示到店体验、企业团建、私享包场和商务酒会。', Sparkles],
  ['案例中心', '用图片、项目详情和亮点标签建立信任感。', ImageIcon],
  ['联系转化', '电话、微信、地图、表单和手机端底部按钮持续引导咨询。', MessageCircle],
  ['管理后台', '可修改文案、联系方式、案例、SEO，并查看客户咨询。', LayoutDashboard],
  ['部署上线', '支持本地演示、免费部署、云服务器、域名和 HTTPS。', ShieldCheck]
];

const clientValue = [
  '客户打开网站后，能快速知道这家公司做什么',
  '首页通过场景、案例和评价建立信任',
  '手机端固定咨询入口，减少客户流失',
  '后台可改内容，老板不用每次找技术',
  '可作为餐饮、门店、企业服务、招商项目的通用样板'
];

const buildPackages = [
  {
    title: '官网展示版',
    price: '¥999 起',
    text: '适合小店、个人品牌、单页展示、快速拿给客户看。',
    items: ['1 个精修页面', '手机端适配', '电话/微信入口', '基础 SEO']
  },
  {
    title: '企业标准版',
    price: '¥2999 起',
    text: '适合本地企业、餐饮门店、服务公司和品牌官网。',
    items: ['5 个页面', '案例中心', '联系表单', '后台内容管理']
  },
  {
    title: '招商转化版',
    price: '¥5999 起',
    text: '适合招商加盟、渠道合作、品牌发布和商业合作。',
    items: ['成交路径设计', '后台线索查看', '部署上线支持', '交付维护文档']
  }
];

const demoRoutes = [
  ['啤酒屋首页', '/', '展示品牌质感、酒单、场景、服务和转化入口。'],
  ['后台管理', '/admin/', '展示客户可自行维护内容和查看咨询线索。'],
  ['案例中心', '/cases/', '展示图片案例、项目详情和服务亮点。'],
  ['联系我们', '/contact/', '展示表单、地图、电话和微信入口。']
];

export default function ZhaoshangPage() {
  const content = useSiteContent();

  return (
    <Layout
      seo={{
        title: '啤酒屋官网样板展示 | 企业官网与招商展示网站建设',
        description: "以 LE'S CRAFT BEER 啤酒屋官网为样板，展示品牌官网、后台管理、案例中心、联系转化和部署上线能力。",
        path: '/zhaoshang/'
      }}
    >
      <section className="bg-grain text-malt">
        <div className="container-page grid min-h-[calc(100vh-80px)] gap-10 py-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-sm border border-malt/20 px-3 py-2 text-xs font-black tracking-[0.18em] text-amber">
              <span className="h-2 w-2 rounded-full bg-amber" />
              DEMO WEBSITE SYSTEM
            </div>
            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              用啤酒屋官网做样板，展示一套可复制的企业官网方案
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-malt/78">
              这不是单独一张招商页，而是一套完整的品牌官网演示：前台展示品牌、服务和案例，后台演示文案、联系方式、案例和客户咨询管理。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-6 py-4 font-black text-ink transition hover:bg-malt">
                查看啤酒屋官网
                <ArrowRight size={20} />
              </Link>
              <Link href="/admin" className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-malt/25 px-6 py-4 font-black text-malt transition hover:border-amber hover:text-amber">
                查看后台演示
              </Link>
            </div>
          </div>

          <div className="rounded-sm border border-malt/15 bg-malt p-6 text-ink shadow-soft">
            <p className="text-sm font-black tracking-[0.22em] text-hop">LIVE DEMO</p>
            <h2 className="mt-3 text-3xl font-black">LE&apos;S CRAFT BEER 官网页面能力</h2>
            <p className="mt-4 leading-8 text-charcoal">
              当前项目已经包含官网前台、后台管理、客户表单、案例内容、SEO 设置和本地部署验证。你可以直接把这套样板发给客户看。
            </p>
            <div className="mt-6 grid gap-3">
              {demoRoutes.map(([title, href, text]) => (
                <Link key={href} href={href} className="rounded-sm border border-black/10 bg-white p-4 transition hover:border-amber">
                  <p className="font-black text-ink">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-charcoal">{text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="SHOWCASE"
            title="啤酒屋官网展示了哪些功能"
            text="这套样板的重点不是炫技，而是让客户看到一个真实行业网站如何完成品牌展示、信任建立和咨询转化。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {showcaseModules.map(([title, text, Icon]) => (
              <article key={title} className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
                <Icon className="text-amber" size={28} />
                <h3 className="mt-5 text-2xl font-black text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionTitle
            eyebrow="VALUE"
            title="给客户看的价值，不只是“做了一个网站”"
            text="你可以用啤酒屋官网作为案例，向客户解释：网站应该承担品牌门面、业务介绍、案例展示、联系方式和后台维护五个角色。"
          />
          <div className="grid gap-4">
            {clientValue.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-sm border border-black/10 bg-malt p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-hop" size={20} />
                <p className="font-semibold leading-7 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-malt">
        <div className="container-page">
          <SectionTitle eyebrow="BACKSTAGE" title="后台也能作为展示卖点" text="很多客户担心网站做好后不会维护。后台演示能直接解决这个顾虑。" light />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['首页装修', '修改 Banner、品牌名、Logo 和首屏说明。', FileText],
              ['联系方式', '电话、微信、地址、营业时间联动前台。', Phone],
              ['案例管理', '新增案例、修改图片、项目详情和亮点标签。', ImageIcon],
              ['SEO 设置', '维护标题、描述和关键词，适合基础搜索展示。', Search]
            ].map(([title, text, Icon]) => (
              <article key={title} className="rounded-sm border border-malt/12 bg-white/5 p-6">
                <Icon className="text-amber" size={28} />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-malt/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page">
          <SectionTitle eyebrow="PRICING" title="可对外讲的合作套餐" text="这部分是招商沟通时的报价框架，实际项目按页面数量、后台复杂度和上线方式调整。" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {buildPackages.map((item) => (
              <article key={item.title} className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-hop">{item.title}</p>
                <h3 className="mt-3 text-4xl font-black text-ink">{item.price}</h3>
                <p className="mt-4 min-h-16 text-sm leading-7 text-charcoal">{item.text}</p>
                <div className="mt-6 grid gap-3 border-t border-black/10 pt-5">
                  {item.items.map((feature) => (
                    <p key={feature} className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                      <CheckCircle2 size={17} className="text-hop" />
                      {feature}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hop py-16 text-malt">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black tracking-[0.22em] text-amber">NEXT STEP</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">先把啤酒屋官网做成你的成交样板</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-malt/76">
              你先把这套官网和后台演示给朋友、商家和潜在客户看。客户认可后，再按他们行业替换品牌、产品、案例和联系方式。
            </p>
          </div>
          <div className="grid gap-3">
            <Link href="/" className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-6 py-4 font-black text-ink transition hover:bg-malt">
              <Target size={20} />
              查看完整样板
            </Link>
            <div className="rounded-sm border border-malt/20 px-5 py-4 text-sm leading-7 text-malt/80">
              微信：{content.contact.wechat}
              <br />
              电话：{content.contact.phone}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
