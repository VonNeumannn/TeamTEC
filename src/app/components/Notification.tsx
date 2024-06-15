'use client';
import styles from "../page.module.css";

import { useEffect, useState } from "react";


interface Props {
    activityName: string;
    content: string;   
    date: string;
    hour: string;
    status: boolean;
    keyValue : number;
    redirect: string;
}


export default function Header(Props: Props) {
    const [id, setId] = useState("notification1");

    const { activityName, content, date, hour, status, keyValue, redirect } = Props;
    useEffect(() => {
        if(keyValue){
            setId("notification"+keyValue);
            
        }
        
    }, [keyValue]);

    useEffect(() => {
        if(status){
            const noti = document.getElementById("notification"+keyValue) ;
            if(noti){
                noti.classList.add(styles.unreaded);
            }
            
            
        }});

    
    
  
  return (
    <div className={styles.notification} id={id}>
        <p className={styles.titleNotification}>
            {activityName}
        </p>
        <p className={styles.contentNotification}>
            {content}
        </p>
        <div className={styles.hourTime}>
            <p className={styles.dateNotification}>
                {date}
            </p>
            <p className={styles.hourNotification}>
                {hour}
            </p>
        </div>
    </div>
  );
}
