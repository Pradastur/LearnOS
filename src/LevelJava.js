import React from 'react';


export class LevelJava extends React.Component{
	constructor(props){
		super(props);
		this.changeLesson1=this.changeLesson1.bind(this);
		this.changeLesson2=this.changeLesson2.bind(this);
		this.changeLesson3=this.changeLesson3.bind(this);
		}

		changeLesson1(){
		this.props.changeToLesson1();
		}

		changeLesson2(){
		this.props.changeToLesson2();
		}

		changeLesson3(){
		this.props.changeToLesson3();
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
						<li onClick={this.changeLesson3}>Lesson 3</li>
					</ul>
				</div>
			</div>
			)
		}
}
