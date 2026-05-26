import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  Eye,
  FileText,
  Image as ImageIcon,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Save,
  Search,
  Settings,
  Trash2
} from 'lucide-react';
import { brand, cases } from '../assets/siteData';
import { adminContentStorageKey } from './useSiteContent';

const leadsStorageKey = 'les_contact_leads';

function defaultContent() {
  return {
    site: {
      name: brand.name || "LE'S CRAFT BEER",
      logo: brand.chineseName || '樂',
      tagline: brand.tagline || '南昌本土精酿啤酒屋',
      slogan: brand.slogan || '樂在精酿，聚在南昌。'
    },
    contact: {
      phone: brand.phone || '0791-8888-8888',
      wechat: brand.wechat || 'LE_CRAFT_BEER',
      address: brand.address || '江西省南昌市红谷滩区精酿社交街区 88 号',
      hours: brand.hours || '周一至周日 17:00 - 02:00',
      email: brand.email || 'hello@lescraftbeer.com',
      mapQuery: brand.mapQuery || "南昌 LE'S CRAFT BEER 精酿啤酒屋"
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
    cases: cases.map((item) => ({
      title: item.title,
      type: item.type,
      image: item.image,
      detail: item.detail,
      highlights: Array.isArray(item.highlights) ? item.highlights.join('、') : item.highlights
    }))
  };
}

function readJson(key, fallback) {
  if (typeof window === 'undefined') return fallback;

  try {
    return JSON.parse(window.localStorage.getItem(key) || 'null') || fallback;
  } catch {
    return fallback;
  }
}

function Field({ label, children }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-charcoal">
      {label}
      {children}
    </label>
  );
}

function TextInput(props) {
  return <input {...props} className="focus-ring rounded-sm border border-black/12 bg-white px-4 py-3 text-ink" />;
}

function TextArea(props) {
  return <textarea {...props} className="focus-ring min-h-28 rounded-sm border border-black/12 bg-white px-4 py-3 text-ink" />;
}

function StatCard({ icon: Icon, label, value, text }) {
  return (
    <article className="rounded-sm border border-black/10 bg-white p-5 shadow-sm">
      <Icon className="text-amber" size={26} />
      <p className="mt-4 text-2xl font-black text-ink">{value}</p>
      <p className="mt-1 text-sm font-bold text-hop">{label}</p>
      <p className="mt-3 text-xs leading-6 text-charcoal">{text}</p>
    </article>
  );
}

