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

    fetch('http://localhost:3000/image_upload', {
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
          <form className='image_upload_section' onSubmit={this.handleUploadImage}>
            <div className='image_upload_section__left-panel'>
              <div className='left-panel__market-1-container'>
                <span className='market-1-container__ingredients-unmasked'>
                  Ingredients <br></br>
                  Unmasked.
                </span>
              </div>
              <div className='left-panel__market-2-container'>
                <span className='market-2-container__statement'>
                  Hold companies <b>ACCOUNTABLE</b> <br></br>
                  for what they put in <b>YOUR</b> food. 
                </span>
              </div>
            </div>
            <div className='image_upload_section__right-panel'>
              <div className='buttons'>
                <label className='label' htmlFor='hidden_field_id'>Choose File</label>
              </div>
              <input className='hidden_field' id='hidden_field_id' ref={(ref) => { this.uploadInput = ref; }} type="file" />
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