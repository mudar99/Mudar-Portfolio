import React, { useState } from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ title, src, desc }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
    console.log("Done")
    // Additional logic when image loading is completed
    setIsLoading(true);
  };

  const handleError = () => {
    setIsLoading(false);
    console.log("Error")
    // Additional logic for handling image load error
  };
  return (
    <div className="project-card animate__animated animate__fadeIn">
      <div className="image">
        {isLoading ?
          <img
            src={src}
            alt={title}
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError} />
          : <div>Loading ...</div>
        }
        <div className="title">{title}</div>
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default ProjectCard;
