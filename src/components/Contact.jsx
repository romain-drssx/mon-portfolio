import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Restons connectés</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className="flex justify-center">
          <div className="inline-flex align-center px-3 py-1 mt-6 text-sm font-semibold rounded-full border-2 border-white shadow-md transition duration-300 hover:bg-white cursor-pointer">
            <a className={`text-secondary text-white-100 hover:text-black-100`} href="mailto:dudu.romain.8@gmail.com">
              dudu.romain.8@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a className='mt-3 text-secondary text-[17px] text-white-100 max-w-3xl leading-[30px] font-semibold' href="tel:0637757670">
            06 37 75 76 70
          </a>
        </div>
        
        <div className="flex justify-center">
          <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="flex justify-center mt-2">
          <div className="inline-flex align-center px-3 py-1 mt-6 text-sm font-semibold rounded-full border-2 border-white shadow-md transition duration-300 hover:bg-white cursor-pointer">
            <a href="./../../CV 2025 - Romain DURAYSSEIX.pdf" download="CV 2025 - Romain DURAYSSEIX.pdf" className={`text-secondary text-white-100 hover:text-black-100`}>
              Télécharger mon CV
            </a>
          </div>
        </div>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
