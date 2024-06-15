'use client';
import styles from "../page.module.css";
import Bell from "../../../public/bell.svg";
import DotBell from "../../../public/bell-dot.svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import Profile from "../../../public/user-round.svg";
import Notification from "./Notification"

interface Props {
    bell: boolean;
    userName: string;   
}


export default function Header(Props: Props) {

    const { bell,userName } = Props;
    useEffect(() => {
        console.log(bell);
    }, [bell]);
  
  return (
    <header className={styles.header}>
        <div className={styles.userPill}>
          <Image src={Profile} alt="profile-symbol"/>
          <p>{userName}</p>
        </div>
          <div className={styles.notificationBell}>
            <Image src={bell?DotBell:Bell} alt="Notification Bell" />
            <div className={styles.piquitoFrame}></div>
            <div className={styles.notificationFrame}>
              <span>Notificaciones</span>
              <div className={styles.notificationTable}>
                <Notification activityName="Actividad 1" content="Contenido de la actividad 1 vsvsdv dcsdvsvds  dsfdsf df sdfsdf  d dgdg sfsdfd dfd dgdgdgdf gfdgd gdfgfdfdjndfjnfdkbndbndflkbnd fjvfdnvjfdvjfdvbdfk" date="10/10/2021" hour="10:00" status={true} keyValue={1} redirect="/actividad"/>
                <Notification activityName="Actividad 2" content="Contenido de la actividad 2" date="10/10/2021" hour="10:00" status={false} keyValue={2} redirect="/actividad"/>
                <Notification activityName="Actividad 3" content="Contenido de la actividad 3" date="10/10/2021" hour="10:00" status={true} keyValue={3} redirect="/actividad"/>
                <Notification activityName="Actividad 4" content="Contenido de la actividad 4" date="10/10/2021" hour="10:00" status={false} keyValue={4} redirect="/actividad"/>
                <Notification activityName="Actividad 5" content="Contenido de la actividad 5" date="10/10/2021" hour="10:00" status={true} keyValue={5} redirect="/actividad"/>
                <Notification activityName="Actividad 5" content="Contenido de la actividad 5" date="10/10/2021" hour="10:00" status={true} keyValue={6} redirect="/actividad"/>
                <Notification activityName="Actividad 1" content="Contenido de la actividad 1" date="10/10/2021" hour="10:00" status={true} keyValue={7} redirect="/actividad"/>
                <Notification activityName="Actividad 2" content="Contenido de la actividad 2" date="10/10/2021" hour="10:00" status={false} keyValue={8} redirect="/actividad"/>
                <Notification activityName="Actividad 3" content="Contenido de la actividad 3" date="10/10/2021" hour="10:00" status={true} keyValue={9} redirect="/actividad"/>
                <Notification activityName="Actividad 4" content="Contenido de la actividad 4" date="10/10/2021" hour="10:00" status={false} keyValue={10} redirect="/actividad"/>
                
              </div>
            </div>
          </div>
          
        </header>
    
  );
}
