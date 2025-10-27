import { useState } from "react";
import { BiSun, BiMoon, BiMenu, BiX } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { name: "Sobre mí", to: "about" },
  { name: "Experiencia", to: "skills" },
  { name: "Proyectos", to: "projects" },
  { name: "Contacto", to: "contact" },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex items-center text-xl font-extrabold text-teal-600 dark:text-teal-400 tracking-wider cursor-pointer"
          >
            g_crvz
            <span className="text-gray-800 dark:text-gray-200 ml-1 font-light">
              | DEV
            </span>
          </ScrollLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md font-medium cursor-pointer transition-all duration-200"
              >
                {item.name}
              </ScrollLink>
            ))}

            <motion.button
              onClick={toggleTheme}
              aria-label="Alternar modo claro/oscuro"
              className="text-2xl p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              whileTap={{ rotate: 20 }}
            >
              {isDarkMode ? <BiSun /> : <BiMoon />}
            </motion.button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 p-2 rounded-md transition duration-150"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <BiX className="h-6 w-6" />
              ) : (
                <BiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-gray-900/90 shadow-lg pb-3 px-4 sm:px-6 absolute w-full top-16 z-40 rounded-b-lg"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleLinkClick}
                className="block text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md font-medium cursor-pointer transition-all duration-200"
              >
                {item.name}
              </ScrollLink>
            ))}

            <motion.div
              onClick={toggleTheme}
              aria-label="Alternar modo claro/oscuro"
              className="mt-2 text-2xl p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 w-full flex justify-center"
              whileTap={{ rotate: 20 }}
            >
              {isDarkMode ? <BiSun /> : <BiMoon />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
