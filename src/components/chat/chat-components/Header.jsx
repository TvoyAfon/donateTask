import React from 'react'
import styles from '../styles/Header.module.css'
import user from '../../../assets/images/user.jpg'

const Header = () => {
  return (
    <header className={styles.header}>
        <button className={styles['back-button']}>
          <span className='material-symbols-outlined'>arrow_back_ios_new</span>
          <p>Назад</p>
        </button>
        <div className={styles['user-info']}>
            <p>Дмитрий</p>
            <span>Был(a) 5 минут назад</span>
        </div>
        <img src={user} alt="user-avatar" className={styles.avatar} />
    </header>
  )
}

export default Header
