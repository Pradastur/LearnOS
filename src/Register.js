import React from 'react';

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
      username:'',
      password: '',
      email:''
    }
  this.Logged=this.Logged.bind(this);
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
};

  handleUserChange = (event) => {
      this.setState({ username: event.target.value });
    };

  handleEmailChange = (event) => {
      this.setState({ email: event.target.value });
    };

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

var logged= fetch("https://backend-lykuovauml.now.sh/users/"+this.state.username+"/adrian",
    {
      method: "GET",
    }
  )
  .then((response) => response.json() )
  .then((responseData) => {
      console.log("Response: "+responseData);
if(this.state.username==='' || this.state.password===''){
    alert("EMPTY BOXES, TRY AGAIN");
}else if(responseData=="noexists"){
  return fetch("https://backend-qaexchevie.now.sh/users/",
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
    console.log("Esto ES: "+ responseData);
  if(this.state.username=='' || this.state.password==='' || this.state.email==='' ){
      this.setState({happen:"EMPTY BOXES, TRY AGAIN"});
  }else if(responseData == true){
      alert('YOU HAVE BEEN REGISTERED SUCCESFULLY')
      this.props.LogNow();;
  }else {
      this.setState({happen:"USERNAME OR EMAIL ALREADY TAKEN"});
      }
    })
}else{
    alert("User already registered");
}
  }).catch(function(e) {
    alert( e.message);
  } )


}

	render(){
		/*const items = this.state.views.map(t => ( //ESTO VA EN EL 39<ul>{ items }</ul>
      <Item valor={ t } /> ));*/
		return (
			<div>
      <form>
			 <h1>Register </h1>
			<div className="containerUser">
				<label> <b> Username </b> </label>

				<input type="text"
        value={this.state.username}
        onChange={this.handleUserChange}
				placeholder="Enter Username"
				name="username"/>
				</div>

      <div className="containerEmail">
				<label> <b> Email </b> </label>

				<input type="text"
        value={this.state.email}
        onChange={this.handleEmailChange}
				placeholder="Enter Email"
				name="username"/>
				</div>
			<div className="containerPswd">

				<label> <b> Password </b> </label>

    			<input type="password"
          value={this.state.pass}
          onChange={this.handlePasswordChange}
    			placeholder="Enter Password"
    			name="password"/>
    		</div>

    		<div>
    		<input id="Submit" className="buttonSubmit" type="button" value="Submit" onClick={this.TrySignIn}></input>
    		</div>
        </form>
			</div>
			)
	}
	}
