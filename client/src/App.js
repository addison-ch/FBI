import React, {useState, useEffect} from 'react';
import './App.css';


export default function App () {
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

  const steps = [];
  // for (let i = 1; i <= 2; i++) {
  //   steps.push(
  //     <div key={i} className="content">
  //       <button className="collapsible" onClick={({i}) =>setShow(!show)}>{data["ingredient"]}</button>
  //       {
  //         show?<div>{data["fact"]}</div>:null
  //       }
  //     </div>
  //   );
  // }
  // return array.map(function(each){
  //   return(<h1>hello {each.name}</h1>)
  // })
  return(
    <>
      {/* {data.map(item => <div className="content">
        <button className="collapsible" onClick={() =>setShow(!show)}>{item["ingredient"]}</button>
        {
          show?<div>{item["fact"]}</div>:null
        }
      </div>)}  */}
      {/* <div>
        {names.map((name) => {
          return <div key={name}>{name['ingredient']}</div>;
        })}
      </div> */}
      <div>
        {names.map((name) => {
          return (
          <div key={name['ingredient']} className="content">
                 <button className="collapsible" onClick={({i}) =>setShow(!show)}>{name["ingredient"]}</button>
                 {
                   show?<div>{name["fact"]}</div>:null
                 }
          </div>)
          // <div>hello</div>
        })}
      </div>
      
      {/* <div className="progressBar">{ steps }</div>
      <h1>hi</h1> */}

      <div> 
      {count == 0
        <button onClick={myFunction}>
        Get data
        </button>
      }
      
    </div>
    </>
  )
}

