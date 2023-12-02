import { BiLink } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FacebookShareButton } from "react-share";
import { motion } from "framer-motion";
import { textVariant, slideIn, fadeIn } from "../utils/motion";


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
            <img src={image} alt="img" />
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
                {tags.map((tag, tagIndex) => (
                  <p
                    key={`${name}-${tagIndex}`}
                    className={`text-[14px] ${tag.color}`}
                    variants={fadeIn("up", "spring", index * 0.1 + 0.4, 1)}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
              <div className="flex justify-center">
                <FacebookShareButton
                  quote={name}
                  hashtag={"#webdevelopment"}
                  url={website_link}
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
                <a target={"_blank"} href={source_code_link}>
                  <span>
                    <FaGithubAlt className="icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;