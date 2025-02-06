import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import ProjectSection from './components/Project';
import Contact from './components/Contact';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [showScrollTopButton, setShowScrollTopButton] = useState<boolean>(false);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTopButton(true); 
      } else {
        setShowScrollTopButton(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-[#E5E7EB] dark:bg-[#0F172A] min-h-screen text-[#374151] dark:text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <ProjectSection />
      <Contact />
      <h1 className="text-[#374151] text-center dark:text-white">dfdd</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        Cambiar Modo
      </button>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
