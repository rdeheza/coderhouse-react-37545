import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuYF4JmLUUGGC3Wzg7qSxsrjPIKUr23mA",
  authDomain: "coderroberto.firebaseapp.com",
  projectId: "coderroberto",
  storageBucket: "coderroberto.appspot.com",
  messagingSenderId: "464212840234",
  appId: "1:464212840234:web:f20f36736b334091649853"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

