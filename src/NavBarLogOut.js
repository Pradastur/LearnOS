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
    var file = new FormData();
    file.append("file",this.state.file);
    file.append("extension",".png");
		alert('Image Updated');
      return fetch("https://learnos-backend.herokuapp.com/files/"+ this.props.user,
          {
            method: "POST",
            credentials: 'include',
            mode: "no-cors",
            body: file
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
		fetch("https://learnos-backend.herokuapp.com/files/"+ this.props.user,
      {
        method: "GET",
      }
    )
    .then((response) => {
      console.log("RESPONSE BLOB "+response)
      return response.text();
    })
    .then((image) => {
        this.setState({
          previewImage: image
        });
      //console.log(this.state.imagePreviewUrl)
    });
}

  render() {
		let {previewImage} = this.state;
    let $imagePreview = null;
    if (previewImage) {
      $imagePreview = (<img className="Avatar" src={previewImage} alt="avatar" style={{width: 150, height: 75}} />);
    } else {
      $imagePreview = (<div className="previewText">Loading avatar..</div>);
		}
  		return (
  			<div className="NavButtons">
					<button className="submitButton"
						type="submit"
						onClick={(e)=>this._handleSubmit(e)}>Update Avatar Image
					</button>
					<div className="Image">
							 {$imagePreview}
							<form onSubmit={(e)=>this._handleSubmit(e)}>
					      <input className="fileInput"
					        type="file"
									onChange={(e)=>this._handleImageChange(e)} />
								</form>
						</div>
				<Link to='/logout'>
  			<button className="LogOut">
  				Log Out
  			</button>
				</Link>
				</div>
  			);
  }
}
