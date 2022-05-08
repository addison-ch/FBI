import React from 'react';

import App from './App';

import './imageUpload.css';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      ingredientList: [],
      factList: []
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', "label");

    fetch('http://localhost:5000/image_upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
          console.log(body['ok']['ingredient'])
          console.log(body['ok']['fact'])
          // this.state.ingredientList = body['ok']
          this.setState({ factList: body['ok']['fact']});
          this.setState({ ingredientList: body['ok']['ingredient'], });
      })
    });
  }
  
  render() {
    return (
      <>
      <div>
        <div>
          <form onSubmit={this.handleUploadImage}>
            <div>
              <button className='buttons'>
                <label className='' htmlFor='hidden_field'>Choose File</label>
              </button>
              <input className='hidden_field' id='hidden_field' ref={(ref) => { this.uploadInput = ref; }} type="file" />
            </div>
          <div>
            <button className='buttons'>Upload</button>
          </div>
        </form> 
      </div>

      <div>
        <App ingredients={this.state.ingredientList} facts={this.state.factList}/>
      </div>

     </div>
    </>
    );
  }
}

export default ImageUpload;