import React from "react";

const ProjectDescription = ({ desc }) => {
  return (
    <div className="project-description">
      <div className="title">Project Description</div>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectDescription;
