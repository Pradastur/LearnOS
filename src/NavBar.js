/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';

export class NavBar extends React.Component {

constructor(props){
		super(props);
		this.handleChangeLogIn=this.handleChangeLogIn.bind(this)
		this.handleChangeRegister=this.handleChangeRegister.bind(this)
		this.handleChangeHome=this.handleChangeHome.bind(this)

	}

	handleChangeLogIn() {
    this.props.onSignIn();
  }

  handleChangeRegister() {
    this.props.onRegister();
  }

  handleChangeHome() {
    this.props.onHome();
  }

  render() {
  		return (
  			<div className="NavButtons">
  			<button className="LogIn" onClick={this.handleChangeLogIn}>
  				Log In
  			</button>

  			<button className="Register" onClick={this.handleChangeRegister}>
  				Register
  			</button>
  			</div>
  			);
  }
}
