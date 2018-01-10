import React from 'react';
import {RectangularBox} from './RectangularBox'

export class Content extends React.Component {

  constructor(props){
    super(props);
    this.state={languages:[]
    };
    console.log("level"+this.state.languages[1])
  }

  componentWillReceiveProps(nextProps) {
  if(this.props != nextProps) {
    this.setState({
      languages: nextProps.languageList
    });
  }
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
