// src/components/sections/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Pasante Desarrollador Full-Stack",
    company: "Sudamericana de Software S.A.",
    duration: "Sep-Oct 2025",
  },
  {
    title: "Landing Page (Luxore)",
    company: "Desarrollo Web",
    duration: "Jun 2025",
  },
  {
    title: "Recuperación de Datos (SICCEC)",
    company: "Consultoría",
    duration: "Mar–Abr 2023",
  },
];

const frontendSkills = [
  { name: "HTML5", deviconClass: "devicon-html5-plain colored" },
  { name: "CSS3", deviconClass: "devicon-css3-plain colored" },
  { name: "Tailwind CSS", deviconClass: "devicon-tailwindcss-plain colored" },
  { name: "JavaScript", deviconClass: "devicon-javascript-plain colored" },
  { name: "React.js", deviconClass: "devicon-react-original colored" },
];

const backendDBSkills = [
  { name: "Java", deviconClass: "devicon-java-plain colored" },
  { name: "Spring Boot", deviconClass: "devicon-spring-plain colored" },
  { name: "PostgreSQL", deviconClass: "devicon-postgresql-plain colored" },
  { name: "MySQL", deviconClass: "devicon-mysql-plain colored" },
  { name: "MongoDB", deviconClass: "devicon-mongodb-plain colored" },
  { name: "Firebase", deviconClass: "devicon-firebase-plain colored" },
];

const softSkills = [
  "Pensamiento Sistémico",
  "Criterio Técnico-Estratégico",
  "Razonamiento Analítico-Estructurado",
  "Gestión de Complejidad Tecnológica",
  "Comunicación Técnica Multinivel",
];

// Variants para animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 120 },
  },
  hover: { scale: 1.05 },
};

const TechIconItem = ({ name, deviconClass }) => (
  <motion.i
    className={`${deviconClass} text-5xl cursor-pointer`}
    role="img"
    aria-label={name}
    title={name}
    variants={itemVariants}
    whileHover="hover"
  />
);

const ExperienceItem = ({ title, company, duration }) => (
  <motion.li
    className="group p-3 border-l-4 border-teal-500 bg-gray-50 dark:bg-gray-700/50 rounded-r transition-all duration-300 hover:bg-teal-50 dark:hover:bg-gray-700"
    variants={itemVariants}
    whileHover="hover"
  >
    <strong className="font-semibold text-lg block text-gray-800 dark:text-white group-hover:text-teal-700">
      {title}
    </strong>
    <span className="block text-sm text-gray-600 dark:text-gray-400">
      {company} | {duration}
    </span>
  </motion.li>
);

const SoftSkillItem = ({ skill }) => (
  <motion.li
    className="soft-skill p-3 border-l-4 border-teal-500 bg-gray-50 dark:bg-gray-700/50 rounded-r shadow-sm font-medium transition-all duration-300 hover:bg-teal-100/50 dark:hover:bg-teal-900/40 hover:translate-x-1 hover:shadow-lg text-gray-800 dark:text-white"
    variants={itemVariants}
    whileHover="hover"
  >
    {skill}
  </motion.li>
);

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      aria-labelledby="skills-heading"
      className="space-y-8 max-w-7xl mx-auto p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2
        id="skills-heading"
        className="text-3xl font-bold text-center text-gray-900 dark:text-white"
      >
        Stack Tecnológico & Habilidades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <section className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl dark:shadow-gray-950/50 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-teal-600 dark:text-teal-400 dark:border-teal-400 transition duration-300 hover:text-teal-500 dark:hover:text-teal-300 hover:shadow-lg cursor-pointer">
            Experiencia
          </h3>
          <ul className="list-none space-y-4 pl-0">
            {experienceData.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </ul>
        </section>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <section className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-xl dark:shadow-gray-950/50 transition-shadow duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white border-b border-teal-300 dark:border-teal-700 pb-2">
              Frontend
            </h3>
            <div className="flex flex-wrap justify-start gap-5">
              {frontendSkills.map((skill) => (
                <TechIconItem key={skill.name} {...skill} />
              ))}
            </div>
          </section>

          <section className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-xl dark:shadow-gray-950/50 transition-shadow duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white border-b border-teal-300 dark:border-teal-700 pb-2">
              Backend & DB
            </h3>
            <div className="flex flex-wrap justify-start gap-5">
              {backendDBSkills.map((skill) => (
                <TechIconItem key={skill.name} {...skill} />
              ))}
            </div>
          </section>
        </div>

        {/* Soft Skills */}
        <section className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl dark:shadow-gray-950/50 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-teal-600 dark:text-teal-400 dark:border-teal-400">
            Soft Skills
          </h3>
          <ul className="list-none space-y-3 pl-0">
            {softSkills.map((skill, index) => (
              <SoftSkillItem key={index} skill={skill} />
            ))}
          </ul>
        </section>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
