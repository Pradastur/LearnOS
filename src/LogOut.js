import React from 'react';

export class LogOut extends React.Component {

constructor (props) {
    super(props);
    /*this.state = {
      views: ['SigIn', 'Register']
    };*/
  this.Stay=this.Stay.bind(this)
  this.Log=this.Log.bind(this)
  }

  Stay(){
    this.props.history.replace('/start');
  }

  Log(){
    this.props.Yes();
    this.props.refreshHome();
    this.props.history.replace('/');
}

TryLog = () => {

return fetch("https://learnos-backend.herokuapp.com/users/",
    {
      method: "DELETE",
    }
  )
  .then((response) => response.json() )
  .then((responseData) => {
    console.log("Delete");
      console.log("Response: "+responseData);
if(responseData==true){
    this.Log();
    this.props.updateTextC('');
    this.props.updateTextJava('');
    this.props.updateTextPython('');
  }
}).catch(function(e) {
    alert( e.message);
  } )
}

	render(){
		/*const items = this.state.views.map(t => ( //ESTO VA EN EL 39<ul>{ items }</ul>
      <Item valor={ t } /> ));*/
		return (
			<div className="wrapper">
			 <h1>Logging Out</h1>
			   <h2> Do you really want to log out????</h2>

        <input type="radio" name="choice" id="yes" onClick={this.TryLog}></input>
          <label for="yes">Yes</label>

        <input type="radio" name="choice" id="no" onClick={this.Stay}></input>
          <label for="no">No</label>

			 </div>

			)
	}
	}
