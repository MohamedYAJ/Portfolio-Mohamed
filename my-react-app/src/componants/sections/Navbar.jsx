import { Link } from "react-scroll"; 
import { FaBars, FaTimes } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";
import codeimg from "/assets/codage.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-around items-center p-5 bg-[#1b1b3a] fixed w-full top-0 z-20">
      <div className="ml-5">
        <h1 className="text-white text-4xl">YAJJOU Mohamed</h1>
        <h2 className="text-2xl text-white flex items-center">
          Développeur web
          <img className="w-9 h-auto ml-2 animate-bounce" src={codeimg} alt="code" />
        </h2>
        <h6 className="text-xl text-white flex items-center mt-1">
          En recherche d'alternance
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <button>
              <a href="/assets/CV_Mohamed.pdf" download="Mohamed YAJJOU">
                <TbFileCv size={40} className="ml-2" />
              </a>
            </button>
          </motion.div>
        </h6>
      </div>

      <ul className="hidden md:flex text-white text-2xl gap-9">
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="Projets"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Projets
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="Expérience"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Expérience
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </motion.li>
      </ul>

      <button
        className="md:hidden text-white text-3xl mr-5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 right-5 bg-[#1b1b3a] p-5 rounded-lg shadow-lg md:hidden"
        >
          <ul className="flex flex-col text-white text-2xl gap-4">
            <Link
              onClick={() => setMenuOpen(false)}
              to="Projets"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Projets
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Expérience"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Expérience
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
