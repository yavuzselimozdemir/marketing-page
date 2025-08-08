import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ padding: '0px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
