/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export class NavBar extends React.Component {
  render() {
  	const pages=['Access']
  	const navLinks= pages.map(page=>{
  		return (
  			<div className='Navigation'>
  			<button className='NavButton' href={'/' + page}>
  			{page}
  			</button>
  			</div>

  			)
  	});
  	return <nav>{navLinks}</nav>;
  }
}

