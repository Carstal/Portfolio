import React from "react";
import styles from '../styles/Home.module.css';

class Nav extends React.Component {
    render() {
    return(
    <div className={styles.nav}>
    <div>
        <h4>
        Carlo Staltari
        </h4>
    </div>
    <nav>
        <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
        </ul>
    </nav>
    </div>
    );
    }
}
export default function MyNav(){
    return <Nav></Nav>;
}