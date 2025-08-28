import React from "react";
import styles from "@/components/TopHeader/styles.module.css";


function TopHeader(){
    return(
        <>
            <div className={styles.topHeader}><p>Əmlak Bazası v3.5</p>
                <p>www.emlak-bazasi.com</p>
            </div>
            
        </>
    )
}

export default TopHeader;