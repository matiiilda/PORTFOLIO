import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import CasePage from './Pages/CasePage';
import BackgroundWrapper from './Components/Background/BackgroundWrapper';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <ThemeProvider>
        <BackgroundWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case:id" element={<CasePage />} />
          </Routes>
          <Footer />
        </BackgroundWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
