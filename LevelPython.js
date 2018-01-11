import React from 'react';
import { Link } from 'react-router-dom';


export class LevelPython extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<div>
				<div className="levelList">
					<h1>Python</h1>
				</div>
				<div className="Video">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/cpPG0bKHYKc"
					frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
				</div>
				<div className="listLevel">
					<ul>
					<Link to='levelPython_1'><li>Lesson 1</li></Link>
					<Link to='levelPython_2'><li>Lesson 2</li></Link>
					<Link to='levelPython_3'><li>Lesson 3</li></Link>
					</ul>
				</div>
			</div>
			)
	}
}
