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

    this.Log = this.Log.bind(this);
 }

handleNameChange = (event) => {
   this.setState({ username: event.target.value });
 };

 handlePasswordChange = (event) => {
   this.setState({ password: event.target.value });
};

Log(){
   if(this.state.username==='' || this.state.password===''){
     alert('Empty Fields');
   }else if(this.state.username==='Admin' && this.state.password==='admin'){
     this.props.AdminScreen();
   }else if(this.state.username==='Adrian' && this.state.password==='adrian'){
     this.props.LogNow();
   }else{
     alert('Wrong Username or Password');
   }
}

TryLog = () => {

var params = {
    username: this.state.username,
    password: this.state.password,
  };
return fetch("https://backend-fagcpkyvda.now.sh/users/"+this.state.username+"/"+this.state.password,
    {
      method: "GET",
    }
  )
  .then((response) => response.json() )
  .then((responseData) => {
      console.log("Response: "+responseData);
if(this.state.username==='' || this.state.password===''){
    this.setState({happen:"EMPTY BOXES, TRY AGAIN"});
}else if(responseData.success){
    this.props.LogNow();
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
    		<input id="Submit" className="buttonSubmit" type="button" value="Submit" onClick={this.Log}></input>
    		</div>
        </form>
			</div>
			)
	}
	}
