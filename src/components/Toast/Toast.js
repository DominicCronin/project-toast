import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({message, variant, removeToast}) {
  const IconForVariant = ICONS_BY_VARIANT[variant];
  return ( 
    <form className={`${styles.toast} ${styles[variant]}`}
          onSubmit={()=>{
            console.log("de-popping");
            removeToast()
          }}>
      <div className={styles.iconContainer}>
        <IconForVariant size={24}/>
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {variant} -
        </VisuallyHidden>
        {message}
      </p>
      <button 
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off">
        <X size={24} />        
      </button>
    </form>
  );
}

export default Toast;
