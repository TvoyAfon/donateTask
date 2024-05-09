import React from 'react'
import styles from '../../../donate-modal/DonateModal.module.css'

const DonateMessage = ({ sum, from }) => {
    return (
        <div className={styles.show} style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                padding: '10px',
                background: 'gray',
                display: 'flex',
                borderRadius: '20px',
                gap: '7px',
                marginTop: '10px',  
            }}>
                <u>{ from }</u> задонатил { sum } рублей
            </div>
        </div>
    )
}

export default DonateMessage
