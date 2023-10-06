import React from "react";

const ProjectRequirements = ({ requirements }) => {
  return (
    <div className="project-requirements">
      <div className="title">Project Requirements</div>
      <ul>
        {requirements?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectRequirements;
