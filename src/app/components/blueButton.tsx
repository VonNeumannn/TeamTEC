'use client'
import styles from '../page.module.css';
interface BlueButtonProps {
    text: string;
    onClick: () => void;
  }


export function BlueButton(BlueButtonProps: BlueButtonProps) {
    const { text, onClick } = BlueButtonProps;
    
    return (
      <button type='button' className={styles.blueButton} onClick={onClick}>
        {text}
      </button>
    );
  }
  