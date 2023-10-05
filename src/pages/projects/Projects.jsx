import React from "react";
import "./Projects.scss";
import { projects } from "./data";
import ProjectCard from "../../components/project-card/ProjectCard";
const Projects = () => {
  return (
    <div className="projects">
      {projects.map((item, index) => {
        return (
          <ProjectCard
            key={index}
            desc={item.desc}
            src={item.src}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

export default Projects;
