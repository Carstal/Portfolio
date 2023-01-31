import React from "react";
import styles from "../styles/ProjectCard.module.css";
import { useRouter } from "next/router";

export default function ProjectCard({ project }) {
const router = useRouter()
return (
    <div className={styles.projectCard} onClick={() => router.push({
        pathname: '/projects/[id]', query: { id: project.project_id}})}>
    {/* TODO: Display Image */}
    <div className={styles.projectImage}>
        {/* <div className={styles.image}>Image</div> */}
        <img className={styles.image} src={project.img} alt="Image" />
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