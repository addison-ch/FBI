import React from 'react';
import './index.css';



const divStyle = {
    margin: '0px',
    border: '3px'
  };

function Something() {
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

        <svg className='Fig'>
            
        </svg>
  
  
  
        </header>
  
        {/* <div className="Buttons">
          <button>
            Upload Photo
          </button>
        </div> */}
  
  
  
      </div>
    );
  }
  
  
  export default Something;