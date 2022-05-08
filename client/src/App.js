import React, {useState, useEffect} from 'react';
import './App.css';


export default function App ({ingredients}, {facts}) {

  const [data, setData] = useState('');
  const [show, setShow] = useState(false);
  const ingr = ingredients;
  const fax = facts;
  var initialValue = []
  var count = 0

  const [names, setNames] = useState(initialValue);


  const myFunction = () => {
    fetch("http://localhost:5000/api").then((response) => {

      return response.json();
    }).then((response) => {
      setData(response.msg)
      console.log(response.msg);
      console.log(response.msg.length)
      var variableLength = response.msg.length
      for(let i = 0; i<=1; i++){
        initialValue.push(response.msg[i])
        console.log(response.msg[i])
      }
      count = 1;
    })

  }


  return(
    <>
      <div>
        {ingr.map((name) => {
          return (
          <div key={name} className="content">
                 <button className="collapsible" onClick={({i}) =>setShow(!show)}>{name}</button>
                 {
                   show?<div>{fax[count++]};
                   </div>:null
                 }
          </div>)
        })}
      </div>
      <div> 

        <button onClick={myFunction}>

          Display nutrition information
        </button>
    </div>
    </>
  )
}

