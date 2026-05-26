import AdminPanel from '../components/AdminPanel';
import Layout from '../components/Layout';
import { brand } from '../assets/siteData';

export default function AdminPage() {
  return (
    <Layout
      seo={{
        title: `网站管理后台 | ${brand.name}`,
        description: "LE'S CRAFT BEER 网站管理后台，用于查看客户咨询、维护联系方式、首页 Banner、案例和 SEO 设置。",
        path: '/admin/'
      }}
    >
      <AdminPanel />
    </Layout>
  );
}
