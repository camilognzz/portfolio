import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full dark:shadow-none py-8 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-white">
          <img src="/camilogonzalez-logo.svg" alt="Logo" className="h-8 w-auto" />
          <a href="#" className="leading-none">Camilo González</a>
        </div>
        {/* Menú principal (oculto en móviles) */}
        <ul className="hidden md:flex space-x-6">
          {["Sobre mí", "Educación", "Experiencia", "Proyectos", "Contacto"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Controles: Modo oscuro + Menú hamburguesa */}
        <div className="flex items-center space-x-4">
          {/* Botón de Modo Oscuro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Botón de Menú Hamburguesa (solo en móviles) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden bg-white dark:bg-[#0F172A] flex flex-col items-center gap-4 py-4 transition-all duration-300 ${menuOpen ? "block" : "hidden"
          }`}
      >
        {["Sobre mí", "Educación", "Experiencia", "Proyectos", "Contacto"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition text-lg"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
