import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "¿Qué Estudios tienes?",
    answer:
      "Estudiante de Ingeniería en Sistemas de Información en la Universidad de Guayaquil durante 5 años.",
  },
  {
    question: "¿Cuáles son tus hobbies?",
    answer: "Practicar deportes al aire libre. Disfruto de la música.",
  },
  {
    question: "¿Qué lenguajes y frameworks dominas?",
    answer: `
      <span class="text-teal-600 dark:text-teal-400 font-bold">Lenguajes:</span> 
      <span class="font-semibold">Java</span>, <span class="font-semibold">JavaScript</span>, <span class="font-semibold">HTML</span>, <span class="font-semibold">CSS</span>.<br>
      <span class="text-teal-600 dark:text-teal-400 font-bold">Frameworks / Librerías:</span> 
      <span class="font-semibold">Spring Boot</span> <span class="text-teal-600 dark:text-teal-400">(Backend)</span>, 
      <span class="font-semibold">React.js</span> <span class="text-teal-600 dark:text-teal-400">(Frontend)</span>, 
      <span class="font-semibold">Tailwind CSS</span>.
    `,
    isHTML: true,
  },
  {
    question: "¿Tienes experiencia en desarrollo web?",
    answer:
      "Sí, he trabajado en varios proyectos de desarrollo web (Full-Stack).",
  },
  {
    question: "¿Qué bases de datos manejas?",
    answer: "PostgreSQL, MySQL, MongoDB y Firebase.",
  },
  {
    question: "¿Tienes experiencia en desarrollo móvil?",
    answer:
      "No, actualmente mi enfoque principal está en el desarrollo web Full-Stack con Spring Boot y React.",
  },
  {
    question: "¿Cómo puedo contactarte?",
    answer:
      "Puedes usar el formulario de contacto de esta página, o contactarme vía LinkedIn/WhatsApp.",
  },
];

const FAQItem = ({ question, answer, isHTML = false }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg cursor-pointer border-l-4 border-teal-500 dark:border-teal-400"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between font-semibold text-lg text-gray-900 dark:text-white">
        {question}
        <motion.svg
          className={`w-6 h-6 text-teal-500 dark:text-teal-400 transition-transform duration-300`}
          style={{ rotate: isOpen ? 180 : 0 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </motion.svg>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-base text-gray-700 dark:text-gray-300"
          >
            {isHTML ? (
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            ) : (
              <span>{answer}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <section
      aria-labelledby="faq-heading"
      className="lg:grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto p-4 md:p-8"
    >
      <div className="lg:col-span-1">
        <h2
          id="faq-heading"
          className="text-3xl font-bold mb-4 pb-2 text-gray-900 dark:text-white border-b border-teal-600 dark:border-teal-400"
        >
          Preguntas Frecuentes
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Respuestas rápidas sobre mi perfil y tecnologías.
        </p>
      </div>

      <div className="lg:col-span-3 space-y-4 mt-6 lg:mt-0">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
