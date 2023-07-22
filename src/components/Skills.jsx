import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { primary_skills, secondary_skills } from "../constants";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{ color: "#E7463A" }}>
          About My Skills.
        </h2>

        <div>
          <div className="mt-10">
            <p
              className={styles.sectionSubText}
              style={{ marginBottom: "20px", color: "#E7463A" }}
            >
              Primary Skills
            </p>
            <div className="flex flex-row flex-wrap justify-center">
              {primary_skills.map((skill) => (
                <div className="w-20 h-20" key={skill.name}>
                  <img
                    className={styles.skillIcon}
                    src={skill.icon}
                    alt=""
                    title=""
                  />{" "}
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <p
              className={styles.sectionSubText}
              style={{ marginBottom: "20px", color: "#E7463A" }}
            >
              Secondary Skills
            </p>
            <div className="flex flex-row flex-wrap justify-center">
              {secondary_skills.map((skill) => (
                <div className="w-20 h-20" key={skill.name}>
                  <img
                    className={styles.skillIcon}
                    src={skill.icon}
                    alt=""
                    title=""
                  />{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
