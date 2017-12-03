import React from 'react';

export class RectangularBox extends React.Component {
  render() {
    return(
      <div className="light">
      <h2 className='languages'>{this.props.pl}</h2>
      <h3 className='descriptions'>{this.props.desc}</h3>
      </div>
      )
  	}
  }