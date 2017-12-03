import React from 'react';

export class NavBarLogOut extends React.Component {

constructor(props){
		super(props);
		this.LogOut=this.LogOut.bind(this)
	}

   LogOut(){
    this.props.goLogout();
  }

  render() {
  		return (
  			<div className="NavButtons">
  			<button className="LogOut" onClick={this.LogOut}>
  				Log Out
  			</button>
  			</div>
  			);
  }
}