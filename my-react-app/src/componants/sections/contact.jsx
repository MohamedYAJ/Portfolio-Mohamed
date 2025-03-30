import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_rfu6lpg', 'template_eajungf', form.current, {
        publicKey: 'M2kL7cOxiEx_AG7Il',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Merci, je vous réponds au plus vite !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 lg:gap-10 mt-10 mb-10 px-6 text-white"
    >
      <motion.div className="grid grid-cols-1 gap-6 text-center lg:text-left">
        <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          <a className="animate-pulse cursor-pointer" href="https://www.linkedin.com/in/mohamedyajjou/">
            <FaLinkedin size={60} color="#0A66C2" className="mb-4" />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          <a className="animate-pulse cursor-pointer" href="https://github.com/MohamedYAJ">
            <FaGithub size={60} color="black" className="mb-4" />
          </a>
        </motion.div>
      </motion.div>

      <div id="Contact" className="bg-[#1b1b3a] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-4">Contactez-moi !</h1>
        <form className="flex flex-col space-y-7" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Votre Nom"
            name="name"
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none border border-gray-600" required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre Email"
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none border border-gray-600" required
          />
          <textarea
            placeholder="Votre Message"
            name="message"
            className="p-3 h-32 rounded-md bg-gray-800 text-white focus:outline-none border border-gray-600 resize-none" required
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-90 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition-all cursor-pointer"
          >
            Envoyer
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
