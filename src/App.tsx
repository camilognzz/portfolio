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
  const [showScrollTopButton, setShowScrollTopButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition cursor-pointer"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
