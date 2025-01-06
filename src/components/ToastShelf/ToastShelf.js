import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, removeToast}) {
  return (
    <ol className={styles.wrapper}>
      {
        toasts.map(toast=> {
          return (
            <li key={toast.key} className={styles.toastWrapper}>
              <Toast message={toast.message} variant={toast.variant} removeToast={()=>removeToast(toast.key)}/> 
            </li>    
          )
        })
      }
    </ol>
  );
}

export default ToastShelf;
