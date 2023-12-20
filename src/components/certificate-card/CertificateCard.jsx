import React, { useState } from "react";
import "./CertificateCard.scss";
import SkeletonLoader from "../skelton/SkeletonLoader";

const CertificateCard = ({ title, url, image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div className="certificate-card animate__animated animate__fadeIn">
      <div className="image">
        {!imageLoaded && (
          <SkeletonLoader />
        )}
        <img
          src={image}
          alt={title}
          loading="eager"
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoaded} />
      </div>
      <div className="desc">{title}</div>
    </div>
  );
};

export default CertificateCard;
