import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Salut, c'est <span className='text-[#915EFF]'>Romain</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 cursor-pointer`}>
            J'ai 25 ans, je suis à Bordeaux et je suis un développeur web
          </p>
          <div className="inline-flex items-center px-3 py-1 mt-6 text-sm font-semibold rounded-full border-2 border-[#915EFF] shadow-md transition duration-300 hover:bg-green-500">
            <span className="h-2 w-2 bg-[#915EFF] rounded-full mr-2"></span>
            <p className={`text-[17px] text-secondary text-white-100`}>
              Disponible à l'emploi
            </p>
          </div>
        </div>
        
        
        
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
