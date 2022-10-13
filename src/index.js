import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuYF4JmLUUGGC3Wzg7qSxsrjPIKUr23mA",
  authDomain: "coderroberto.firebaseapp.com",
  projectId: "coderroberto",
  storageBucket: "coderroberto.appspot.com",
  messagingSenderId: "464212840234",
  appId: "1:464212840234:web:f20f36736b334091649853"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

