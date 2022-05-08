import React from 'react';
import App from './App';

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
          console.log(body);
      });
    });
  } 

  render() {
    return (
      <>
      <App />
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        {/* <img src={this.state.imageURL} alt="img" /> */}
      </form>
      </>
    );
  }
}

export default ImageUpload;