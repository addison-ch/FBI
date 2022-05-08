

import React, {useState, useEffect, useRef} from 'react';



export default function App () {
  const [data, setData] = useState("");
  const inputRef = useRef() 
  const [file, setFiles] = useState(null)
  const [imgURL, setURL] = useState("")
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api").then((response) => {
      return response.json();
    }).then((response) => {
      setData(response.msg);
      console.log(response);
    })}, [])
  
  
    
  //   function checkFile() {
    
  //   if (file != null) {
  //     console.log(file)
  //   setHasImage(true);
    
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   console.log(formData)

  //    fetch('http://localhost:5000/image_upload', {
  //        method: 'POST',
  //        body: formData,
  //     }).then((response) => {
         
  //         console.log(response);
  //         setURL(`http://localhost:8000/${file.name}`);
  //      ;
  //   })
  // }
  // }

  
  return (
    <>
    <div>{data}</div>

  


    <p>File upload</p>
    {/* <p>{hasImage ? file.name: ""}</p>
    <img src={hasImage ? imgURL : ""} alt=""></img>
        <div>
          <input type="file" id="input"  
         onChange={(e)=>
          { let files = Array.from(e.target.files);
            setFiles(files[0]);
            checkFile();}
        }
                ref={inputRef}/>
        </div> */}
        
        
    </>
  )
}

