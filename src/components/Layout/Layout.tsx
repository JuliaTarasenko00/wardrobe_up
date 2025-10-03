import { Suspense } from "react";
import { Header } from "./Header";
import { PromoBanner } from "./PromoBanner";
import { Outlet } from "react-router-dom";

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
      <footer></footer>
    </>
  );
}
