import React from "react";
import "./ServiceCard.scss";
const ServiceCard = ({ title, desc }) => {
  return (
    <div className="service-card animate__animated animate__fadeIn">
      <div className="title">{title}</div>
      <div className="desc">
        {desc?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
