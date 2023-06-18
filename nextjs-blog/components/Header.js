import React from "react";
import styles from '../styles/Home.module.css';
import Spacer from "../components/Spacer";

class Header extends React.Component {
    render() {
    return(
    <div className={styles.headerAndNav}>
        <h1 className={styles.headerTitle}>CARLO</h1>
        <Spacer height={"15px"} />
    </div>
    );
    }
}
export default function MyHeader(){
    return <Header></Header>;
}