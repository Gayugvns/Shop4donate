import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from "i18next";

// i18n configuration
i18next.use(initReactI18next).init({
  resources: {
    "en-US": {
      translation: {
        contact: "Contact Us",
        description: "Have questions or want to learn more about Shop4Donate? We'd love to hear from you.",
        emailUs: "Email Us",
        general: "General",
        partnerships: "Partnerships",
        callUs: "Call Us",
        hours: "Mon - Fri, 9am - 5pm EST",
        visitUs: "Visit Us",
        sendMessage: "Send Us a Message",
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Your message",
        send: "Send Message",
        allFields: "All fields are required.",
        success: "Thank you! Your message has been sent.",
        error: "Oops! Something went wrong.",
        weWillReachOutSoon: "We’ll get back to you shortly.",
      },
    },
    "en-GB": {
      translation: {
        contact: "Contact Us",
        description: "Have questions or want to learn more about Shop4Donate? We'd love to hear from you.",
        emailUs: "Email Us",
        general: "General",
        partnerships: "Partnerships",
        callUs: "Call Us",
        hours: "Mon - Fri, 9am - 5pm GMT",
        visitUs: "Visit Us",
        sendMessage: "Send Us a Message",
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Your message",
        send: "Send Message",
        allFields: "All fields are required.",
        success: "Thank you! Your message has been sent.",
        error: "Oops! Something went wrong.",
        weWillReachOutSoon: "We’ll get back to you shortly.",
      },
    },
    es: {
      translation: {
        contact: "Contáctenos",
        description: "¿Tiene preguntas o quiere saber más sobre Shop4Donate? Nos encantaría saber de usted.",
        emailUs: "Envíanos un correo",
        general: "General",
        partnerships: "Alianzas",
        callUs: "Llámanos",
        hours: "Lun - Vie, 9am - 5pm EST",
        visitUs: "Visítanos",
        sendMessage: "Envíanos un mensaje",
        name: "Tu nombre",
        email: "Tu correo",
        subject: "Asunto",
        message: "Tu mensaje",
        send: "Enviar mensaje",
        allFields: "Todos los campos son obligatorios.",
        success: "¡Gracias! Tu mensaje ha sido enviado.",
        error: "¡Ups! Algo salió mal.",
        weWillReachOutSoon: "Nos pondremos en contacto contigo pronto.",
      },
    },
  },
  lng: "en-US", // or "en-GB" depending on the user
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

const motivationalQuotes = [
  "Your support can change a life.",
  "Small acts, big impact.",
  "Donate with purpose.",
  "Together, we make a difference.",
  "Kindness is contagious – spread it.",
];

const ContactUsSection = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageToggle = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    i18next.changeLanguage(newLang);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error(t("allFields"));
      return;
    }

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID || "YOUR_USER_ID" // Replace with your EmailJS Public Key
      );
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 4000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error(t("error"));
      console.error(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          .input-style {
            border: none;
            border-bottom: 2px solid #e5e7eb;
            background: transparent;
            padding: 12px 16px;
            transition: all 0.3s ease;
            border-radius: 0;
          }
          .input-style:focus {
            outline: none;
            border-bottom: 2px solid #3b82f6;
            background: rgba(255, 255, 255, 0.05);
          }
          .input-style::placeholder {
            color: #9ca3af;
          }
        `}
      </style>
      <section className="min-h-screen bg-transaprent text-white px-2 py-16 font-sans relative overflow-hidden">
        <Toaster />

        {/* Language Switcher */}
        <div className="max-w-7xl mx-auto flex justify-end">
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-white bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition"
          >
            {language === "en" ? "ES" : "EN"}
          </button>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Large Motivational Quote */}
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {motivationalQuotes[quoteIndex]}
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Section */}
            <div className="space-y-10">
              <h2 className="text-3xl font-bold">{t("contact")}</h2>
              <p className="text-lg text-white/80">{t("description")}</p>

              <div>
                <h4 className="font-semibold">{t("emailUs")}</h4>
                <p className="text-sm">
                  {t("general")}:{" "}
                  <a href="mailto:info@shop4donate.com" className="text-white hover:text-blue-200">
                    xcodefix@shop4donate.com
                  </a>
                </p>
                <p className="text-sm">
                  {t("partnerships")}:{" "}
                  <a href="mailto:partnerships@shop4donate.com" className="text-white hover:text-blue-200">
                    partnerships@shop4donate.com
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-semibold">{t("callUs")}</h4>
                <p className="text-sm text-white/80">{t("hours")}</p>
                <a href="tel:+18001234567" className="text-sm text-white hover:text-blue-200">
                9865236003
                </a>
              </div>

              <div>
                <h4 className="font-semibold">{t("visitUs")}</h4>
                <p className="text-sm">
                198, VKV Complex,
Nehru Street,<br/> Ramnagar,

<br />
Gandhipuram,<br />
Coimbatore - 641009 <br />
Tamilnadu, India
                </p>
              </div>
            </div>

            {/* Right Section - Modern Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white">{t("sendMessage")}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder={t("name")}
                    className="input-style text-white placeholder-white/50"
                    value={formData.name}
                    onChange={handleInput}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.input
                    type="email"
                    name="email"
                    placeholder={t("email")}
                    className="input-style text-white placeholder-white/50"
                    value={formData.email}
                    onChange={handleInput}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <motion.input
                  type="text"
                  name="subject"
                  placeholder={t("subject")}
                  className="input-style w-full text-white placeholder-white/50"
                  value={formData.subject}
                  onChange={handleInput}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.textarea
                  name="message"
                  rows="5"
                  placeholder={t("message")}
                  className="input-style w-full text-white placeholder-white/50"
                  value={formData.message}
                  onChange={handleInput}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-indigo-700 transition-all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {t("send")}
                </motion.button>
              </form>
            </div>
          </div>

          {/* Google Map Embedding */}
          <div className="mt-12">
            <h4 className="font-bold text-white text-4xl mb-10">{t("visitUs")}</h4>
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3087783522255!2d76.95953957402048!3d11.015443554741555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85902c309d96f%3A0x882d7922882a99e8!2skickvy%20technology!5e0!3m2!1sen!2sin!4v1745059212476!5m2!1sen!2sin"
  width="1200"
  height="550"
  style={{ border: "0" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
