import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="nav w-full dark:shadow-none py-8 px-6"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold text-[#374151] dark:text-white">
          <a href="/">
            <img
              src="/camilogonzalez-logo.svg"
              alt="Logo Camilo Gonzalez"
              className="h-8 w-auto"
            />
          </a>
          <a href="/" className="hidden lg:block leading-none font-[Oswald]">
            Camilo González
          </a>
        </div>

        <ul className="hidden md:flex space-x-6 ml-auto font-[Roboto]">
          {["Sobre mí", "Educación", "Experiencia", "Proyectos", "Contacto"].map((item) => (
            <li key={item}>
              <a
                href={`#${removeAccents(item.toLowerCase().replace(" ", "-"))}`}
                className="hover:text-blue-500 dark:hover:text-green-400 transition relative pb-1 
             after:absolute after:right-0 after:bottom-0 after:w-full after:h-[2px] 
             after:bg-blue-500 dark:after:bg-green-400 after:scale-x-0 
             after:origin-right hover:after:scale-x-100 
             after:transition-transform after:duration-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4 md:border-l md:pl-4 md:ml-4 md:border-gray-300 dark:md:border-gray-700">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-[#E5E7EB] dark:bg-[#0F172A] opacity-98 flex flex-col justify-start items-center gap-4 w-full h-full transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <X size={30} />
        </button>

        <div className="flex flex-col items-center justify-start mt-24 gap-6 w-full font-[Roboto]">
          {["Sobre mí", "Educación", "Experiencia", "Proyectos", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${removeAccents(item.toLowerCase().replace(" ", "-"))}`}
              className="text-2xl font-medium hover:text-blue-500 dark:hover:text-green-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
