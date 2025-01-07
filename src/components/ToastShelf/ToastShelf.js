import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../App';
import useEscapeKey from '../../hooks/UseEscapeKey';

function ToastShelf() {
  const {toasts, removeToasts} = React.useContext(ToastContext);

  useEscapeKey(() => {
    removeToasts(()=> false)
  });

  return (
    <ol className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification">
      {
        toasts.map(toast=> {
          return (
            <li 
              key={toast.key} 
              className={styles.toastWrapper}>
              <Toast message={toast.message} 
                variant={toast.variant} 
                removeToast={()=>removeToasts((item)=>item.key !== toast.key)}/> 
            </li>    
          )
        })
      }
    </ol>
  );
}

export default ToastShelf;


