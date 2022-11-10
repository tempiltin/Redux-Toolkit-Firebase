import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "remixicon/fonts/remixicon.css"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick


        pauseOnHover={false}
        theme='dark'
      />
      {/* Same as */}
      <ToastContainer />
      <App />
    </Provider>
  </BrowserRouter>
);

