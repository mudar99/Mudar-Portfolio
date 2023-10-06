import React, { useEffect, useState } from "react";
import ProjectDescription from "./components/ProjectDescription";
import ProjectTitle from "./components/ProjectTitle";
import ProjectTechnologies from "./components/ProjectTechnologies";
import ProjectGallery from "./components/ProjectGallery";
import ProjectDemo from "./components/ProjectDemo";
import { useParams } from "react-router-dom";
import { askFreelancer, repoSharing, salleh, serveMe, tws } from "./data";
import "./Project.scss";
import ProjectRequirements from "./components/ProjectRequirements";
const Project = () => {
  const { projectName } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    switch (projectName) {
      case "ask-freelancer":
        setData(askFreelancer);
        break;
      case "salleh":
        console.log("first");
        setData(salleh);
        break;
      case "serve-me":
        setData(serveMe);
        break;
      case "repo-sharing":
        setData(repoSharing);
        break;
      case "tws":
        setData(tws);
        break;
      default:
        break;
    }
    return () => {
      setData(undefined);
    };
  }, [projectName, data]);
  return (
    <div className="project">
      <ProjectTitle title={data?.title} />
      <ProjectDescription desc={data?.desc} />
      <div className="sections">
        <ProjectTechnologies technologies={data?.technologies} />
        <ProjectRequirements requirements={data?.requirements} />
      </div>
      <ProjectGallery images={data?.gallery} />
      <ProjectDemo video={data?.demo} />
    </div>
  );
};

export default Project;
