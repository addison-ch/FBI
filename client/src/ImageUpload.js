import React from 'react';
import App from './App'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      ingredientList: ['hi', 'whats'],
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
          console.log(body['ok']);
          // this.state.ingredientList = body['ok']
          this.setState({ ingredientList: body['ok']});
          console.log(this.state.ingredientList)
      });
    });
  } 
  render() {
    return (
      <>
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
      <h2>I am a {this.state.ingredientList[0]} Car!</h2>;
      <App />
      </>
    );
  }
}

export default ImageUpload;