import React, { useEffect } from 'react';
import useLocalStorage from "use-local-storage";
import Header from './Components/Header/Header';
import './App.css';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className='App'>
      <Header 
        isDark={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1 className='title'>Good morning, Vietnam!</h1>
      <div className='box'>
        <h2>This is a box</h2>
      </div>
    </div>
  );
}

export default App;