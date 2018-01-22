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


export class Register extends React.Component {

constructor (props) {
    super(props);
    this.state= {
      username: '',
      password: '',
      email: '',
      repeatPassword: '',
    }

    this.onClick= this.onClick.bind(this);

  }

  handleNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleRepeatPassChange = (event) => {
    this.setState({ repeatPassword: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };


    update () {
          this.props.name(this.state.username);
        }

Logged(){
  this.props.LogNow();
}

TrySignIn = () => {

var params = {
    password: this.state.pass,
    email: this.state.email,
    username: this.state.username,
  };
console.log(params);
if(this.state.username==='' || this.state.password==='' || this.state.email==='' || this.state.repeatPassword===''){
          alert("EMPTY BOXES, TRY AGAIN");
        }else if(this.state.email.indexOf('@') === -1 || this.state.email.indexOf('.') === -1){
          alert("IT IS NOT A VALID EMAIL, TRY AGAIN");
        }else if (this.state.password.length < 8){
          alert("PASSWORD MUST CONTAIN 8 CHARACTERS AT LEAST, TRY AGAIN");
        }else if(this.state.password !== this.state.repeatPassword){
          alert("IT IS NOT THE SAME PASSWORD, TRY AGAIN");
}else{
  return fetch("https://learnos-backend.herokuapp.com/users/",
  {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
        password: this.state.password,
        email: this.state.email,
        username:this.state.username,
      })
    }
  )
  .then((response) => response.json())
  .then((responseData) => {
  if(this.state.username=="" || this.state.password==="" || this.state.email=="" ){
      this.setState({happen:"EMPTY BOXES, TRY AGAIN"});
  }else if(responseData == true){
      alert('YOU HAVE BEEN REGISTERED SUCCESFULLY');
      this.props.LogNow();
      this.props.history.replace('/start');
  }else if(responseData == "exists"){
      alert('USER ALREADY REGISTERED');
      this.props.history.replace('/register');
  }else {
      this.setState({happen:"USERNAME OR EMAIL ALREADY REGISTERED"});
      }
  }).catch(function(e) {
    alert( e.message);
  } )
}
}

onClick(){
    this.TrySignIn();
    this.update();
  }

	render(){
		/*const items = this.state.views.map(t => ( //ESTO VA EN EL 39<ul>{ items }</ul>
      <Item valor={ t } /> ));*/
		return (
			<div>
      <form>
			 <h1>Register </h1>
			<div className="containerUser">
      <p className="User">
              <input type="text" value={this.state.username} onChange={this.handleNameChange} placeholder="Username" />
            </p>

            <p className="Password">
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password"/>
            </p>

            <p className="RPassword">
              <input type="password" value={this.state.repeatPassword} onChange={this.handleRepeatPassChange} placeholder="Repeat Password"/>
            </p>

            <p className="Email">
              <input type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email"/>
              </p> 
    		<input id="Submit" className="buttonSubmit" type="button" value="Submit" onClick={this.onClick}></input>
    		</div>
        </form>
			</div>
			)
	}
	}
