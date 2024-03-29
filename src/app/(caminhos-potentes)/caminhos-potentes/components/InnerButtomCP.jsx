import React from "react";
import styles from "./InnerButtomCP.module.css";


function InnerButtomCP( {text} ) {
    return (
        <div className={styles.buttom}>
            <a href="#guarantee">
                {text}
            </a>
        </div>
    )
}

export default InnerButtomCP