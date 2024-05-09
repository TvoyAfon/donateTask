import React, { useEffect, useState } from 'react'
import styles from './DonateModal.module.css';
import { sums } from './sums';

const DonateModal = ({ isOpen, onClose, setMessages }) => {
    const [className, setClassName] = useState('');
    const [error, setError] = useState('');
    const [donateValue, setDonateValue] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setClassName(styles.show);
        }
    }, [isOpen]);

    const handleClose = () => {
        setClassName(styles.hide);
        setTimeout(() => {
            onClose();
        }, 300);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error || donateValue <= 0) return;

        setMessages(prev => [...prev, {
            type: 'donate',
            from: "Артём",
            sum: donateValue
        }]);

        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);
        }, 2500);
    }

    const handleChange = (e) => {
        const val = Number(e.target.value);
        
        if (val > 1_000_000) {
            setError('Сумма не должна быть больше 1.000.000 рублей')
        }
        
        else if (val < 1) {
            setError('Сумма должна быть больше 1-го рубля')
        }

        else if (isNaN(val)) {
            setError('Сумма должна быть числом')
        }

        else {
            setError('');
        }

        setDonateValue(e.target.value);
    }

    return (
        <>
            {
                isOpen
                &&
                <div className={`${styles.overlay}`}>
                    <div  className={`${styles.modal} ${className}`}>
                        <header style={{
                            display: 'flex',
                            gap: '20px'
                        }}>
                            <span onClick={handleClose} className='material-symbols-outlined' style={{
                                cursor: 'pointer'
                            }}>
                                close
                            </span>
                            <h2 style={{
                                marginTop: '-2px'
                            }}>Отправить донат</h2>
                        </header>
                        <main className={styles.main}>
                            {
                                sums.map(sum => (
                                    <button key={sum} className={`${styles['send-donate-btn']} ${styles['margin-normal']}`}
                                        onClick={() => setDonateValue(sum)}
                                    >
                                        {sum} руб
                                    </button>
                                ))
                            }
                            
                            <form onSubmit={handleSubmit} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <label style={{
                                        color: 'var(--red-color)'
                                    }}>{ error }</label>
                                    <input value={donateValue || ''}  placeholder='Введите сумму (1 - 1.000.000) руб' 
                                            type="text" className={styles.input} onChange={handleChange}
                                    />
                                </div>
                                <button disabled={isSuccess} type='submit' className={styles['send-donate-btn']}>
                                    {isSuccess ?
                                        <div style={{
                                            display: 'flex',
                                        }}>
                                            <span className='material-symbols-outlined'>
                                            done
                                            </span>
                                            Успешно
                                        </div>
                                        : 
                                        'Отправить' 
                                    }
                                </button>
                            </form>
                        </main>
                    </div>
                </div>
            }
        </>
    )
}

export default DonateModal