export default function AdminPanel() {
  const fallbackContent = useMemo(() => defaultContent(), []);
  const [content, setContent] = useState(fallbackContent);
  const [leads, setLeads] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setContent(readJson(adminContentStorageKey, fallbackContent));
    setLeads(readJson(leadsStorageKey, []));

    function refreshLeads() {
      setLeads(readJson(leadsStorageKey, []));
    }

    window.addEventListener('les-leads-updated', refreshLeads);
    window.addEventListener('storage', refreshLeads);

    return () => {
      window.removeEventListener('les-leads-updated', refreshLeads);
      window.removeEventListener('storage', refreshLeads);
    };
  }, [fallbackContent]);

  function updateSection(section, field, value) {
    setContent((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [field]: value
      }
    }));
    setSaved(false);
  }

  function updateCase(index, field, value) {
    setContent((current) => ({
      ...current,
      cases: current.cases.map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item))
    }));
    setSaved(false);
  }

  function addCase() {
    setContent((current) => ({
      ...current,
      cases: [
        ...current.cases,
        {
          title: '新活动案例',
          type: '企业活动',
          image: '/assets/case-corporate.jpg',
          detail: '请填写本次活动的服务对象、人数、服务内容和项目亮点。',
          highlights: '专属区域、酒水搭配、现场服务'
        }
      ]
    }));
    setSaved(false);
  }

  function removeCase(index) {
    setContent((current) => ({
      ...current,
      cases: current.cases.filter((_, itemIndex) => itemIndex !== index)
    }));
    setSaved(false);
  }

  function saveContent() {
    const normalized = {
      ...content,
      contact: {
        ...content.contact,
        mapQuery: content.contact.mapQuery || content.contact.address
      }
    };
    window.localStorage.setItem(adminContentStorageKey, JSON.stringify(normalized));
    window.dispatchEvent(new Event('les-content-updated'));
    setContent(normalized);
    setSaved(true);
  }

  function resetDemoContent() {
    window.localStorage.setItem(adminContentStorageKey, JSON.stringify(fallbackContent));
    window.dispatchEvent(new Event('les-content-updated'));
    setContent(fallbackContent);
    setSaved(true);
  }

  function clearLeads() {
    window.localStorage.setItem(leadsStorageKey, JSON.stringify([]));
    setLeads([]);
  }

  return (
    <section className="bg-malt py-10">
      <div className="container-page grid gap-6">
        <div className="rounded-sm bg-ink p-6 text-malt shadow-soft md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-amber">ADMIN CENTER</p>
              <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">LE&apos;S CRAFT BEER 内容管理后台</h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-malt/72">
                用于演示客户可自行维护的网站后台：可修改首页文案、联系方式、案例内容、SEO 信息，并查看客户咨询记录。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-malt/20 px-5 py-4 font-black text-malt transition hover:border-amber hover:text-amber">
                <Eye size={19} />
                预览官网
              </Link>
              <button
                type="button"
                onClick={resetDemoContent}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-malt/20 px-5 py-4 font-black text-malt transition hover:border-amber hover:text-amber"
              >
                恢复展示样板
              </button>
              <button
                type="button"
                onClick={saveContent}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-6 py-4 font-black text-ink transition hover:bg-malt"
              >
                <Save size={20} />
                保存并同步前台
              </button>
            </div>
          </div>
          {saved && <p className="mt-4 rounded-sm bg-malt/10 px-4 py-3 text-sm font-semibold text-amber">已保存，首页刷新后继续保留修改。</p>}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={LayoutDashboard} label="官网页面" value="5+" text="首页、产品服务、案例、联系、招商展示均可打开。" />
          <StatCard icon={MessageCircle} label="客户咨询" value={leads.length} text="联系表单提交后会进入本地客户咨询列表。" />
          <StatCard icon={ImageIcon} label="案例内容" value={content.cases.length} text="案例可新增、删除、编辑图片路径和项目详情。" />
          <StatCard icon={Search} label="SEO 设置" value="已配置" text="可维护标题、描述、关键词，适合演示基础 SEO 能力。" />
        </div>

        <section className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-black text-ink">
                <Settings className="text-amber" size={24} />
                品牌基础信息
              </h2>
              <p className="mt-3 text-sm leading-7 text-charcoal">这些内容会影响导航、页脚和官网品牌展示。</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Field label="网站名称">
                <TextInput value={content.site.name} onChange={(event) => updateSection('site', 'name', event.target.value)} />
              </Field>
              <Field label="Logo 图标">
                <TextInput value={content.site.logo} onChange={(event) => updateSection('site', 'logo', event.target.value)} />
              </Field>
              <Field label="品牌副标题">
                <TextInput value={content.site.tagline} onChange={(event) => updateSection('site', 'tagline', event.target.value)} />
              </Field>
            </div>
          </div>
        </section>

        <section className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-black text-ink">
                <ImageIcon className="text-amber" size={24} />
                首页 Banner 装修
              </h2>
              <p className="mt-3 text-sm leading-7 text-charcoal">首屏是客户第一眼看到的内容，建议标题简洁、定位清楚、说明文案克制。</p>
            </div>
            <div className="grid gap-4">
              <Field label="主标题">
                <TextInput value={content.banner.title} onChange={(event) => updateSection('banner', 'title', event.target.value)} />
              </Field>
              <Field label="副标题">
                <TextInput value={content.banner.subtitle} onChange={(event) => updateSection('banner', 'subtitle', event.target.value)} />
              </Field>
              <Field label="说明文案">
                <TextArea value={content.banner.description} onChange={(event) => updateSection('banner', 'description', event.target.value)} />
              </Field>
            </div>
          </div>
        </section>

        <section className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-black text-ink">
                <Mail className="text-amber" size={24} />
                联系方式与门店信息
              </h2>
              <p className="mt-3 text-sm leading-7 text-charcoal">这里会联动首页、联系页、页脚和手机端底部按钮。</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="电话">
                <TextInput value={content.contact.phone} onChange={(event) => updateSection('contact', 'phone', event.target.value)} />
              </Field>
              <Field label="微信">
                <TextInput value={content.contact.wechat} onChange={(event) => updateSection('contact', 'wechat', event.target.value)} />
              </Field>
              <Field label="地址">
                <TextInput value={content.contact.address} onChange={(event) => updateSection('contact', 'address', event.target.value)} />
              </Field>
              <Field label="营业时间">
                <TextInput value={content.contact.hours} onChange={(event) => updateSection('contact', 'hours', event.target.value)} />
              </Field>
              <Field label="邮箱">
                <TextInput value={content.contact.email} onChange={(event) => updateSection('contact', 'email', event.target.value)} />
              </Field>
              <Field label="地图关键词">
                <TextInput value={content.contact.mapQuery || content.contact.address} onChange={(event) => updateSection('contact', 'mapQuery', event.target.value)} />
              </Field>
            </div>
          </div>
        </section>

        <section className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-black text-ink">
                <MapPin className="text-amber" size={24} />
                案例内容管理
              </h2>
              <p className="mt-3 text-sm leading-7 text-charcoal">适合展示企业团建、私享包场和品牌活动，图片路径建议使用 `/assets/xxx.jpg`。</p>
            </div>
            <button type="button" onClick={addCase} className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-3 text-sm font-black text-malt transition hover:bg-hop">
              <Plus size={18} />
              添加案例
            </button>
          </div>
          <div className="mt-6 grid gap-5">
            {content.cases.map((item, index) => (
              <article key={`${item.title}-${index}`} className="rounded-sm border border-black/10 bg-malt p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-black text-ink">案例 {index + 1}</h3>
                  <button type="button" onClick={() => removeCase(index)} className="focus-ring inline-flex items-center gap-2 rounded-sm border border-black/10 bg-white px-3 py-2 text-sm font-bold text-charcoal transition hover:text-ink">
                    <Trash2 size={16} />
                    删除
                  </button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="案例标题">
                    <TextInput value={item.title} onChange={(event) => updateCase(index, 'title', event.target.value)} />
                  </Field>
                  <Field label="项目类型">
                    <TextInput value={item.type} onChange={(event) => updateCase(index, 'type', event.target.value)} />
                  </Field>
                  <Field label="图片路径">
                    <TextInput value={item.image} onChange={(event) => updateCase(index, 'image', event.target.value)} />
                  </Field>
                  <Field label="亮点标签">
                    <TextInput value={item.highlights} onChange={(event) => updateCase(index, 'highlights', event.target.value)} />
                  </Field>
                  <div className="md:col-span-2">
                    <Field label="项目详情">
                      <TextArea value={item.detail} onChange={(event) => updateCase(index, 'detail', event.target.value)} />
                    </Field>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-2xl font-black text-ink">
              <FileText className="text-amber" size={24} />
              SEO 设置
            </h2>
            <div className="mt-6 grid gap-4">
              <Field label="SEO 标题">
                <TextInput value={content.seo.title} onChange={(event) => updateSection('seo', 'title', event.target.value)} />
              </Field>
              <Field label="SEO 描述">
                <TextArea value={content.seo.description} onChange={(event) => updateSection('seo', 'description', event.target.value)} />
              </Field>
              <Field label="关键词">
                <TextInput value={content.seo.keywords} onChange={(event) => updateSection('seo', 'keywords', event.target.value)} />
              </Field>
            </div>
          </div>

          <div className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="flex items-center gap-2 text-2xl font-black text-ink">
                <MessageCircle className="text-amber" size={24} />
                客户咨询
              </h2>
              <button type="button" onClick={clearLeads} className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-black/10 px-4 py-3 text-sm font-black text-charcoal transition hover:text-ink">
                <Trash2 size={18} />
                清空记录
              </button>
            </div>
            <div className="mt-6 overflow-x-auto">
              {leads.length === 0 ? (
                <p className="rounded-sm bg-malt px-4 py-5 text-sm font-semibold text-charcoal">暂无客户咨询。提交一次联系我们表单后，这里会显示记录。</p>
              ) : (
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/10 text-charcoal">
                      <th className="py-3 pr-4">时间</th>
                      <th className="py-3 pr-4">姓名</th>
                      <th className="py-3 pr-4">电话</th>
                      <th className="py-3 pr-4">类型</th>
                      <th className="py-3 pr-4">备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id} className="border-b border-black/10 align-top">
                        <td className="py-4 pr-4 text-charcoal">{new Date(lead.createdAt).toLocaleString('zh-CN')}</td>
                        <td className="py-4 pr-4 font-bold text-ink">{lead.name}</td>
                        <td className="py-4 pr-4 text-charcoal">{lead.phone}</td>
                        <td className="py-4 pr-4 text-charcoal">{lead.type}</td>
                        <td className="py-4 pr-4 text-charcoal">{lead.message || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
