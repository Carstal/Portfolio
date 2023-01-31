import React from "react";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ project }) {
return (
    <div className={styles.projectCard}>
    {/* TODO: Display Image */}
    <div className={styles.projectImage}>
        <div className={styles.image}>Image</div>
    </div>
    {/* TODO: Display Info */}
    <div className={styles.projectInfo}>
        {/* TODO: Align title and desc vertically */}
        {/* TODO: Justify title and desc left */}
        <div className={styles.projectTitle}>{project.name}</div>
        <div className={styles.projectDesc}>{project.desc}</div>
    </div>
    </div>
    );

}