import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import ProfileImage from "../../assets/images/me.jpg";

const socialLinks = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/593968157701?text=Saludos%20Guillermo,%20vengo%20de%20tu%20*portfolio*",
    color: "hover:text-green-600 dark:hover:text-green-400",
  },
  {
    icon: FaGithub,
    href: "https://github.com/g-cruz-dev",
    label: "Perfil de GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/guillermo-sistemas/",
    label: "Perfil de LinkedIn",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    icon: FaEnvelope,
    href: "mailto:andrescruzarevalo@gmail.com",
    label: "Enviar correo electrónico",
    color: "hover:text-red-600 dark:hover:text-red-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => {
  return (
    <motion.section
      id="about"
      className="max-w-7xl mx-auto p-4 md:p-8 pt-10 md:pt-16 space-y-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div id="home" className="grid lg:grid-cols-3 gap-8 items-center">
        <motion.figure
          className="lg:col-span-1 flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl dark:shadow-teal-900/50"
          variants={itemVariants}
        >
          <motion.img
            src={ProfileImage}
            alt="Fotografía profesional de Guillermo Cruz, desarrollador Full-Stack."
            loading="eager"
            className="rounded-full border-8 border-teal-500 dark:border-teal-400 w-64 h-64 object-cover shadow-xl animate-pulse-slow"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <figcaption className="text-center mt-6">
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              Guillermo Cruz
            </motion.h2>
            <motion.p
              className="text-xl font-medium text-teal-600 dark:text-teal-400 mt-1 inline-block px-3 py-1 rounded-lg cursor-pointer hover:text-teal-500 dark:hover:text-teal-300 hover:bg-gray-100/20 dark:hover:bg-gray-700/30 transition duration-300 hover-glow"
              variants={itemVariants}
            >
              Dev Full-Stack
            </motion.p>

            <motion.div
              className="flex justify-center space-x-4 mt-4"
              variants={itemVariants}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`text-gray-500 ${link.color} dark:text-gray-400 text-3xl transition duration-300`}
                >
                  <link.icon />
                </a>
              ))}
            </motion.div>
          </figcaption>
        </motion.figure>

        <motion.div
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl dark:shadow-teal-900/50 h-full flex flex-col justify-center"
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
            variants={itemVariants}
          >
            Ingeniero en{" "}
            <span className="text-teal-600 dark:text-teal-400 hover-glow">
              Sistemas de Información
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            variants={itemVariants}
          >
            Desarrollador{" "}
            <span className="text-teal-600 dark:text-teal-400 font-bold hover-glow">
              Full-Stack
            </span>{" "}
            enfocado en soluciones{" "}
            <span className="text-teal-600 dark:text-teal-400 font-bold hover-glow">
              robustas, escalables y alineadas al negocio
            </span>
            . Especializado en{" "}
            <span className="text-teal-600 dark:text-teal-400 font-bold hover-glow">
              Spring Boot
            </span>{" "}
            para backend y{" "}
            <span className="text-teal-600 dark:text-teal-400 font-bold hover-glow">
              React
            </span>{" "}
            para interfaces modernas.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos
            </a>
            <a href="#contact" className="btn btn-primary">
              Contactar
            </a>
            <a
              href="https://drive.google.com/file/d/1Mql3B4saNmX_elX3OyuS8B4lI47P7KWK/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shadow-lg shadow-teal-500/50"
            >
              Ver CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
