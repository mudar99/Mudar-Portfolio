import React from "react";
import "./Certificates.scss";
import { certificates } from "./data";
import { Link } from "react-router-dom";
import CertificateCard from "../../components/certificate-card/CertificateCard";

const Certificates = () => {
    return (
        <div className="certificates">
            <div className="certificates-container">
                {certificates.map((item, index) => {
                    return (
                        <Link to={item.url} key={index}>
                            <CertificateCard title={item.title} url={item.url} image={item.image} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Certificates;
