import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ImageUpload from './ImageUpload'
import reportWebVitals from './reportWebVitals';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopBar />
    <ImageUpload />
    <BottomBar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
