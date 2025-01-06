import React from 'react';

import Button from '../Button';
import RadioButton from '../RadioButton/RadioButton';
import Toast from '../Toast/Toast';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
  const defaultVariant = VARIANT_OPTIONS[0];
  const [selectedVariant, setSelectedVariant] = React.useState(defaultVariant)
  const [message, setMessage] = React.useState('');
  const [toasts, setToasts] = React.useState([]);

  const removeToast = (key)=> {
    setToasts(toasts.filter((toast)=>toast.key !== key))
  }
  
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

       <ToastShelf toasts={toasts} removeToast={removeToast}/>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput}
              value={message}              
              onChange={(event)=> {setMessage(event.currentTarget.value)}}>
            </textarea>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option=> <RadioButton 
                                            key={option} 
                                            selectedValue={selectedVariant}
                                            setSelectedValue={setSelectedVariant} 
                                            name="variant" value={option}/>) }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <form onSubmit={(event)=> {
                event.preventDefault()
                const nextToasts = [...toasts, {"message": message, "variant": selectedVariant, "key": Math.random()}];
                setToasts(nextToasts);
                setMessage('');
                setSelectedVariant(defaultVariant);
              }
              }>
            <Button>
              Add Toast
              </Button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
