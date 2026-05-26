import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Beer,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  FlaskConical,
  GlassWater,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wheat,
  Users
} from 'lucide-react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CaseCard from '../components/CaseCard';
import CraftBeerHeroVideo from '../components/CraftBeerHeroVideo';
import CTASection from '../components/CTASection';
import MapBlock from '../components/MapBlock';
import useSiteContent from '../components/useSiteContent';
import { withBasePath } from '../components/sitePath';
import { advantages, processSteps, services, testimonials } from '../assets/siteData';

const beerStyles = [
  ['Crisp Lager', '清爽拉格', '干净、顺口，适合精酿入门与多人聚会。'],
  ['Hoppy IPA', '酒花 IPA', '香气鲜明，适合喜欢层次感的精酿客人。'],
  ['Dark Stout', '深色世涛', '烘焙、焦糖与咖啡感，适合慢饮与商务小酌。'],
  ['Sour & Wheat', '酸啤 / 小麦', '更轻盈、果香明显，适合女性客群和轻松场景。']
];

const tapList = [
  ['LE Lager', '清爽拉格', 'ABV 4.8%', 'IBU 18', '下班第一杯'],
  ['Gan River IPA', '赣江酒花 IPA', 'ABV 6.2%', 'IBU 55', '酒花香气'],
  ['Tengwang Wheat', '滕王小麦', 'ABV 5.0%', 'IBU 12', '柔和麦香'],
  ['Night Stout', '夜色世涛', 'ABV 6.8%', 'IBU 35', '咖啡烘焙']
];

const craftDetails = [
  ['酒花', '带来柑橘、松针、热带水果等香气，是 IPA 和淡色艾尔的灵魂。', Leaf],
  ['麦芽', '形成麦香、焦糖、烘焙和酒体厚度，决定啤酒的骨架。', Wheat],
  ['酵母', '带来发酵香气和风味层次，让每一款酒有自己的表达。', FlaskConical],
  ['酒头', '保持出品稳定，适合展示当日可饮酒款和推荐搭配。', Beer]
];

const spaceScenes = [
  ['朋友小聚', '2-8 人', '下班后小酌、周末聚会、生日预热。'],
  ['企业团建', '10-40 人', '部门聚会、项目庆功、团队破冰。'],
  ['私享包场', '按需定制', '生日派对、社群活动、客户答谢。']
];

const metrics = [
  ['4+', '核心消费场景'],
  ['5', '标准服务流程'],
  ['24h', '咨询响应建议'],
  ['1站式', '酒水空间服务']
];

