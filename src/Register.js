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
      user:'',
      pass: '',
    }
  this.Log = this.Log.bind(this);
  this.Logged=this.Logged.bind(this);
  }

  handlePasswordChange = (event) => {
    this.setState({ pass: event.target.value });
};

  handleUserChange = (event) => {
      this.setState({ user: event.target.value });
    };

Logged(){
  this.props.LogNow();
}

  Log(){
    if(this.state.pass==='' || this.state.user===''){
      alert('Empty Fields');
    }else{
       alert('Now you are registered');
      {this.Logged()};
    }
}

	render(){
		/*const items = this.state.views.map(t => ( //ESTO VA EN EL 39<ul>{ items }</ul>
      <Item valor={ t } /> ));*/
		return (
			<div>
      <form>
			 <h1>Register </h1>
			<div className="containerUser">
				<label> <b> Email </b> </label>

				<input type="text"
        value={this.state.user}
        onChange={this.handleUserChange}
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
