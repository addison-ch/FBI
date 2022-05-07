import React, {useState, useEffect} from 'react';
import './App.css';


export default function App () {
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api").then((response) => {
      return response.json();
    }).then((response) => {
      setData(response.msg)
      // console.log(response.msg);
    })}, [])
  var initialValue = [
    "Star Wars", "Return of the Jedi", "Empire Strikes Back",
  ]
  console.log(data[0])
  for(let i = 0; i<=1; i++){
      // console.log(data[0])

      //console.log(data['msg'][i])
      // initialValue = initialValue.push('hi')
      initialValue.push("Kiwi"+i);
      // initialValue.push(data['msg'][i]['ingredient'])

      //console.log(data['msg'].length)
  //   // console.log(data.length)
  }
  // items = items.push(item)
  // this.setState({items})
  // console.log(data)
  const [names, setNames] = useState(initialValue);
  const steps = [];
  for (let i = 1; i <= 2; i++) {
    steps.push(
      <div key={i} className="content">
        <button className="collapsible" onClick={({i}) =>setShow(!show)}>{data["ingredient"]}</button>
        {
          show?<div>{data["fact"]}</div>:null
        }
      </div>
    );
  }
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
      <div>
        {names.map((name) => {
          return <div key={name}>{name}</div>;
        })}
      </div>
      <div className="progressBar">{ steps }</div>
      <h1>hi</h1>
    </>
  )
}

