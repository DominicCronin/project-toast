import React from 'react';

import {ToastContext} from '../App/App';

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant) => {
    const nextToasts = [...toasts, {"message": message, "variant": variant, "key": Math.random()}];
    setToasts(nextToasts);
  }

  // TODO - one bright sunshiny day fiddle around with apply and arguments etc to make a function 
  // that's semantically the opposite of filter, so that it isn't weird when you call removeToasts
  const removeToasts = (filter)=> {
    setToasts(toasts.filter(filter))
  }
 
  return <ToastContext.Provider value={{toasts, addToast, removeToasts}}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
