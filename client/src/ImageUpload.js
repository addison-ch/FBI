import React from 'react';
import './ImageUpload.css';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
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
          console.log(body.ok);
      });
    });
  } 

  render() {
    return (
      <div className="left">
      <form onSubmit={this.handleUploadImage}>
        <div className="innerleft">
        <div>
          <label htmlFor="upload"></label>
          <input  ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>        <div>
          <button className="button1">Upload</button>
        </div></div>
        {/* <img src={this.state.imageURL} alt="img" /> */}
      </form></div>
    );
  }
}

export default ImageUpload;