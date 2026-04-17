import React from "react";
import { motion } from "framer-motion";

const getImage = (name) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${name}`;
};

const projectsData = [
  {
    title: "Pagina WEB Oficial de la Universidad de Guayaquil",
    description:
      "Sección de Decanato de Posgrado, Educacion Continua, mejora en breakpoint, actualización de contenidos y mejora de diseño responsivo.",
    imageSrc: getImage("cap_ug.png"),
    techStack: [
      "devicon-wordpress-plain colored",
      "devicon-css3-plain colored",
      "devicon-bootstrap-plain colored",
      "devicon-php-plain colored",
      "devicon-tailwindcss-plain colored",
      "devicon-javascript-plain colored",
      "devicon-html5-plain colored",
    ],
    demoLink: "https://vigcyp.ug.edu.ec/posgrado_inicio/educacion_continua/",
    githubLink: "not found",
  },
  {
    title: "Landing Page para Souvenirs Turísticos",
    description:
      "Desarrollo de una landing page estática para emprendimiento de souvenirs turísticos. Enfocado en diseño responsivo y optimización SEO.",
    imageSrc: getImage("cap_luxore.png"),
    techStack: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
    ],
    demoLink: "https://luxore-ec.github.io/luxorepage/",
    githubLink: "https://github.com/g-cruz-dev/Portafolio/tree/gh-pages",
  },
  {
    title: "Sistema para Suscripción a Cursos",
    description:
      "Sistema web Full-Stack para la gestión y suscripción de cursos en línea. Utilizando tecnologías empresariales y modernas.",
    imageSrc: getImage("cap_luxore.png"),
    techStack: [
      "devicon-java-plain colored",
      "devicon-spring-plain colored",
      "devicon-react-original colored",
      "devicon-postgresql-plain colored",
      "devicon-tailwindcss-plain colored",
    ],
    demoLink: "not found", // Caso sin demo
    githubLink: "not found", // Caso sin repo -> Mostrará "Privado"
  },
  {
    title: "Sistema de Monitoreo de Incidentes",
    description:
      "Desarrollo de un sistema web para monitorear incidentes en tiempo real, mejorando la respuesta operativa.",
    imageSrc: getImage("cap_luxore.png"),
    techStack: [
      "devicon-java-plain colored",
      "devicon-spring-plain colored",
      "devicon-react-original colored",
      "devicon-postgresql-plain colored",
      "devicon-tailwindcss-plain colored",
    ],
    demoLink: "not found",
    githubLink: "not found",
  },
  {
    title: "Sistema de Control de Citas Médicas",
    description:
      "Sistema web para la gestión eficiente de citas médicas y control de pacientes, utilizando base de datos NoSQL.",
    imageSrc: getImage("cap_luxore.png"),
    techStack: [
      "devicon-java-plain colored",
      "devicon-spring-plain colored",
      "devicon-react-original colored",
      "devicon-mongodb-plain colored",
      "devicon-tailwindcss-plain colored",
    ],
    demoLink: "not found",
    githubLink: "not found",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

const TechIcon = ({ deviconClass }) => (
  <i className={`${deviconClass} text-2xl`} role="img"></i>
);

const ProjectCard = ({
  title,
  description,
  imageSrc,
  techStack,
  demoLink,
  githubLink,
}) => {
  // Función de utilidad para validar si el link existe y es válido
  const isValidLink = (link) => link && link !== "not found" && link !== "";

  const hasDemo = isValidLink(demoLink);
  const hasGit = isValidLink(githubLink);

  return (
    <motion.article
      className="project-card flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl dark:shadow-gray-950/50 transition-all duration-300 group"
      variants={cardVariants}
      whileHover="hover"
    >
      <header>
        <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img
            src={imageSrc}
            alt={`Captura de pantalla de ${title}`}
            loading="eager"
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>
        <h3 className="text-xl font-bold p-4 pb-0 text-gray-900 dark:text-white group-hover:text-teal-600 transition duration-300 hover-glow">
          {title}
        </h3>
      </header>

      <div className="p-4 pt-2 flex flex-col flex-grow">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-grow">
          {description}
        </p>

        <footer className="mt-4">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {techStack.map((techClass, index) => (
              <TechIcon key={index} deviconClass={techClass} />
            ))}
          </div>

          <div className="flex items-center space-x-4 h-10">
            {/* Lógica de botones */}
            {hasDemo && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors group-hover:underline"
              >
                <i className="bi bi-link-45deg text-lg"></i>
                <span>Demo Live</span>
              </a>
            )}

            {hasGit && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                <i className="devicon-github-original text-lg"></i>
                <span>GitHub</span>
              </a>
            )}

            {/* Caso Ingenioso: Si no tiene ninguna de las dos */}
            {!hasDemo && !hasGit && (
              <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                <i className="bi bi-lock-fill"></i>
                <span className="uppercase tracking-wider">
                  Proyecto Privado / NDA
                </span>
              </div>
            )}
          </div>
        </footer>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      aria-labelledby="projects-heading"
      className="space-y-8 max-w-7xl mx-auto p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2
        id="projects-heading"
        className="text-3xl font-bold text-center text-gray-900 dark:text-white"
      >
        Proyectos Destacados 🚀
      </h2>

      <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
