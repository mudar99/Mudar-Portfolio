import React, { useState } from "react";
import "./CertificateCard.scss";

const CertificateCard = ({ title, url, image }) => {
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
    <div className="certificate-card animate__animated animate__fadeIn">
      <div className="image">
        {isLoading ?
          <img
            src={image}
            alt={title}
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError} />
          : <div>Loading ...</div>
        }
      </div>
      <div className="desc">{title}</div>
    </div>
  );
};

export default CertificateCard;
