import React from 'react';
import axios, { post } from 'axios';

export class AdminScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const formData = new FormData();
    formData.append('file',file)
    return fetch("https://learnos-backend.herokuapp.com/files/",
        {
          method: "POST",
          credentials: 'include',
          mode: "no-cors",
          body: formData
        }
      )
}


  render(){
    return(
      <div className="AdminContent">
      <div>
        <h1>Hi, Admin!!</h1>
        </div>
      <div>
        <h2>What do you want to do???</h2>
      </div>
      <div className="List of Actions">
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
          <input type="file" onChange={this.onChange} />
          <button type="submit">Upload</button>
      </form>
      <ul>
        <li>Uploaded Documents</li>
      </ul>
      </div>
      </div>
    )
  }
}
