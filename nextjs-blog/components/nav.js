import React from "react";
import styles from '../styles/Home.module.css';

class Nav extends React.Component {
    render() {
    return(
    <div className={styles.nav}>
    {/* // <div className={styles.sidebar}> */}
    <div>
        <div className={styles.name}>
            <h4 className={styles.firstName}>
                Carlo
            </h4>
            <h4 className={styles.lastName}>
                Staltari
            </h4>
        </div>
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