import React from "react";
import styles from "../FastPanel/styles.module.css";
import Link from "next/link"

function FastPanel(){
    return(
        <div style={{display:"flex",gap:"5px"}}>
            <p><Link className={styles.hide} href="/">sürətli axtarış panelini gizlət </Link></p> 
            <p><Link className={styles.Refresh} href="/">axtarışı yenilə </Link></p> 
        </div>
    )
};


export default FastPanel;