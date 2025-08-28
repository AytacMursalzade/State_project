import React from "react";
import StateComp from "../stateComp";
import styles from "../Avarage/styles.module.css";
import LandPage from "../LandPage";


function Avarage (){
    return(
        <>
            <div className={styles.pik}>
                <StateComp  title="Yeni tikili"/>
                <StateComp  title="Köhnə tikili"/>
                <LandPage />
            </div>
            
        </>
    )
};

export default Avarage;