export default function HomePage() {
  const content = useSiteContent();

  return (
    <Layout
      seo={{
        title: "LE'S CRAFT BEER | 南昌本土精酿啤酒屋",
        description: "LE'S CRAFT BEER 是南昌本土精酿啤酒屋，提供到店精酿、企业团建、私享包场、商务酒会与酒水合作。"
      }}
    >
      <section className="bg-grain text-malt">
        <div className="container-page grid min-h-[calc(100vh-80px)] gap-10 py-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-sm border border-malt/20 px-3 py-2 text-xs font-black tracking-[0.18em] text-amber">
              <span className="h-2 w-2 rounded-full bg-amber" />
              {content.banner.subtitle}
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[1.04] md:text-7xl">
              {content.banner.title}
              <span className="block font-serif text-amber">{content.site.logo}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-malt/78">{content.banner.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-6 py-4 font-black text-ink transition hover:bg-malt">
                预约到店
                <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-malt/25 px-6 py-4 font-black text-malt transition hover:border-amber hover:text-amber">
                企业包场咨询
              </Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-malt/74 sm:grid-cols-3">
              <span>南昌本土精酿品牌</span>
              <span>团建 / 包场 / 酒会</span>
              <span>专业酒单与定制服务</span>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-sm border border-malt/15 shadow-soft">
              <CraftBeerHeroVideo />
              <div className="glass-panel absolute bottom-5 left-5 right-5 rounded-sm p-5">
                <p className="text-sm font-bold text-amber">今晚适合</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {spaceScenes.map(([name, people]) => (
                    <span key={name} className="rounded-sm bg-malt/10 px-3 py-2 text-center text-sm font-bold">
                      {name} · {people}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map(([value, label]) => (
                <div key={label} className="rounded-sm border border-malt/15 bg-white/6 p-4">
                  <p className="text-2xl font-black text-amber">{value}</p>
                  <p className="mt-1 text-xs text-malt/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="texture bg-malt py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <SectionTitle
            eyebrow="BRAND"
            title="扎根南昌，打造更有品质的精酿社交空间"
            text="LE'S CRAFT BEER 不是普通酒吧，而是围绕精酿酒水、城市社交和活动服务打造的本地品牌空间。官网第一屏解决品牌定位，后续模块持续建立专业感和转化理由。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['精选精酿酒款', GlassWater],
              ['企业活动服务', Building2],
              ['南昌本地空间', MapPin],
              ['预约包场支持', CalendarDays]
            ].map(([label, Icon]) => (
              <div key={label} className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
                <Icon className="text-amber" size={28} />
                <p className="mt-5 text-xl font-black text-ink">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle eyebrow="BEER LIST" title="精酿酒单展示" text="用清晰的风格分类帮助客户快速理解酒水能力，也方便企业团建和包场客户做预算沟通。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {beerStyles.map(([en, title, text]) => (
              <article key={title} className="rounded-sm border border-black/10 bg-malt p-6">
                <p className="text-xs font-black tracking-[0.18em] text-hop">{en}</p>
                <h3 className="mt-4 text-2xl font-black text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-malt">
        <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionTitle
            eyebrow="ON TAP"
            title="今日酒头与风味参数"
            text="参考成熟精酿品牌官网的表达方式，把酒款、ABV、IBU、推荐场景放在同一张信息卡里，让新客也能快速选择。"
            light
          />
          <div className="grid gap-4">
            {tapList.map(([name, style, abv, ibu, tag]) => (
              <article key={name} className="rounded-sm border border-malt/12 bg-white/5 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black tracking-[0.18em] text-amber">{tag}</p>
                    <h3 className="mt-2 text-2xl font-black">{name}</h3>
                    <p className="mt-1 text-sm text-malt/68">{style}</p>
                  </div>
                  <div className="flex gap-2 text-xs font-black text-ink">
                    <span className="rounded-sm bg-amber px-3 py-2">{abv}</span>
                    <span className="rounded-sm bg-malt px-3 py-2">{ibu}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page">
          <SectionTitle eyebrow="CRAFT DETAILS" title="更像精酿官网的细节表达" text="把酒花、麦芽、酵母、酒头这些精酿关键词放进页面，让网站不只是餐饮展示，而是真正有精酿品牌感。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {craftDetails.map(([title, text, Icon]) => (
              <article key={title} className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
                <Icon className="text-amber" size={28} />
                <h3 className="mt-5 text-2xl font-black text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page">
          <SectionTitle eyebrow="SCENES" title="消费场景" text="官网不只展示酒，还要展示客户为什么来、适合什么人、可以怎么消费。" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {spaceScenes.map(([title, people, text], index) => (
              <article key={title} className="overflow-hidden rounded-sm border border-black/10 bg-white shadow-sm">
                <img
                  src={withBasePath(['/assets/scene-friends.jpg', '/assets/scene-team.jpg', '/assets/scene-tasting.jpg'][index])}
                  alt={title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-sm font-black text-hop">{people}</p>
                  <h3 className="mt-3 text-2xl font-black text-ink">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-charcoal">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-malt">
        <div className="container-page">
          <SectionTitle eyebrow="ADVANTAGES" title="核心优势" text="把酒水专业、空间氛围和现场服务放到同一套体验标准里。" light />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-sm border border-malt/12 bg-white/5 p-6">
                <ShieldCheck className="text-amber" size={26} />
                <h3 className="mt-5 text-xl font-black text-malt">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-malt/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle eyebrow="SERVICES" title="产品服务" text="从日常到店，到企业活动和商务酒会，按场景提供更合适的精酿解决方案。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page">
          <SectionTitle eyebrow="PROCESS" title="服务流程" text="客户从咨询到到店的每一步都清楚，减少沟通成本，也提升预约转化。" />
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {processSteps.map(([title, text], index) => (
              <div key={title} className="rounded-sm border border-black/10 bg-white p-5 shadow-sm">
                <span className="text-3xl font-black text-amber">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 text-xl font-black text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle eyebrow="CASES" title="客户案例" text="真实场景比单纯介绍更能建立信任，适合向企业客户、品牌客户和聚会客户展示。" />
            <Link href="/cases" className="inline-flex items-center gap-2 font-black text-hop">
              查看更多案例
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {content.cases.map((item) => (
              <CaseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionTitle eyebrow="TRUST" title="客户评价与品牌信任" text="用克制、真实的评价增强信任，同时展示团队的服务稳定性。" />
          <div className="grid gap-5">
            {testimonials.map((item) => (
              <figure key={item.quote} className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
                <blockquote className="text-lg font-semibold leading-8 text-ink">“{item.quote}”</blockquote>
                <figcaption className="mt-6 text-sm text-charcoal">
                  <strong className="block text-hop">{item.name}</strong>
                  {item.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle eyebrow="CONTACT" title="联系方式与地图" text="预约到店、企业团建、私享包场与商务合作，欢迎咨询。" />
            <div className="mt-8 grid gap-4 text-sm leading-7 text-charcoal">
              <p className="flex gap-3"><Phone className="text-amber" size={20} />{content.contact.phone}</p>
              <p className="flex gap-3"><MessageCircle className="text-amber" size={20} />微信：{content.contact.wechat}</p>
              <p className="flex gap-3"><MapPin className="text-amber" size={20} />{content.contact.address}</p>
              <p className="flex gap-3"><Clock className="text-amber" size={20} />{content.contact.hours}</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ['适合朋友聚会', Users],
                ['适合企业接待', Building2],
                ['适合品牌活动', Award],
                ['适合精酿体验', Sparkles]
              ].map(([label, Icon]) => (
                <p key={label} className="flex items-center gap-2 rounded-sm bg-malt px-4 py-3 text-sm font-bold text-charcoal">
                  <Icon className="text-amber" size={18} />
                  {label}
                </p>
              ))}
            </div>
          </div>
          <MapBlock />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
