import React, { useState } from "react";
import { Image } from "primereact/image";
import SkeletonLoader from "../../../components/skelton/SkeletonLoader";

const ProjectGallery = ({ images }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };
  console.log(imageLoaded)
  return (
    <div className="project-gallery">
      <div className="title">Project Gallery</div>
      <div className="images-container">
        {images?.map((item, index) => {
          return (
            <div key={index}>
              {!imageLoaded && (
                <SkeletonLoader />
              )}
              <Image
                className="image"
                src={item}
                alt={`mudar-galleria-${index}`}
                loading="eager"
                preview
                downloadable
                children={document.querySelector(".project-gallery")}
                style={{ display: imageLoaded ? "block" : "none" }}
                onLoad={handleImageLoaded}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGallery;
