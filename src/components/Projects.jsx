import React from "react";

import "./Projects.scss";
import { BiLink } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FacebookShareButton } from "react-share";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import StarsCanvas from "./canvas/Stars";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <div>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 80, opacity: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="card">
          <div className="card-info">
            <img src={image} alt="" />
          </div>
          <div className="card-bio">
            <div>
              <h3
                className="text-[#E7463A] font-bold text-[24px]"
                variants={textVariant(index * 0.1)}
              >
                {name}
              </h3>
              <p
                className="mt-2 text-[#ffff] text-[14px]"
                variants={textVariant(index * 0.1 + 0.2)}
              >
                {description}
              </p>
              <div className="mt-5">
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                    variants={fadeIn("up", "spring", index * 0.1 + 0.4, 1)}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
              <div className="flex justify-center">
                <FacebookShareButton
                  quote="PowerX App"
                  hashtag={"#webdevelopment"}
                  url={"https://www.facebook.com/"}
                >
                  <span>
                    <GrFacebookOption className="icon" />
                  </span>
                </FacebookShareButton>
                <a target={"_blank"} href={website_link}>
                  <span>
                    <BiLink className="icon" />
                  </span>
                </a>
                {/* <a target={"_blank"} href={source_code_link}>
                  <span>
                    <FaGithubAlt className="icon" />
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <StarsCanvas />

      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText}`}
          style={{ color: "#E7463A" }}
        >
          Portfolio.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-[#ffff] text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos. They reflect my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className="project-list mt-10 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
