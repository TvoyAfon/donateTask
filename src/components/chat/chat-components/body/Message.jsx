import React from 'react'
import styles from '../../styles/Body.module.css';

const Message = ({ type, text, isMine }) => {
    console.log(text);

    return (
        <div className={`${isMine ? styles.mine : styles['not-mine']} ${styles.message}`}>
            { text }
        </div>
    )
}

export default Message
