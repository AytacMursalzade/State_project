import React from "react";
import styles from "../LandPage/styles.module.css"


function LandPage(){
    return(
        <>
            <ul className={styles.land}>
                <li>Torpaqlar</li>
                <li>Fərdi yaşayış evləri</li>
                <li>Bağ evləri</li>
                <li>Qeyri yaşayış sahələri</li>
                <li>Qarajlar</li>
            </ul>
        </>
    )
};

export default LandPage;