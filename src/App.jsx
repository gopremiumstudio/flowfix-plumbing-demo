
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ResidentialCleaningPage from './pages/ResidentialCleaningPage';
import CommercialCleaningPage from './pages/CommercialCleaningPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import QuoteRequestPage from './pages/QuoteRequestPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/residential" element={<ResidentialCleaningPage />} />
        <Route path="/commercial" element={<CommercialCleaningPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/quote" element={<QuoteRequestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
