import React from 'react';
import { Link } from 'react-router-dom';


/*const Title = ({nombre} = props) => (
  <h1>{ nombre }</h1>
);

const Input = (props) => (
  <input type='text' placeholder={ props.placeholder } />
);*/
/*const Item = (props) => (
  <li><a href='#'>{ props.valor }</a></li>
);*/


export class LogIn extends React.Component {

constructor (props) {
    super(props);
    this.state= {
     username: '',
     password: ''
   }
   this.onClick= this.onClick.bind(this);
 }

handleNameChange = (event) => {
   this.setState({ username: event.target.value });
 };

 handlePasswordChange = (event) => {
   this.setState({ password: event.target.value });
};

update () {
      this.props.name(this.state.username);
    }

TryLog = () => {

var params = {
    username: this.state.username,
    password: this.state.password,
  };
return fetch("https://learnos-backend.herokuapp.com/users/"+this.state.username+"/"+this.state.password,
    {
      method: "GET",
    }
  )
  .then((response) => response.json() )
  .then((responseData) => {
      console.log("Response: "+responseData);
if(this.state.username==='' || this.state.password===''){
    alert("EMPTY BOXES, TRY AGAIN");
}else if(responseData=="true"){
        this.props.LogNow();
        this.props.history.replace('/start');
}else if(responseData=="noexists"){
    alert("Usuario No Registrado");
}else if(responseData=="admin"){
    this.props.changeToAdmin();
    this.props.history.replace('/admin');
    alert("You has Entered like Administrator");
}else if(responseData==false){
    alert("INCORRECT USERNAME OR PASSWORD");
}else{
    this.setState({happen:"INCORRECT USERNAME OR PASSWORD"});
}
  }).catch(function(e) {
    alert( e.message);
  } )

}

onClick(){
    this.TryLog();
    this.update();
  }

	render(){
		return (
			<div>
      <form>
			 <h1>Log In </h1>
			<div className="containerUser">
				<label> <b> Username </b> </label>

				<input type="text"
        value={this.state.username}
        onChange={this.handleNameChange}
				placeholder="Enter Username"
				name="username"/>
				</div>
			<div className="containerPswd">
				<label> <b> Password </b> </label>

    			<input type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
    			placeholder="Enter Password"
    			name="password"/>
    		</div>
    		<div>
    		<input id="Submit" className="buttonSubmit"
        type="button" value="Submit"
        onClick={this.onClick}></input>
    		</div>
        </form>
			</div>
			)
	}
	}
