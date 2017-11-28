import React from 'react';
import {RectangularBox} from './RectangularBox'

export class Content extends React.Component {

  render() {
  		return (
        <div>
        <div className="Boxes">

          <RectangularBox pl="C"/>

          <RectangularBox pl="Java"/>

          <RectangularBox pl="Python"/>
        </div>
        </div>
  			)
  	}
  }
