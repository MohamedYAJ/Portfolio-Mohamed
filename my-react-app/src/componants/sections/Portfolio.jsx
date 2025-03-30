  import React, { useState } from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { motion } from "framer-motion";
  import "swiper/css";
  import meetic from "/assets/meetic.png";
  import twitter from "/assets/twitter.png";
  import maquette from "/assets/maquette.png";
  import connect4 from "/assets/connect4.png";
  import mycinema from "/assets/mycinema.png";
  import responsive from "/assets/responsive.png";


  const projects = [
    { title: "Meetic", img: meetic, description: "Reproduction du site meetic en php et MySQL, projet de 2 semaines."    },
    { title: "Twitter", img: twitter, description: "Projet de groupe de 1 mois fait en php, MySQL, Tailwind et javascript." },
    { title: "HTML/CSS Maquette", img: maquette, description: "Maquette d'introduction réalisé en debut d'année en HTML et CSS" },
    { title: "Puissance 4", img: connect4, description: "Jeu puissance 4 rélalisé en javascript, projet de 2 semaines." },
    { title: "My Cinema", img: mycinema, description: "Projet my cinema réalisé en 2 semaines avec php et Mysql, reproduisant l'espace admin d'un cinema." },
    { title: "Mauette Responsive", img: responsive, description: "Réalisation d'une maquette responsive sur web, mobile et tablette, projet de 2 semaines en HTML et CSS." }
  ];

  const ProjectCard = ({ project }) => {
    const [flipped, setFlipped] = useState(false);

    return (
      <div
        className="perspective-1000 w-[19rem] h-[12rem] cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute w-full h-full rounded-lg shadow-lg backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full"
              style={{
                filter: "drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))",
                borderRadius: "19px"
              }}
            />
          </div>

          <div
            className="absolute w-full h-full flex flex-col items-center justify-center bg-[#1b1b3a] text-white p-4 rounded-lg"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-lg text-gray-300 mt-2 text-center">{project.description}</p>
          </div>
        </motion.div>
      </div>
    );
  };

  const Portfolio = () => {
    return (
      <div id="Projets" className="portfolio text-white p-10">
        <h2 className="text-4xl font-bold text-center mb-8">Projets Récents</h2>


        <Swiper
  spaceBetween={10}
  slidesPerView={"auto"}
  grabCursor={true}
  centeredSlides={false}
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  breakpoints={{
    320: { slidesPerView: 1 }, 
    768: { slidesPerView: 2 }, 
    1024: { slidesPerView: 3 }, 
  }}
  className="portfolio-slider"
>
  {projects.map((project, index) => (
    <SwiperSlide key={index}>
      <ProjectCard project={project} />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    );
  };

  export default Portfolio;
