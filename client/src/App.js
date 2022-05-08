import React, {useState, useEffect} from 'react';
import './App.css';


export default function App ({ingredients, facts}) {

  const [data, setData] = useState('');
  const [show, setShow] = useState(false);
  const ingr = ingredients;
  const fax = facts;




  return(
    <>
      <div>
        {ingr.map((name) => {
          return (
          <div key={name} className="content">
                 {name}
          </div>)
        })}
      </div>
      <div> 
      {fax.map((name) => {
          return (
          <div key={name} className="content">
                 {name}
          </div>)
        })}
    </div>
    </>
  )
}

