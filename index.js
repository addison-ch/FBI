import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ImageUpload from './ImageUpload'
import reportWebVitals from './reportWebVitals';
import Something from './Something';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Something />
    <App />
    <ImageUpload />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const divStyle = {
  margin: '0px',
  border: '3px'
};






function index() {
  return (
    <div className="App">
      <header className="App-header">

      <div style={divStyle}> 
        <p>
          FBI
          
        </p>
        </div>

        <div className ="App-Words">
        Food 'Bout Ingredients
        </div>




      </header>

      <div className="Buttons">
        <button>
          Upload Photo
        </button>
      </div>



    </div>
  );
}


export default index;

