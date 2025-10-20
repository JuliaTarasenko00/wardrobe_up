import { Suspense } from 'react';
import { PromoBanner } from './PromoBanner';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from '../FooterComponent/FooterComponent';

export default function Layout() {
  return (
    <>
      <div className="fixed">
        <PromoBanner />
        <Header />
      </div>
      <main>
        {
          <Suspense fallback={<p>Loader...</p>}>
            <Outlet />
          </Suspense>
        }
      </main>
      <Footer />
    </>
  );
}
