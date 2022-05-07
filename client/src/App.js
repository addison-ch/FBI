import React, {useState, useEffect} from 'react';
import './App.css';


export default function App () {
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api").then((response) => {
      return response.json();
    }).then((response) => {
      setData(response.msg[0])
      console.log(response.msg);
    })}, [])
  
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
      <div className="content">
        <button className="collapsible" onClick={() =>setShow(!show)}>{data["ingredient"]}</button>
        {
          show?<div>{data["fact"]}</div>:null
        }
      </div>
      <h1>hi</h1>
    </>
  )
}

