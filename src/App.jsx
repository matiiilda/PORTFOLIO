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
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/case/:id' element={<CasePage />} />
      </Routes>
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
