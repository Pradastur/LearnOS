import React from 'react';
import {RectangularBox} from './RectangularBox'

export class Start extends React.Component{

constructor(props){
	super(props);
	const languages= ["C", "Java", "Python"];
	this.state={languages};
	this.enterC=this.enterC.bind(this);
	this.enterJava=this.enterJava.bind(this);
	this.enterPython=this.enterPython.bind(this);
		/*this.obtainLanguage=this.obtainLanguage.bind(this)*/
}

enterC(){
  	this.props.enterLevelC();
  }
  enterJava(){
  	this.props.enterLevelJava();
  }
  enterPython(){
  	this.props.enterLevelPython();
  }

/*obtainLanguage(code){
	this.props.chooseLanguage(code)
}*/

	render(){
		return(
			<div className="StartGame">

				<h1> Select Level </h1>
				<div className="Languages">

					<a onClick={()=>this.enterC()}><RectangularBox pl="C" desc="This is the language C" /></a>
					<a onClick={()=>this.enterJava()}><RectangularBox pl="Java" desc="This is the language Java"/></a>
					<a onClick={()=>this.enterPython()}><RectangularBox pl="Python" desc="This is the language Python"/></a>
				</div>
			</div>
			)
	}
}
