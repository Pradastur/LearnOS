import React from 'react';
import ReactDOM from 'react-dom';

export class RectangularBox extends React.Component {
  render() {
    return(
      <div className="light">
      <h2 className='languages'>{this.props.pl}</h2>
      </div>
      )
  	}
  }