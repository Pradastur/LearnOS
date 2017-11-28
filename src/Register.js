import React from 'react';
import {Content} from './Content'


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
    /*this.state = {
      views: ['SigIn', 'Register']
    };*/
  this.logged=this.logged.bind(this)

  }

  logged(){
    this.props.loggedIn();
  }

	render(){
		/*const items = this.state.views.map(t => ( //ESTO VA EN EL 39<ul>{ items }</ul>
      <Item valor={ t } /> ));*/
		return (
			<div>
			 <h1>Register </h1>
       <div className="containerName">
        <label> <b> Name </b> </label>

        <input type="text" 
        placeholder="Enter your Name" 
        name="Name"/>
        </div>
        <div className="containerFamilyName">
        <label> <b> Family Name </b> </label>

        <input type="text" 
        placeholder="Enter your Family Name" 
        name="Family Name"/>
        </div>
			<div className="containerUser">
				<label> <b> Username </b> </label>

				<input type="text" 
				placeholder="Enter Username" 
				name="username"/>
				</div>
			<div className="containerPswd">
				<label> <b> Password </b> </label>

    			<input type="password" 
    			placeholder="Enter Password" 
    			name="password"/>
    		</div>
        <div className="containerRePswd">
        <label> <b> Re-Password </b> </label>

          <input type="password" 
          placeholder="Enter the Password Again" 
          name="re-password"/>
        </div>
    		<div>
    		<input id="Submit" className="buttonSubmit" type="button" value="Submit" onClick={this.logged}></input>
    		</div>
			</div>
			)
	}
	}