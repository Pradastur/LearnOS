import React from 'react';


export class LevelC extends React.Component{
	constructor(props){
		super(props);
		this.changeLesson1=this.changeLesson1.bind(this);
		this.changeLesson2=this.changeLesson2.bind(this);
	}

	changeLesson1(){
		this.props.changeToLesson1();
	}

	changeLesson2(){
		this.props.changeToLesson2();
	}

	render(){
		return(
			<div className="level">
				<div className="title">
					<h1>C</h1>
				</div>
				<div className="listLevel">
					<ul>
						<li onClick={this.changeLesson1}>Lesson 1</li>
						<li onClick={this.changeLesson2}>Lesson 2</li>
						<li>Lesson 3</li>
					</ul>
				</div>
			</div>
			)
	}
}
