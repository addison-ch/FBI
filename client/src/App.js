import React, {useState, useEffect} from 'react';



export default function App () {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api").then((response) => {
      return response.json();
    }).then((response) => {
      setData(response.msg);
      console.log(response);
    })}, [])
  

  return (
    <>
    <div>{data}</div>
    <p></p></>
  )
}

