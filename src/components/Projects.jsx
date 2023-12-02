import React, { useState } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import { textVariant, slideIn, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
// import StarsCanvas from "./canvas/Stars";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const categories = [...Object.keys(projects)];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filterProjects = (projects, keyword) => {
    return projects.filter((project) => {
      const projectName = project.name.toLowerCase();

      // Check if 'tags' is an array before using 'map'
      const tags = Array.isArray(project.tags)
        ? project.tags.map((tag) => tag.name.toLowerCase())
        : [];

      return (
        projectName.includes(keyword.toLowerCase()) ||
        tags.some((tag) => tag.includes(keyword.toLowerCase()))
      );
    });
  };

  const filteredProjects = filterProjects(
    selectedCategory === "all"
      ? categories.flatMap((category) => projects[category])
      : projects[selectedCategory] || [],
    searchInput
  );

  return (
    <div >
      {/* <StarsCanvas /> */}
      <h2 className={`${styles.sectionHeadText}`} style={{ color: "#E7463A" }}>
        Projects.
      </h2>
      <div style={{ textAlign: "center" }}>
        <input
          style={{
            borderRadius: "5px",
            backgroundColor: "white",
            width: "270px",
            height: "30px",
            textAlign: "center",
          }}
          type="text"
          name="user_search"
          id="user_search"
          placeholder="search by project or tag name..."
          value={searchInput}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="categorySelect" className="text-[#E7463A]">
          <b>Select category:</b> &nbsp;
        </label>
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            borderRadius: "10px",
            backgroundColor: "#E7463A",
            marginTop: "10px",
            marginBottom: "10px",
            width: "60px",
          }}
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      {selectedCategory === "all" ? (
        categories.map((category, categoryIndex) => (
          <motion.div
            key={`category-${categoryIndex}`}
            initial="hidden"
            animate="show"
            variants={slideIn("left", "tween", 0.2, 0.5)}
          >
            <h2
              className={`${styles.heroSubText}`}
              style={{ color: "#E7463A" }}
            >
              <b>{category}.</b>
            </h2>
            {projects[category]?.length > 0 ? (
              <div className="project-list mt-10 mb-10 gap-10">
                {projects[category].map((project, index) => (
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                  />
                ))}
              </div>
            ) : (
              <p className="text-[#ffff] text-[17px] mb-10">
                {category} Coming Soon.
              </p>
            )}
          </motion.div>
        ))
      ) : (
        <div>
          <h2
            className={`${styles.heroSubText}`}
            style={{ color: "#E7463A", textAlign: "center" }}
          >
            <b>{selectedCategory === "all" ? "All" : selectedCategory}.</b>
          </h2>
          {filteredProjects.length > 0 ? (
            <div className="project-list mt-10 mb-10 gap-10">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              ))}
            </div>
          ) : (
            <p className="text-[#ffff] text-center text-[17px] mb-10">
              {searchInput
                ? `No projects found for "${searchInput}" in the ${selectedCategory} category.`
                : `${selectedCategory} Coming Soon.`}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
