import React from "react";

const ProjectGallery = ({ images }) => {
  return (
    <div className="project-gallery">
      {images?.map((item, index) => {
        return (
          <img
            key={index}
            className="image"
            src={item}
            alt={`mudar-galleria-${index}`}
          />
        );
      })}
    </div>
  );
};

export default ProjectGallery;
