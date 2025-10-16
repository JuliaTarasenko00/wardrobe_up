import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { route } from './components/helpers/routes';

const Layout = lazy(() => import('./components/Layout/Layout'));

// pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const router = createBrowserRouter([
  {
    path: route.home,
    Component: Layout,
    children: [{ index: true, Component: HomePage }],
  },
]);

function App() {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
