'use client';
import styles from "../page.module.css";
import Bell from "../../../public/bell.svg";
import DotBell from "../../../public/bell-dot.svg";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import Profile from "../../../public/user-round.svg";
import Notification from "./Notification"

interface Props {
  bell: boolean;
  userName: string;
}

type Notification = {
  activityName: string;
  content: string;
  date: string;
  hour: string;
  status: boolean;
  keyValue: number;
  redirect: string;
};

const orderNotificationsByDateAndTime = (notifications: Notification[]): Notification[] => {
  return notifications.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/').map(Number);
    const [dayB, monthB, yearB] = b.date.split('/').map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA, ...a.hour.split(':').map(Number));
    const dateB = new Date(yearB, monthB - 1, dayB, ...b.hour.split(':').map(Number));

    return dateB.getTime() - dateA.getTime();
  });
};



export default function Header(Props: Props) {

  const [flag, setFlag] = useState(true);
  const exampleNotificationsData = {
    notifications: [
      {
        activityName: "Clase de yoga matutina",
        content: "Participa en nuestra clase de yoga para mejorar tu flexibilidad y reducir el estrés.",
        date: "15/06/2024",
        hour: "07:00",
        status: true,
        keyValue: 2,
        redirect: "/actividad-yoga"
      },
      {
        activityName: "Taller de pintura al óleo",
        content: "Aprende técnicas de pintura al óleo con un instructor profesional. Todos los materiales están incluidos.",
        date: "20/06/2024",
        hour: "14:00",
        status: true,
        keyValue: 3,
        redirect: "/actividad-pintura"
      },
      {
        activityName: "Conferencia sobre inteligencia artificial",
        content: "Asiste a nuestra conferencia para conocer las últimas tendencias y avances en inteligencia artificial.",
        date: "25/06/2024",
        hour: "10:00",
        status: false,
        keyValue: 4,
        redirect: "/actividad-conferencia"
      },
      {
        activityName: "Clase de cocina italiana",
        content: "Únete a nuestra clase y aprende a preparar deliciosos platos italianos con ingredientes frescos.",
        date: "25/06/2024",
        hour: "09:00",
        status: true,
        keyValue: 5,
        redirect: "/actividad-cocina"
      },
      {
        activityName: "Sesión de meditación guiada",
        content: "Relájate y rejuvenece con nuestra sesión de meditación guiada por un experto en mindfulness.",
        date: "05/07/2024",
        hour: "08:00",
        status: false,
        keyValue: 6,
        redirect: "/actividad-meditacion"
      }
    ]
  };
  const [displayedNotis, setDisplayedNotis] = useState<Notification[]>([]);



  const { bell, userName } = Props;
  useEffect(() => {
    const notifications = orderNotificationsByDateAndTime(exampleNotificationsData.notifications);

    setDisplayedNotis(notifications)
  }, [bell]);

  useEffect(() => {
    const seeAll = document.getElementById("seeAll");
    const seeReaded = document.getElementById("seeReaded");
    const seeUnreaded = document.getElementById("seeUnreaded");
    const bellImg = document.getElementById("BellBoton");
    const piquito = document.getElementById("piquito");
    const notificationFrame = document.getElementById("notificationFrame");

    if (seeAll && seeReaded && seeUnreaded && bellImg && piquito && notificationFrame) {
      seeAll.addEventListener("click", () => {
        setDisplayedNotis(orderNotificationsByDateAndTime(exampleNotificationsData.notifications));
        seeAll.classList.add(styles.selectedOption);
        seeReaded.classList.remove(styles.selectedOption);
        seeUnreaded.classList.remove(styles.selectedOption);
      });

      seeReaded.addEventListener("click", () => {
        setDisplayedNotis(orderNotificationsByDateAndTime(exampleNotificationsData.notifications.filter(notification => notification.status)));
        seeReaded.classList.add(styles.selectedOption);
        seeAll.classList.remove(styles.selectedOption);
        seeUnreaded.classList.remove(styles.selectedOption);
      });

      seeUnreaded.addEventListener("click", () => {
        setDisplayedNotis(orderNotificationsByDateAndTime(exampleNotificationsData.notifications.filter(notification => !notification.status)));
        seeUnreaded.classList.add(styles.selectedOption);
        seeAll.classList.remove(styles.selectedOption);
        seeReaded.classList.remove(styles.selectedOption);
      });

      bellImg.addEventListener("click", () => {
        
        if(flag){
          notificationFrame.classList.add(styles.show);
          piquito.classList.add(styles.show);
        }else{
          notificationFrame.classList.remove(styles.show);
          piquito.classList.remove(styles.show);
        }
        setFlag(!flag);
        

      });
    }
  });

  

  return (
    <header className={styles.header}>
      <div className={styles.userPill}>
        <Image src={Profile} alt="profile-symbol" />
        <p>{userName}</p>
      </div>
      <div className={styles.notificationBell} >
        <Image src={bell ? DotBell : Bell} alt="Notification Bell" id="BellBoton"/>
        <div className={styles.piquitoFrame} id="piquito"></div>
        <div className={styles.notificationFrame} id="notificationFrame">
          <span>Notificaciones</span>
          <div className={styles.displayOptions}>
            <p className={styles.displayOption} id="seeAll">Todas</p>
            <p className={styles.displayOption} id="seeReaded">Leídas</p>
            <p className={styles.displayOption} id="seeUnreaded">No leídas</p>
          </div>
          <div className={styles.notificationTable}>
            {displayedNotis.map((notification) => (
              <Notification
                activityName={notification.activityName}
                content={notification.content}
                date={notification.date}
                hour={notification.hour}
                status={notification.status}
                keyValue={notification.keyValue}
                redirect={notification.redirect}
              />
            ))}
          </div>
        </div>
      </div>

    </header>

  );
}
