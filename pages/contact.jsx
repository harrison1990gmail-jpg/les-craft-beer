import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';
import Layout from '../components/Layout';
import MapBlock from '../components/MapBlock';
import SectionTitle from '../components/SectionTitle';
import useSiteContent from '../components/useSiteContent';
import { brand } from '../assets/siteData';

export default function ContactPage() {
  const content = useSiteContent();

  return (
    <Layout
      seo={{
        title: `联系我们 | ${brand.name}`,
        description: "联系 LE'S CRAFT BEER，预约南昌精酿到店体验、企业团建、私享包场、商务酒会与酒水合作。",
        path: '/contact/'
      }}
    >
      <section className="bg-grain py-20 text-malt">
        <div className="container-page">
          <SectionTitle
            eyebrow="CONTACT"
            title="联系 LE'S CRAFT BEER"
            text="预约到店、企业团建、私享包场与商务合作，欢迎咨询。"
            light
          />
        </div>
      </section>

      <section className="bg-malt py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle eyebrow="INFO" title="联系方式" text="电话、微信、地址和营业时间均可在上线前替换为真实信息。" />
            <div className="mt-8 grid gap-4">
              {[
                [Phone, '电话', content.contact.phone],
                [MessageCircle, '微信', content.contact.wechat],
                [MapPin, '地址', content.contact.address],
                [Clock, '营业时间', content.contact.hours],
                [Mail, '邮箱', content.contact.email]
              ].map(([Icon, label, value]) => (
                <div key={label} className="flex gap-4 rounded-sm border border-black/10 bg-white p-5">
                  <Icon className="mt-1 shrink-0 text-amber" size={22} />
                  <div>
                    <p className="text-sm font-bold text-hop">{label}</p>
                    <p className="mt-1 font-semibold text-ink">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="FORM" title="提交需求，获取专属方案" text="留下联系方式和大致需求，正式上线后可接入企业微信、邮件通知或 CRM。" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionTitle eyebrow="MAP" title="地图导航" text="门店位置可在真实地址确认后替换为精确坐标。" />
          <div className="mt-8">
            <MapBlock />
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
