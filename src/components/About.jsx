import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import StarsCanvas from "./canvas/Stars";

const About = () => {
  return (
    <div className="mt-40">
      <StarsCanvas />
      <motion.div variants={textVariant()}>
        <div className="flex flex-row gap-10">
          <div>
            <h2 className={styles.sectionHeadText} style={{ color: "#E7463A" }}>
              About Me.
            </h2>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[#ffff] text-[17px] max-w-3xl leading-[30px]"
            >
              I'm a skilled software developer with experience in JavaScript,
              Python and expertise in frameworks like React, Node.js, Express,
              Tailwind, Material UI, Sass, and FastAPI. I'm a quick learner and
              collaborate closely with clients to create efficient, scalable,
              and user-friendly solutions that solve real-world problems. Let's
              work together to bring your ideas to life!
            </motion.p>
            <div className="mt-5 ">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://rxresu.me/ha5403905/portfolio"
              >
                <button className="bg-[#E7463A] py-2 px-3 rounded-xl outline-none w-fit text-white hover:bg-white hover:text-[#E7463A] font-bold shadow-md shadow-primary">
                  View Resume
                </button>{" "}
              </a>
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
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
