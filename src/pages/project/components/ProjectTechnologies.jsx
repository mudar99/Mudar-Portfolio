import React from "react";

const ProjectTechnologies = ({ technologies }) => {
  return (
    <div className="project-technologies">
      <div className="title">Project Technologies</div>
      <ul>
        {technologies?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectTechnologies;