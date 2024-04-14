import React from "react";
import projects from "../styles/Projects.module.css";

export default function ProjectCard({project}) {
  return (
    <a href={project.github} target='_blank' className={projects.ProjectCard}>
      <div className={projects.ProjectCardImg}>
        <img src={project.img} className={projects.ProjectCardImgInner} alt="Project Image" />
      </div>
      <div className={projects.ProjectCardDesc}>
        <div className={projects.ProjectCardTitleContainer}>
          <div className={projects.ProjectCardTitle}>{project.title}</div>
          {/* <div className={projects.ProjectCardSubtitle}>{project.subtitle}</div> */}
        </div>
        <div className={projects.ProjectCardTechContainer}>
          <div className={projects.ProjectCardTech}>{project.tech1}</div>
          {/* {if(projects.tech2 != null){
            <div className={projects.ProjectCardTech}>Python</div>
          }} */}
        </div>
      </div>
    </a>
  );
}
