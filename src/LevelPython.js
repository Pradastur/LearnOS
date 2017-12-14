import React from 'react';


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
						<li onClick={this.changeToLesson1}>Lesson 1</li>
						<li onClick={this.changeToLesson2}>Lesson 2</li>
						<li onClick={this.changeToLesson3}>Lesson 3</li>
					</ul>
				</div>
			</div>
			)
	}
}
