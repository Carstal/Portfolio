import React from "react";
import {useCallback} from "react";
import styles from '../styles/Home.module.css';

export default function Spacer({ height }) {
return (
    <div className={styles.spacer} style={{height: height}}></div>
    );
}

