import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCblTwPe10TQgP6CtpKBvs9jyvM3fGtxLE",
  authDomain: "entrega-proyecto-final.firebaseapp.com",
  projectId: "entrega-proyecto-final",
  storageBucket: "entrega-proyecto-final.appspot.com",
  messagingSenderId: "1010765193198",
  appId: "1:1010765193198:web:bb5baafe21fa66e35b38ff"
};

const app = initializeApp(firebaseConfig);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
