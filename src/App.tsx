import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/layout/BackToTop';
import { CursorFollower } from './components/ui/CursorFollower';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* Cursor Follower */}
      <CursorFollower />

      <div className="grid-backdrop relative min-h-screen overflow-x-hidden bg-[var(--color-bg)]">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.18),transparent)]" />

        <div className="relative z-10">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
          <BackToTop />
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#111827',
            color: '#F9FAFB',
            border: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;