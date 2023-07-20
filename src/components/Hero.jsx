import StarsCanvas from "./canvas/Stars";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="hero" className={`relative w-full h-screen mx-auto`}>
      <StarsCanvas />

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#E7463A]" />
          <div
            className="w-1 sm:h-80 h-40"
            style={{
              backgroundImage: "linear-gradient(to top, #0e0f10, #E7463A)",
            }}
          />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#E7463A]">Ahmad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full-stack web applications in,
            <br className="sm:block hidden " />
            <TypeAnimation
              className="text-[#E7463A]"
              cursor={false}
              sequence={["MERN", 2000, "FARM", 2000]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />{" "}
            stack.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-1 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
