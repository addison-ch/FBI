import React, {useState, useEffect} from 'react';
import './App.css';

export default function App (props) {
  const [data, setData] = useState('');
  const [show, setShow] = useState(false);
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
  // var initialValue = [
  //   "Star Wars", "Return of the Jedi", "Empire Strikes Back",
  // ]
  // if(typeof data !== 'undefined'){
  //   for(let i = 0; i<=1; i++){

  //     initialValue.push("Kiwi"+i);
  //     //initialValue.push(data[i]['ingredient'])
  //     //console.log(data[i]['ingredient'])
  //   }
    
  // }

  // useEffect(() => {
  //   fetch("http://localhost:5000/api").then((response) => {
  //     return response.json();
  //   }).then((response) => {
  //     setData(response.msg)
  //     // console.log(response.msg);
  //   })}, [])
 
  return(
    <>
      <div>
        {names.map((name) => {
          return (
          <div key={name['ingredient']} className="content">
                 <button className="collapsible" onClick={({i}) =>setShow(!show)}>{name["ingredient"]}</button>
                 {
                   show?<div>{name["fact"]}</div>:null
                 }
          </div>)
        })}
      </div>
      
      {/* <div className="progressBar">{ steps }</div>
      <h1>hi</h1> */}

      <div> 
      {/* {count == 0 */}
        <button onClick={receiveData}>
          Display nutrition information
        </button>
      {/* } */}
      
    </div>
    </>
  )
}

