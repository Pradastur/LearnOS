import React from 'react';
import {RectangularBox} from './RectangularBox'
import { Link } from 'react-router-dom';


export class Start extends React.Component{

constructor(props){
	super(props);
	this.state={languages:[]
	};
		/*this.obtainLanguage=this.obtainLanguage.bind(this)*/
}

componentWillReceiveProps(nextProps) {
if(this.props != nextProps) {
	this.setState({
		languages: nextProps.languageList
	});
}
}

/*obtainLanguage(code){
	this.props.chooseLanguage(code)
}*/

	render(){
		return(
			<div className="StartGame">

				<h1> Select Level </h1>
				<div className="Languages">


					<Link to='/levelC'><RectangularBox pl="C" desc="This is the language C" /></Link>
					<Link to='/levelJava'><RectangularBox pl="Java" desc="This is the language Java"/></Link>
					<Link to='/levelPython'><RectangularBox pl="Python" desc="This is the language Python"/></Link>
				</div>
			</div>
			)
	}
}
