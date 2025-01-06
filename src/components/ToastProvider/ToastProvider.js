import React from 'react';

import {ToastContext} from '../App/App';

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant) => {
    const nextToasts = [...toasts, {"message": message, "variant": variant, "key": Math.random()}];
    setToasts(nextToasts);
  }

  const removeToast = (key)=> {
    setToasts(toasts.filter((toast)=>toast.key !== key))
  }
  
  return <ToastContext.Provider value={{toasts, addToast, removeToast}}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
