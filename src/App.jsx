import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import CasePage from './Pages/CasePage';
import BackgroundWrapper from './Components/Background/BackgroundWrapper';
import BackgroundWrapperAbout from './Components/Background/BackgroundWrapperAbout';
import './App.css';

function App() {
  const location = useLocation();
  const footerRef = useRef(null);

  return (
    <ThemeProvider>
      {location.pathname === '/about' ? (
        <BackgroundWrapperAbout>
          <Header
            footerRef={footerRef} />
          <Routes>
            <Route
              path="/"
              element={<LandingPage />} />
            <Route
              path="/about"
              element={<AboutPage />} />
            <Route
              path="/case:id"
              element={<CasePage />} />
          </Routes>
          <Footer
            ref={footerRef}/>
        </BackgroundWrapperAbout>
      ) : (
        <BackgroundWrapper>
          <Header
            footerRef={footerRef} />
          <Routes>
            <Route
              path="/"
              element={<LandingPage />} />
            <Route
              path="/about"
              element={<AboutPage />} />
            <Route
              path="/case:id"
              element={<CasePage />} />
          </Routes>
          <Footer
            ref={footerRef}/>
        </BackgroundWrapper>
      )}
    </ThemeProvider>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
}
