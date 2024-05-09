import React from 'react'
import styles from '../../styles/Body.module.css';
import bgImage from '../../../../assets/images/background-image.jpg';
import Message from './Message';
import DonateMessage from './DonateMessage';

const Body = ({ messages }) => {


    return (
      <main className={styles['body']} style={{
        background: 'var(--chat-bg)',
        width: '100%',
      }}>
          <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '10px'
          }}>
            {
              messages.map((message, index) => (
                message.type === 'message'
                ?
                <Message {...message} key={index} />
                : <DonateMessage {...message} key={index} />
              ))
            }
          </div>
      </main>
    )
}

export default Body
