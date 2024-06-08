import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import './App.css';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
<BrowserRouter>
<Header 
  isDark={isDark}
  handleChange={() => setIsDark(!isDark)}
/>
<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/about" element={<AboutPage />} />
</Routes>
<Footer />
</BrowserRouter>
  );
}
export default App;
