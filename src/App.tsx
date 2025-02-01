import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import  AboutMe  from './components/AboutMe';
import Education from './components/Education';
import ProjectSection from './components/Project';


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-[#E5E7EB] dark:bg-[#0F172A] min-h-screen text-[#374151] dark:text-white">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Education/>
      <ProjectSection/>
      <h1 className="text-[#374151] text-center dark:text-white">dfdd</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        Cambiar Modo
      </button>
    </div>
  )
}

export default App;