import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

export default function Layout({ children, seo }) {
  return (
    <>
      <SEO {...seo} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
