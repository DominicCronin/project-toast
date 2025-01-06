import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../App';

function ToastShelf() {
  const {toasts, removeToast} = React.useContext(ToastContext);
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
