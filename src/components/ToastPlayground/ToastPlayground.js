import React from 'react';

import Button from '../Button';
import RadioButton from '../RadioButton/RadioButton';
import Toast from '../Toast/Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0])
  const [message, setMessage] = React.useState('');
  const [toastPopped, setToastPopped] = React.useState(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastPopped && <Toast message={message} variant={selectedVariant}/> }

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
              onChange={(event)=> {setMessage(event.currentTarget.value)}}>
              {message}
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
            <Button
              onClick={(event)=>setToastPopped(!toastPopped)}>    
              {toastPopped ? "Unpop Toast!" : "Pop Toast!"}            
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
