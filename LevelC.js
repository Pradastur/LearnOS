import React from 'react';
import { Link } from 'react-router-dom';



export class LevelC extends React.Component{
	constructor(props){
		super(props);
	}

	TryExercise = () => {

	var params = {
	    username: this.state.username,
	    password: this.state.password,
	  };
	return fetch("https://backend-qaexchevie.now.sh/users/"+this.state.username+"/"+this.state.password,
	    {
	      method: "GET",
	    }
	  )
	  .then((response) => response.json() )
	  .then((responseData) => {
	      console.log("Response: "+responseData);
	if(this.state.username==='' || this.state.password===''){
	    alert("EMPTY BOXES, TRY AGAIN");
	}else if(responseData==true){
	    console.log(responseData);
	    this.props.LogNow();
	}else if(responseData=="noexists"){;
	    alert("Usuario No Registrado");
	}else{
	    this.setState({happen:"INCORRECT USERNAME OR PASSWORD"});
	}
	  }).catch(function(e) {
	    alert( e.message);
	  } )
	}

	render(){
		return(
			<div className="level">
				<div className="title">
					<h1>C</h1>
				</div>
				<div className="Video">
					<iframe width="560" height="315"
					src="https://www.youtube.com/embed/-CpG3oATGIs"
					frameborder="0" gesture="media" allow="encrypted-media"
					allowfullscreen></iframe>
				</div>
				<div className="listLevel">
					<ul>
						<Link to='levelC_1'><li>Lesson 1</li></Link>
						<Link to='levelC_2'><li>Lesson 2</li></Link>
						<Link to='levelC_3'><li>Lesson 3</li></Link>
					</ul>
				</div>
			</div>
			)
	}
}
