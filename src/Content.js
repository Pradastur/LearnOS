import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png'
import {RectangularBox} from './RectangularBox'

export class Content extends React.Component {
  render() {
  		return (
        <div>
  			<div>
        <img src={logo} className='logo' alt="logo"/>
  			</div>
        <div className="Boxes">
          <RectangularBox pl="C"/>

          <RectangularBox pl="Java"/>

          <RectangularBox pl="Python"/>
        </div>
        </div>
  			)
  	}
  }
