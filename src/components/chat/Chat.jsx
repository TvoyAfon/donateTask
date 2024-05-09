import styles from './Chat.module.css';
import Header from './chat-components/Header';
import Body from './chat-components/body/Body'
import Footer from './chat-components/Footer';
import { useState } from 'react';
import { messages as chatMessages } from './chat-components/body/messages';

const Chat = () => {
    const [messages, setMessages] = useState(chatMessages);

    return (
        <div className={styles.chat}>
            <Header />
            <Body messages={messages} />
            <Footer setMessages={setMessages} />
        </div>
    )
}

export default Chat;