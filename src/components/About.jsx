import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ParallaxText from "./ParallaxText";
import StarsCanvas from "./canvas/Stars";

const About = () => {
  return (
    <>
      <StarsCanvas />
      <div className="flex flex-row gap-10">
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText} style={{ color: "#E7463A" }}>
              About Me.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-[#ffff] text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a skilled software developer with experience in JavaScript, PHP,
            Python and expertise in frameworks like React, Node.js, Express,
            Tailwind, Material UI, Sass, Django, Flask, and FastAPI. I'm a quick
            learner and collaborate closely with clients to create efficient,
            scalable, and user-friendly solutions that solve real-world
            problems. Let's work together to bring your ideas to life!
          </motion.p>
          <div className="mt-5">
            <a href="#contact">
              <button className="bg-[#E7463A] py-2 px-3 rounded-xl outline-none w-fit text-white hover:bg-white hover:text-[#E7463A] font-bold shadow-md shadow-primary">
                HIRE ME
              </button>
            </a>
          </div>
        </div>
        <div>
          <Skills />
        </div>
      </div>
      <div className="" style={{ color: "#E7463A" }}>
        <ParallaxText baseVelocity={-5}>
          Full_Stack_Web_Developer-Frontend_Developer-Backend_Developer-
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          Data_Engineering-Data_Analysis-Big_Data-Data_Warehouse-DBMS-Database-SQL-NoSQL-MySQL-
          PostgreSQL-MongoDB-Neo4j-
        </ParallaxText>
        <ParallaxText baseVelocity={-5}>
          Machine_Learning-Deep_Learning-Artificial_Intelligence-Data_Science-Computer_Vision-Digital_Image_Processing-
        </ParallaxText>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
