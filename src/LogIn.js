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
      name: '',
      pass: ''
    }
  this.Log = this.Log.bind(this);
  }

handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ pass: event.target.value });
};

  Log(){
    if(this.state.name==='' || this.state.pass===''){
      alert('Empty Fields');
    }else if(this.state.name==='Admin' && this.state.pass==='admin'){
      this.props.LogNow();
    }else{
      alert('Wrong Username or Password');
    }
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
        value={this.state.name}
        onChange={this.handleNameChange}
				placeholder="Enter Username"
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
    		<input id="Submit" className="buttonSubmit" type="button" value="Submit" onClick={this.Log}></input>
    		</div>
        </form>
			</div>
			)
	}
	}
