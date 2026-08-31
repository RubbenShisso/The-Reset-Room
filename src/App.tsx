import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import PrivacyPage from './pages/Privacy';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-20 top-24 h-[260px] w-[260px] rounded-full border border-[var(--reset-aqua)] opacity-70 md:h-[380px] md:w-[380px]"
        animate={reduceMotion ? undefined : { x: [0, 40, -28, 0], y: [0, -24, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-80px] top-52 h-[220px] w-[220px] rounded-full border border-[var(--reset-aqua)] opacity-65 md:h-[340px] md:w-[340px]"
        animate={reduceMotion ? undefined : { x: [0, -32, 24, 0], y: [0, 22, -18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/3 bottom-12 h-[180px] w-[180px] rounded-full border border-[var(--reset-aqua)] opacity-55 md:h-[260px] md:w-[260px]"
        animate={reduceMotion ? undefined : { x: [0, 24, -18, 0], y: [0, -18, 24, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <AmbientBackground />
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <ScrollToTop />
        <AmbientBackground />
        <Navbar />
        <AboutPage />
        <Footer />
      </>
    ),
  },
  {
    path: '/services',
    element: (
      <>
        <ScrollToTop />
        <AmbientBackground />
        <Navbar />
        <ServicesPage />
        <Footer />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <ScrollToTop />
        <AmbientBackground />
        <Navbar />
        <ContactPage />
        <Footer />
      </>
    ),
  },
  {
    path: '/privacy',
    element: (
      <>
        <ScrollToTop />
        <AmbientBackground />
        <Navbar />
        <PrivacyPage />
        <Footer />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
