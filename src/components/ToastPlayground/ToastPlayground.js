import React from 'react';
import ToastShelf from '../ToastShelf/ToastShelf';
import ToastProvider from '../ToastProvider/ToastProvider';
import AddToastWidget from '../AddToastWidget/AddToastWidget';

function ToastPlayground() { 
  return (    
    <ToastProvider>    
       <ToastShelf />
       <AddToastWidget />    
    </ToastProvider>
  );
}

export default ToastPlayground;
