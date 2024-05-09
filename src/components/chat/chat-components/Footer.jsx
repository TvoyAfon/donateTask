import React, { useState } from 'react'
import styles from '../styles/Footer.module.css';
import DonateModal from '../../donate-modal/DonateModal';

const Footer = ({ setMessages }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className={styles.footer}>
        <input type="text" className={styles.input} placeholder="Введите сообщение..." />
        <button onClick={() => setIsOpen(true)} className={`material-symbols-outlined ${styles['send-btn']}`}>
          paid
        </button>
        <button className={`material-symbols-outlined ${styles['send-btn']}`}>
          send
        </button>
        <DonateModal setMessages={setMessages} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </footer>
  )
}

export default Footer
