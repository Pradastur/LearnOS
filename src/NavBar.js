/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {

constructor(props){
		super(props);

	}

  render() {
  		return (
  			<div className="NavButtons">
				<Link to='/login'>
  			<button className="LogIn">
  				Log In
  			</button>
				 </Link>
				  <Link to='/register'>
  			<button className="Register">
  				Register
  			</button>
				</Link>
  			</div>
  			);
  }
}
