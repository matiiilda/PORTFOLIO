import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
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
  console.log('Current path:', location.pathname); // Log the current path

  return (
    <ThemeProvider>
      {location.pathname === '/about' ? (
        <BackgroundWrapperAbout>
          <Header/>
          <Routes>
            <Route
              path='/about'
              element={<AboutPage />} />
          </Routes>
          <Footer />
        </BackgroundWrapperAbout>
      ) : (
        <BackgroundWrapper>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<LandingPage />} />
            <Route
              path='/case/:id'
              element={<CasePage />} />
          </Routes>
          <Footer />
        </BackgroundWrapper>
      )}
    </ThemeProvider>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
