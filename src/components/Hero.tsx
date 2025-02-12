import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section className="max-w-6xl text-white h-[84vh] flex justify-center items-center py-12 px-6 md:px-32 lg:px-12">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <p className="text-lg lg:text-2xl text-blue-500 dark:text-green-400 font-medium mb-4">
          Hola, mi nombre es
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#8F98B7] dark:text-[#D0DAFA] mb-4">
          Camilo González.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-4">
          Desarrollador Fullstack.
        </h2>
        <p className="text-xl sm:text-base md:text-lg font-normal text-[#374151] dark:text-gray-400 max-w-3xl leading-relaxed mb-4">
          Soy un desarrollador Full Stack especializado en la creación de experiencias digitales excepcionales.
          Me enfoco en construir productos accesibles y centrados en el usuario. Tengo experiencia en el desarrollo
          de plataformas web interactivas, diseño responsivo y optimización del rendimiento.
        </p>
        <a
          href="#contacto"
          className="inline-block mt-6 px-5 sm:px-6 py-2 sm:py-3 font-semibold border border-blue-500 text-blue-500 rounded-md 
             hover:bg-blue-500 hover:text-[#0F172A] dark:border-green-400 dark:text-green-400 
             dark:hover:bg-green-400 dark:hover:text-[#0F172A] transition"
        >
          Contáctame
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
