import React, {useState, useEffect} from 'react';
import './App.css';


export default function App ({ingredients, facts}) {

  const [data, setData] = useState('');
  const [show, setShow] = useState(false);
  const ingr = ingredients;
  const fax = facts;
  const fullList = []
  for(let i = 0; i<ingr.length; i++){
    fullList.push({
      key:   ingredients[i],
      value: fax[i]
    });
  }
  const toggle = (id) => {
    if(document.getElementById(id).style.display == 'none'){
      document.getElementById(id).style.display = 'block'
    } else if (document.getElementById(id).style.display == 'block'){
      document.getElementById(id).style.display = 'none'
    }
  }
  
  // for(let i = 0; i<ingr.length; i++){
  //   fullList.push({ingredients[i]: fax[i]})
  // }
  // console.log(Object.keys(fullList[0]));
  // console.log(fullList);
  return(
    <>
      <div>
        {fullList.map((name) => {
          return (
            <>
              <h3 key={name[Object.keys(name)[0]]} className="collapsible" onClick={() => toggle(name[Object.keys(name)[1]].substr(0, 6))}>

                    {name[Object.keys(name)[0]].charAt(0).toUpperCase() + name[Object.keys(name)[0]].slice(1)}  

              </h3>
              <div id={name[Object.keys(name)[1]].substr(0, 6)} key={name[Object.keys(name)[1]].substr(0, 6)} className="content" style={{display: "none" }}>
                  {name[Object.keys(name)[1]]}
              </div>
            </>
          )
        })}
      </div>
      {/* <div> 
      {fax.map((name) => {
          return (
          <div key={name} className="content">
                 {name}
          </div>)
        })}
      </div> */}
    </>
  )
}

