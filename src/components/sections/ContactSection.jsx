import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateSubject,
  validateBody,
} from "../../hooks/useFormValidation";

const FieldWrapper = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  setValue,
  onValidate,
  validateFn,
  rows,
}) => {
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(true);

  const handleBlur = () => {
    setTouched(true);
    const isValid = validateFn ? validateFn(value) : true;
    setValid(isValid);
    onValidate && onValidate(name, isValid);
  };

  const isTextarea = type === "textarea";

  return (
    <div className="col-span-full md:col-span-1">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {isTextarea ? (
        <motion.textarea
          id={id}
          name={name}
          rows={rows || 6}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full p-3 border rounded-lg focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-400 resize-y transition duration-200 ${
            touched && !valid
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          }`}
          aria-invalid={touched && !valid}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <motion.input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full p-3 border rounded-lg focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-400 transition duration-200 ${
            touched && !valid
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          }`}
          aria-invalid={touched && !valid}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {touched && !valid && (
        <p className="text-red-500 text-sm mt-1">
          {isTextarea ? "Este campo es obligatorio." : "Valor inválido."}
        </p>
      )}
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    body: "",
  });

  const [formValidity, setFormValidity] = useState({
    name: false,
    email: false,
    phone: true,
    subject: false,
    body: false,
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleValidate = (field, isValid) =>
    setFormValidity((prev) => ({ ...prev, [field]: isValid }));

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", subject: "", body: "" });
    setFormValidity({
      name: false,
      email: false,
      phone: true,
      subject: false,
      body: false,
    });
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación final antes de enviar
    const isFormValid =
      validateName(formData.name) &&
      validateEmail(formData.email) &&
      validatePhone(formData.phone) &&
      validateSubject(formData.subject) &&
      validateBody(formData.body);

    if (!isFormValid) {
      setStatus("error");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.body,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      handleReset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl dark:shadow-gray-950/50 max-w-7xl mx-auto md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2
        id="contact-heading"
        className="text-3xl font-bold mb-6 pb-2 text-gray-900 dark:text-white border-b-2 border-teal-600 dark:border-teal-400"
      >
        Contacto Directo
      </h2>

      {loading && (
        <motion.div
          className="text-center text-teal-600 dark:text-teal-400 font-semibold text-xl py-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Enviando mensaje...
        </motion.div>
      )}

      {status && !loading && (
        <motion.div
          className={`text-center font-semibold text-xl py-10 ${
            status === "success"
              ? "text-teal-600 dark:text-teal-400"
              : "text-red-500"
          }`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {status === "success"
            ? "¡Mensaje enviado con éxito! Gracias por contactarme."
            : "Error al enviar el mensaje. Revisa los campos e intenta nuevamente."}
        </motion.div>
      )}

      {!status && !loading && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 space-y-4">
            <legend className="text-xl font-semibold px-2 dark:text-gray-300">
              Información de Contacto
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FieldWrapper
                label="Nombre Completo"
                id="name"
                name="name"
                placeholder="Ej: John Doe"
                required
                value={formData.name}
                setValue={handleChange("name")}
                onValidate={handleValidate}
                validateFn={validateName}
              />
              <FieldWrapper
                label="Correo Electrónico"
                id="email"
                name="email"
                type="email"
                placeholder="Ej: johndoe@dominio.com"
                required
                value={formData.email}
                setValue={handleChange("email")}
                onValidate={handleValidate}
                validateFn={validateEmail}
              />
              <FieldWrapper
                label="Teléfono (Opcional)"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Ej: +593 99 000 0000"
                value={formData.phone}
                setValue={handleChange("phone")}
                onValidate={handleValidate}
                validateFn={validatePhone}
              />
              <FieldWrapper
                label="Asunto"
                id="subject"
                name="subject"
                placeholder="Escribe un asunto..."
                required
                value={formData.subject}
                setValue={handleChange("subject")}
                onValidate={handleValidate}
                validateFn={validateSubject}
              />
            </div>
          </fieldset>

          <FieldWrapper
            label="Cuerpo del Mensaje"
            id="body"
            name="body"
            placeholder="Detalle su mensaje o propuesta aquí..."
            required
            type="textarea"
            rows={6}
            value={formData.body}
            setValue={handleChange("body")}
            onValidate={handleValidate}
            validateFn={validateBody}
          />

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <motion.button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 text-white bg-teal-600 rounded-full font-bold shadow-lg shadow-teal-500/50 hover:bg-teal-700 transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-700 hover-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensaje
            </motion.button>

            <motion.button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-8 py-3 text-gray-800 bg-gray-200 rounded-full font-semibold cursor-pointer shadow-md hover:bg-gray-300 transition-colors duration-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 hover-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Borrar Formulario
            </motion.button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            * Campos obligatorios
          </p>
        </form>
      )}
    </motion.section>
  );
};

export default ContactSection;
