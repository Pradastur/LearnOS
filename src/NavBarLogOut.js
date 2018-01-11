import React from 'react';
import { Link } from 'react-router-dom';

export class NavBarLogOut extends React.Component {

constructor(props){
		super(props);
		this.state={
			file: '',
			previewImage: ''
		}
	}

	_handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("file",this.state.file);
    formData.append("extension",".png");
		alert('Image Updated');
      return fetch("https://learnos-backend.herokuapp.com/files/",
          {
            method: "POST",
            credentials: 'include',
            mode: "no-cors",
            body: formData
          }
        )
  }

	_handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        previewImage: reader.result
      });
		}
		reader.readAsDataURL(file)
  }

	componentWillMount() {
		fetch("https://learnos-backend.herokuapp.com/files/",
      {
        method: "GET",
        credentials: 'include',
      }
    )
    .then((response) => {
      console.log(response.body)
      return response.blob();
    })
    .then((image) => {
      console.log(image)
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({
          previewImage: reader.result
        });
      }
      //console.log(this.state.imagePreviewUrl)
      reader.readAsDataURL(image)
    });
}

  render() {
		let {previewImage} = this.state;
    let $imagePreview = null;
    if (previewImage) {
      $imagePreview = (<img className="Avatar" src={previewImage} alt="avatar"/>);
    } else {
      $imagePreview = (<div className="previewText">Select an Image</div>);
		}
  		return (
  			<div className="NavButtons">
				<div className="Image">
						 {$imagePreview}
						<form onSubmit={(e)=>this._handleSubmit(e)}>
				      <input className="fileInput"
				        type="file"
								onChange={(e)=>this._handleImageChange(e)} />
							</form>
					</div>
					<button className="submitButton"
						type="submit"
						onClick={(e)=>this._handleSubmit(e)}>Upload Avatar Image
					</button>
				<Link to='/logout'>
  			<button className="LogOut">
  				Log Out
  			</button>
				</Link>
				</div>
  			);
  }
}
