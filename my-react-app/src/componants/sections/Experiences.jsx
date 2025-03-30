import { motion } from "framer-motion";
import { FaJs, FaHtml5, FaCss3Alt, FaPhp, FaReact, FaSymfony, FaSass, FaFigma, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { SiCanva } from "react-icons/si";

const experiences = [
  {
    title: "Manutention",
    company: "Adequat",
    duration: "2024",
    description: "Missions d'interim pour différents groupe comme Relais Colis, Colissimo, Cdiscount, Ciblex",
  },
  {
    title: "Restauration",
    company: "Ahmburgers",
    duration: "2022 - 2024",
    description: "Gestion du restaurant, du stock, des appels téléphoniques, des clients... Courses chez le grossiste, livraison à domicile des commandes. Cuisine (préparation de la pâte à pain, de la viande fraîche...)",
  },
  {
    title: "Technicien laboratoire",
    company: "SGS",
    duration: "2022",
    description: "Gestion des flux de glacières. Analyse d’amiante sur des bétons. Concassage de bétons pour analyse.",
  },
  {
    title: "Assistant Comptable",
    company: "Simplifya",
    duration: "2020-2022",
    description: "Gestion des dépenses, factures, rapprochement bancaire.",
  },
  {
    title: "Service civique",
    company: "Planète Sciences",
    duration: "Novembre 2019 - Janvier 2020",
    description: "Animation scientifique. Stages scientifique (cité des sciences...).",
  },
];

const Experience = () => {
  return (
    <div id="Expérience" className="p-6 md:p-10 text-white flex flex-col lg:flex-row lg:justify-between"> 
      <div className="w-full lg:w-2/3 flex flex-col lg:items-start md:items-center lg:ml-20 xl:ml-36">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
          Expériences Professionnelles
        </h2>
        <div className="relative border-l-4 border-white pl-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-6 px-4"
            >
              <div className="bg-[#1b1b3a] p-5 rounded-lg shadow-lg w-full max-w-lg">
                <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
                <p className="text-lg text-gray-300">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start mt-10 lg:mt-0 lg:mr-36">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Compétences</h2>
        <motion.div className="grid grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <FaHtml5 color="#E34F26" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <FaCss3Alt color="#1572B6" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <FaJs color="#F7DF1E" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <FaPhp color="#777BB4" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <FaSymfony color="black" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <TbSql color="orange" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <RiTailwindCssFill color="#00ACC1" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <FaReact color="#61DBFB" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <FaSass color="pink" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <FaFigma color="white" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <FaNodeJs color="green" size={100} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <SiCanva color="#00bfff" size={100} />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
