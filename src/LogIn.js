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


export class LogIn extends React.Component {

constructor (props) {
    super(props);
    this.state= {
     username: '',
     password: ''
   }
   this.hashCode2=this.hashCode2.bind(this);
 }

handleNameChange = (event) => {
   this.setState({ username: event.target.value });
 };

 handlePasswordChange = (event) => {
   this.setState({ password: event.target.value });
};

hashCode2(pass){
	    var hash = 0;
	    if (pass.length == 0) return hash;
	    for (var i = 0; i < pass.length; i++) {
	        var char = pass.charCodeAt(i);
          var hash = ((hash<<5)-hash)+char;
          hash = hash & hash; // Convert to 32bit integer
	    }
      console.log(hash);
	    return hash;
	}

TryLog = () => {

var params = {
    username: this.state.username,
    password: this.hashCode2(this.state.password),
  };
return fetch("https://learnos-backend.herokuapp.com/users/"+this.state.username+"/"+this.hashCode2(this.state.password),
    {
      method: "GET",
    }
  )
  .then((response) => response.json() )
  .then((responseData) => {
      console.log("Response: "+responseData);
if(this.state.username==='' || this.state.password===''){
    alert("EMPTY BOXES, TRY AGAIN");
}else if(responseData=="exists"){
    this.props.LogNow();
}else if(responseData=="noexists"){
    alert("Usuario No Registrado");
}else if(responseData=="admin"){
    this.props.AdminScreen();
    alert("You has Entered like Administrator");
}else{
    this.setState({happen:"INCORRECT USERNAME OR PASSWORD"});
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
        onClick={this.TryLog}></input>
    		</div>
        </form>
			</div>
			)
	}
	}
