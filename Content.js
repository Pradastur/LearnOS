import React from 'react';
import {RectangularBox} from './RectangularBox'

export class Content extends React.Component {

  constructor(props){
    super(props);
    const languages= ["C", "Java", "Python"];
    this.state={languages};
  }

  render(){
    return(
      <div>
      {this.state.languages.map((language) =>(
        <RectangularBox  key={language.toString()} pl={language} />
      ))}
      </div>)
  }
}
