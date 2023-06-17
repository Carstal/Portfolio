import React from "react";
import projects from "../styles/Projects.module.css";

export default function ProjectCard() {
  return (
    <div className={projects.ProjectCard}>
      <div className={projects.ProjectCardImg}></div>
      <div className={projects.ProjectCardDesc}>
        <div className={projects.ProjectCardTitleContainer}>
          <div className={projects.ProjectCardTitle}>Title</div>
          <div className={projects.ProjectCardSubtitle}>Subtitle</div>
        </div>
        <div className={projects.ProjectCardTechContainer}>
          <div className={projects.ProjectCardTech}>Next.js</div>
          <div className={projects.ProjectCardTech}>Python</div>
        </div>
      </div>
    </div>
  );
}
