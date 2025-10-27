import React from "react";
import { motion } from "framer-motion";
import {
  BsWhatsapp,
  BsLinkedin,
  BsEnvelopeFill,
  BsGithub,
} from "react-icons/bs";

const socialLinks = [
  {
    href: "https://wa.me/593968157701?text=Hola,%20buenos%20días%20Guillermo",
    Icon: BsWhatsapp,
    label: "Contactar por WhatsApp",
    hoverClass: "hover:text-green-400",
  },
  {
    href: "https://www.linkedin.com/in/guillermo-sistemas/",
    Icon: BsLinkedin,
    label: "Ver perfil de LinkedIn",
    hoverClass: "hover:text-blue-400",
  },
  {
    href: "mailto:andrescruzarevalo@gmail.com",
    Icon: BsEnvelopeFill,
    label: "Enviar correo electrónico",
    hoverClass: "hover:text-red-400",
  },
  {
    href: "https://github.com/g-cruz-dev",
    Icon: BsGithub,
    label: "Ver perfil de GitHub",
    hoverClass: "hover:text-gray-400",
  },
];

const SocialLink = ({ href, Icon: IconComponent, label, hoverClass }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.95 }}
    className={`text-3xl transition-colors duration-300 ${hoverClass}`}
  >
    <IconComponent />
  </motion.a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="mt-16 p-8 bg-gray-900 dark:bg-gray-950 text-white shadow-inner transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <motion.nav
          aria-label="Redes sociales"
          className="flex items-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </motion.nav>

        <motion.p
          className="text-sm text-gray-400 mt-4 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          &copy; {currentYear} g_crvz. Todos los derechos reservados.
        </motion.p>
      </div>

      <motion.div
        className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Diseño y desarrollo por Guillermo Cruz | React & TailwindCSS
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
