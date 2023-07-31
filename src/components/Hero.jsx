import StarsCanvas from "./canvas/Stars";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { TypeAnimation } from "react-type-animation";
import dp from "../assets/dp.png";
import ParallaxText from "./ParallaxText";

const Hero = () => {
  return (
    <section id="hero" className={`relative w-full h-screen mx-auto`}>
      <StarsCanvas />
      <div
        id="main"
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
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideIn("left", "tween", 0.2, 0.5)} // Adjust the direction, type, delay, and duration as needed
        >
          <div id="info">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#E7463A]">Ahmad</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop full-stack web applications in <span></span>
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
            <p>The best way to predict the future is to code it!</p>
          </div>
        </motion.div>

        {/* <span id="profile-img">
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
            width={500}
            height={500}
          />
        </span> */}
      </div>

      <div
        className="absolute bottom-0 left-0 w-full"
        style={{ color: "#E7463A" }}
      >
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
    </section>
  );
};

export default Hero;
