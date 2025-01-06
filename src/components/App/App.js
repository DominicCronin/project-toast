import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

export const ToastContext = React.createContext()

function App() {
  return (
    <>
      <ToastPlayground />
      <Footer />
    </>
  );
}

export default App;
