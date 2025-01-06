import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../App';

function ToastShelf() {
  const {toasts, removeToasts} = React.useContext(ToastContext);

  React.useEffect(()=> {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        removeToasts(()=> false)
      }
    }
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  },[])

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
