import React from "react";
import styles from "../stateComp/styles.module.css";


function State({title}: {title:string}){
    return(
        <>
            <ul className={styles.stateList}>Mənzillər {title}
                <li>1-otaqlı</li>
                <li>2-otaqlı</li>
                <li>3-otaqlı</li>
                <li>4-otaqlı</li>
                <li>5-otaqlı</li>
                <li>6-otaqlı</li>              
            </ul>
        </>
    )
};


export default State;