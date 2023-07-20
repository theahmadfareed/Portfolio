import StarsCanvas from "./canvas/Stars";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";
import dp from "../assets/dp.png";

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
            I develop full-stack web applications in <span></span>
            {/* <br className="sm:block hidden " /> */}
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
          <p>Turning ideas into real life projects is my calling.</p>
        </div>
        <span>
          <motion.img
            animate={{
              borderRadius: [
                "72% 78% 72% 68% / 51% 30% 70% 49% ",
                "43% 57% 29% 71% / 63% 40% 60% 37% ",
                "30% 70% 61% 39% / 63% 40% 60% 37% ",
                "30% 70% 61% 39% / 39% 56% 44% 61% ",
                "50% 50% 42% 58% / 36% 49% 51% 64% ",
                "48% 52% 42% 58% / 68% 37% 63% 32% ",
              ],
            }}
            transition={{
              type: "spring",
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            src={dp}
            alt=""
          />
        </span>
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
