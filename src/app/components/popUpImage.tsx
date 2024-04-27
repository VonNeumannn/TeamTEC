'use client'
import styles from '../page.module.css';
import { useEffect } from "react";

interface PopUpInformationProps {
    imageUrl: string;
    openDialog: () => void;
    closeDialog: () => void;
    dialogOpen: boolean;
}

export default function PopUpInformation(props: PopUpInformationProps) {
    const { imageUrl, openDialog, closeDialog, dialogOpen } = props;

    useEffect(() => {
        if (dialogOpen) {
            const dialog = document.getElementById('dialogPopUpInfo') as HTMLDialogElement | null;

            if (dialog) {
                dialog.classList.add(styles.show);
                dialog.showModal();
            }

            const main = document.getElementById('main') as HTMLDivElement | null;
            if (main) {
                main.style.filter = 'blur(4px)';
            }
        } else {
            const dialog = document.getElementById('dialogPopUpInfo') as HTMLDialogElement | null;
            if (dialog) {
                dialog.classList.remove(styles.show);
                dialog.close();
            }
            const main = document.getElementById('main') as HTMLDivElement | null;
            if (main) {
                main.style.filter = 'blur(0px)';
            }
        }
    }, [dialogOpen]);

    return (
        <dialog id={'dialogPopUpInfo'} className={styles.dialogPopUpInfo}>
            <button className={styles.closeButton} onClick={closeDialog}>X</button>
            <img src={imageUrl} alt="Popup Image" />
        </dialog>
    );
}